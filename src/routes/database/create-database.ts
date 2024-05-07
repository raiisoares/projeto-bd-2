import {FastifyInstance} from "fastify";

export async function createDatabase(app: FastifyInstance) {
  app.get('/create-database', (_, reply) => {
    try {
      app.mysql.query('CREATE DATABASE IF NOT EXISTS empresa')

      app.mysql.query('USE empresa')

      reply.status(201).send("Database created")
    } catch (error) {
      reply.status(400).send("Error: ")
    }
  })
}

