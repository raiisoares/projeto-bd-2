import {FastifyInstance} from "fastify";

export async function specialCustomerController(app: FastifyInstance, option: any, done: () => void) {
  app.get('/find-all', async (_, reply) => {
    try {
      const [specialCustomers] = await app.mysql.query(`SELECT *
                                                FROM empresa.specialCustomer;`)

      reply.status(200).send({specialCustomers})
    } catch (err: any) {
      reply.status(500).send(err.message)
    }
  })

  done()
}