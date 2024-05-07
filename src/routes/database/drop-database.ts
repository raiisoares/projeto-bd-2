import {FastifyInstance} from "fastify";

export async function dropDatabase(app: FastifyInstance) {
  app.delete('/delete-database', (_, reply) => {
    app.mysql.query('DROP DATABASE IF EXISTS empresa',
      function onResult(err: any) {
        if (err)
          return reply.status(400).send(err.message)
      }
    )
    reply.status(200).send("Database deleted")
  })
}

