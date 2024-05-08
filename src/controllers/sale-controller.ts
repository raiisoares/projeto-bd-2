import {FastifyInstance} from "fastify";
import {z} from "zod";

const createSaleBody = z.object({
  id_salesman: z.coerce.number(),
  id_customer: z.coerce.number(),
  date: z.coerce.date().transform((date) => date.toLocaleDateString('fr-CA'))
});

export async function saleController(app: FastifyInstance, option: any, done: () => void) {

  app.post('/create-sale', async (req, reply) => {
    const {id_salesman, id_customer, date} = createSaleBody.parse(req.body);

    try {
      await app.mysql.query('USE empresa;')
      await app.mysql.query(`INSERT INTO sale
                             VALUES (null, ?, ?, ?);`, [id_salesman, id_customer, date])

      reply.status(201).send("Sale created.")
    } catch (err: any) {
      reply.status(400).send(err.message)
    }
  })

  app.get('/find-all', async (_, reply) => {
    try {
      await app.mysql.query('USE empresa;')
      const [sales] = await app.mysql.query(`SELECT *
                                             FROM sale;`)

      reply.status(200).send({data: sales})
    } catch (err: any) {
      reply.status(500).send(err.message)
    }
  })

  done()
}