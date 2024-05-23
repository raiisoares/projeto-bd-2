import {FastifyInstance} from "fastify";

export async function databaseController(app: FastifyInstance, option: any, done: () => void) {
  app.delete('/delete-database', async (_, reply) => {
    try {
      await app.mysql.execute('DROP DATABASE IF EXISTS empresa')
      reply.status(200).send("Database deleted")
    } catch (err: any) {
      console.log(err.message)
    }
  })

  app.get('/create-database', async (_, reply) => {
    try {
      await app.mysql.query('CREATE DATABASE IF NOT EXISTS empresa;')
      await app.mysql.query('USE empresa;')

      await app.mysql.query(`CREATE TABLE IF NOT EXISTS customer
                             (
                                 id        INT PRIMARY KEY AUTO_INCREMENT,
                                 name      VARCHAR(50),
                                 sex       CHAR CHECK (sex = 'f' OR sex = 'm' OR sex = 'o'),
                                 age       INT,
                                 birthdate DATE
                             );`)

      await app.mysql.query(`CREATE TABLE specialCustomer
                             (
                                 id          INT PRIMARY KEY AUTO_INCREMENT,
                                 name        VARCHAR(50),
                                 sex         CHAR CHECK (sex = 'f' OR sex = 'm' OR sex = 'o'),
                                 age         INT,
                                 id_customer INT,
                                 cashback    DECIMAL(10, 2),
                                 FOREIGN KEY (id_customer) REFERENCES customer (id)
                             );`)

      await app.mysql.query(`CREATE TABLE employee
                             (
                                 id        INT PRIMARY KEY AUTO_INCREMENT,
                                 name      VARCHAR(50),
                                 age       INT,
                                 sex       CHAR CHECK (sex = 'f' OR sex = 'm' OR sex = 'o'),
                                 position  VARCHAR(20) CHECK (position = 'salesman' OR position = 'manager' OR position = 'ceo'),
                                 salary    DECIMAL(10, 2),
                                 birthdate DATE
                             );`)

      await app.mysql.query(`CREATE TABLE product
                             (
                                 id          INT PRIMARY KEY AUTO_INCREMENT,
                                 name        VARCHAR(50),
                                 quantity    INT,
                                 description TEXT,
                                 value       DECIMAL(10, 2)
                             );`)

      await app.mysql.query(`CREATE TABLE sale
                             (
                                 id          INT PRIMARY KEY AUTO_INCREMENT,
                                 id_salesman INT  NOT NULL,
                                 id_customer INT  NOT NULL,
                                 id_product  INT  NOT NULL,
                                 date        DATE NOT NULL,
                                 FOREIGN KEY (id_salesman) REFERENCES employee (id),
                                 FOREIGN KEY (id_customer) REFERENCES customer (id),
                                 FOREIGN KEY (id_product) REFERENCES product (id)
                             );`)

      reply.status(201).send({msg: "Database created"})
    } catch (err: any) {
      await app.mysql.execute('DROP DATABASE IF EXISTS empresa')
      reply.status(500).send(err.message)
    }
  })

  done()
}


