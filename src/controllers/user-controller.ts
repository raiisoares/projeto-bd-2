import {FastifyInstance} from "fastify";
import {z} from "zod";

const createUserBody = z.object({
  name: z.string(),
  password: z.string(),
});

export async function userController(app: FastifyInstance, option: any, done: () => void) {
  app.post('/drop-user', async (req, reply) => {
    const createUserAdminBody = z.object({
      name: z.string(),
    });

    const {name} = createUserAdminBody.parse(req.body);

    try {
      await app.mysql.query('DROP USER ?@localhost', [name])
      reply.status(200).send("User deleted")
    } catch (err: any) {
      reply.status(500).send(err.message)
    }
  })

  app.post('/create-user-admin', async (req, reply) => {
    const {name, password} = createUserBody.parse(req.body);

    try {
      await app.mysql.query('USE empresa;')
      await app.mysql.query(`CREATE USER ?@localhost IDENTIFIED BY ?`, [name, password])
      await app.mysql.query('GRANT ALL PRIVILEGES ON empresa TO ?@localhost WITH GRANT OPTION', [name])
      await app.mysql.query('FLUSH PRIVILEGES')
      reply.status(201).send("Admin created")
    } catch (error: any) {
      reply.status(500).send(`Error: ${error.message}`)
    }
  })

  app.post('/create-user-manager', async (req, reply) => {
    const {name, password} = createUserBody.parse(req.body);

    try {
      await app.mysql.query('USE empresa;')
      await app.mysql.query(`CREATE USER ?@localhost IDENTIFIED BY ?`, [name, password])
      await app.mysql.query('GRANT SELECT, UPDATE, DELETE ON * TO ?@localhost WITH GRANT OPTION', [name])
      await app.mysql.query('FLUSH PRIVILEGES')
      reply.status(201).send("Manager created")
    } catch (error: any) {
      reply.status(500).send(`Error: ${error.message}`)
    }
  })

  app.post('/create-user-salesman', async (req, reply) => {
    const {name, password} = createUserBody.parse(req.body);

    try {
      await app.mysql.query('USE empresa;')
      await app.mysql.query(`CREATE USER ?@localhost IDENTIFIED BY ?`, [name, password])
      await app.mysql.query('GRANT CREATE, SELECT ON empresa.sale TO ?@localhost WITH GRANT OPTION', [name])
      await app.mysql.query('FLUSH PRIVILEGES')
      reply.status(201).send("Salesman created")
    } catch (error: any) {
      reply.status(500).send(`Error: ${error.message}`)
    }
  })

  done()
}