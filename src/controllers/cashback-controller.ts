import {FastifyInstance} from "fastify";
import {z} from "zod";
import {RowDataPacket} from "mysql2";

const redeemCashbackBody = z.object({
  id: z.coerce.number(),
  amount: z.coerce.number(),
});

interface CashbackResponse extends RowDataPacket {
  id: number;
  name: string;
  cashback: number;
}

export async function cashbackController(app: FastifyInstance, option: any, done: () => void) {
  app.post('/redeem-cashback', async (req, reply) => {
    const {id, amount} = redeemCashbackBody.parse(req.body);

    const [specialCustomer] = await app.mysql.query<CashbackResponse[]>
    ('SELECT id, name, cashback FROM empresa.specialcustomer WHERE id_customer = ?', [id]);

    if (specialCustomer.length === 0) {
      return reply.status(404).send({message: 'User does not belong special customers club'})
    }

    const availableCashback = specialCustomer[0].cashback

    if (availableCashback < amount) {
      return reply.status(400).send({message: 'Available cashback is not enough'})
    }

    const updatedCashback = availableCashback - amount

    try {
      if (updatedCashback === 0) {
        await app.mysql.query('DELETE FROM empresa.specialcustomer WHERE id_customer = ?', [id])
        reply.status(200).send({
          message: 'Cashback retrieved successfully, and you were removed from special customers club'
        })
      }

      await app.mysql.query('UPDATE empresa.specialcustomer SET cashback = ? WHERE id_customer = ?', [updatedCashback, id])
      reply.status(200).send({message: 'Cashback retrieved successfully'})
    } catch (err: any) {
      reply.status(500).send({message: err.message})
    }
  })

  done()
}


