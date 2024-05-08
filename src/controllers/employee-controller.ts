import {FastifyInstance} from "fastify";

export async function employeeController(app: FastifyInstance, option: any, done: () => void) {

  app.get('/find-all', async (_, reply) => {
    try {
      await app.mysql.query('USE empresa;')
      const [employee] = await app.mysql.query(`SELECT *
                                                FROM employee;`)

      reply.status(200).send({data: employee})
    } catch (err: any) {
      reply.status(500).send(err.message)
    }
  })

  done()
}