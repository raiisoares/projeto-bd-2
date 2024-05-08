import {FastifyInstance} from "fastify";
import {z} from "zod";

const createSpecialCustomerBody = z.object({
  name: z.string(),
  sex: z.string(),
  age: z.coerce.number(),
  id_customer: z.coerce.number(),
  cashback: z.coerce.number()
});

export async function specialCustomerController(app: FastifyInstance, option: any, done: () => void) {
  app.post('/create-special-customer', async (req, reply) => {
    const {name, sex, age, id_customer, cashback} = createSpecialCustomerBody.parse(req.body);

    try {
      await app.mysql.query('USE empresa;')
      await app.mysql.query(`INSERT INTO specialCustomer
                             VALUES (null, ?, ?, ?, ?, ?);`, [name, sex, age, id_customer, cashback])

      reply.status(201).send("Special customer created.")
    } catch (err: any) {
      reply.status(400).send(err.message)
    }
  })

  app.get('/find-all', async (_, reply) => {
    try {
      await app.mysql.query('USE empresa;')
      const [specialCustomers] = await app.mysql.query(`SELECT *
                                                FROM specialCustomer;`)

      reply.status(200).send({data: specialCustomers})
    } catch (err: any) {
      reply.status(500).send(err.message)
    }
  })

  done()
}