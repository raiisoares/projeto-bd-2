import {FastifyInstance} from "fastify";
import {z} from "zod";

const createCustomerBody = z.object({
  name: z.string(),
  sex: z.string(),
  age: z.coerce.number(),
  birthdate: z.coerce.date().transform((date) => date.toLocaleDateString('fr-CA'))
});

export async function customerController(app: FastifyInstance, option: any, done: () => void) {
  app.post('/create-customer', async (req, reply) => {
    const {name, sex, age, birthdate} = createCustomerBody.parse(req.body);

    try {
      await app.mysql.query('USE empresa;')
      await app.mysql.query(`INSERT INTO customer
                             VALUES (null, ?, ?, ?, ?);`, [name, sex, age, birthdate])

      reply.status(201).send("Customer created.")
    } catch (err: any) {
      reply.status(400).send(err.message)
    }
  })

  app.get('/find-all', async (_, reply) => {
    try {
      await app.mysql.query('USE empresa;')
      const [customers] = await app.mysql.query(`SELECT *
                                                FROM customer;`)

      reply.status(200).send({data: customers})
    } catch (err: any) {
      reply.status(500).send(err.message)
    }
  })

  done()
}