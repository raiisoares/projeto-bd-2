import {FastifyInstance} from "fastify";

export async function employeeController(app: FastifyInstance, option: any, done: () => void) {

  app.get('/find-all', async (_, reply) => {
    try {
      const [employee] = await app.mysql.query(`SELECT *
                                                FROM empresa.employee;`)

      reply.status(200).send({employee})
    } catch (err: any) {
      reply.status(500).send(err.message)
    }
  })

  done()
}