import {FastifyInstance} from "fastify";
import {z} from "zod";

export async function createUserAdmin(app: FastifyInstance) {
  app.post('/create-user-admin', (req, reply) => {
    const createUserAdminBody = z.object({
      name: z.string(),
      password: z.string(),
    });

    const {name, password} = createUserAdminBody.parse(req.body);

    try {
      app.mysql.query('CREATE USER ?@localhost IDENTIFIED BY ?', [name, password])

      app.mysql.query('GRANT ALL PRIVILEGES ON empresa TO ?@localhost WITH GRANT OPTION', [name])

      app.mysql.query('FLUSH PRIVILEGES')

      reply.status(201).send("Admin created")
    } catch (error) {
      reply.status(400).send("Error: ")
    }

  })
}