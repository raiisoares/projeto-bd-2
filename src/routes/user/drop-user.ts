import {FastifyInstance} from "fastify";
import {z} from "zod";

export async function dropUser(app: FastifyInstance) {
  app.post('/drop-user', (req, reply) => {
    const createUserAdminBody = z.object({
      name: z.string(),
    });

    const {name} = createUserAdminBody.parse(req.body);

    app.mysql.query('DROP USER ?@localhost', [name],
      function onResult(err: any) {
        if (err)
          return reply.status(400).send(err.message)
      }
    )
    reply.status(200).send("User deleted")
  })
}