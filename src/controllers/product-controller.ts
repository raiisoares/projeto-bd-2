import {FastifyInstance} from "fastify";
import {z} from "zod";

const createProductBody = z.object({
  name: z.string(),
  quantity: z.coerce.number(),
  description: z.string(),
  value: z.coerce.number()
});


export async function productController(app: FastifyInstance, option: any, done: () => void) {
  app.post('/create-product', async (req, reply) => {
    const {name, quantity, description, value} = createProductBody.parse(req.body);

    try {
      await app.mysql.query(`INSERT INTO empresa.product
                             VALUES (null, ?, ?, ?, ?);`, [name, quantity, description, value])

      reply.status(201).send("Product created.")
    } catch (err: any) {
      reply.status(400).send(err.message)
    }
  })

  app.get('/find-all', async (_, reply) => {
    try {
      const [products] = await app.mysql.query(`SELECT *
                                                FROM empresa.product;`)

      reply.status(200).send({products})
    } catch (err: any) {
      reply.status(500).send(err.message)
    }
  })

  done()
}