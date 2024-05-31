import {FastifyInstance} from "fastify";
import {salesmanBonusTrigger} from "../triggers/salesman-bonus";
import {customerCashbackTrigger} from "../triggers/customer-cashback";

export async function databaseController(app: FastifyInstance, option: any, done: () => void) {
  app.delete('/drop-database', async (_, reply) => {
    try {
      await app.mysql.execute('DROP DATABASE IF EXISTS empresa')
      reply.status(200).send("Database deleted")
    } catch (err: any) {
      reply.status(400).send({message: err.message})
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
                                 FOREIGN KEY (id_customer) REFERENCES empresa.customer (id)
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

      await app.mysql.query(`CREATE TABLE specialEmployee
                             (
                                 id          INT PRIMARY KEY AUTO_INCREMENT,
                                 name        VARCHAR(255),
                                 sex         CHAR(1) CHECK (sex = 'f' OR sex = 'm' OR sex = 'o'),
                                 age         INT,
                                 id_employee INT,
                                 bonus       DECIMAL(10, 2),
                                 FOREIGN KEY (id_employee) REFERENCES empresa.employee (id)
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
                                 amount      INT  NOT NULL,
                                 date        DATE NOT NULL,
                                 FOREIGN KEY (id_salesman) REFERENCES empresa.employee (id),
                                 FOREIGN KEY (id_customer) REFERENCES empresa.customer (id),
                                 FOREIGN KEY (id_product) REFERENCES empresa.product (id)
                             );`)

      await app.mysql.query(`CREATE TABLE delete_specialCustomer_queue
                             (
                                 id INT
                             );`)

      await app.mysql.query('DROP TRIGGER IF EXISTS salesman_bonus;')
      await app.mysql.query('DROP TRIGGER IF EXISTS customer_cashback;')

      const salesmanBonusTriggerQuery = salesmanBonusTrigger()
      await app.mysql.query(salesmanBonusTriggerQuery);

      const customerCashbackTriggerQuery = customerCashbackTrigger()
      await app.mysql.query(customerCashbackTriggerQuery);

      reply.status(201).send({msg: "Database created"})
    } catch (err: any) {
      await app.mysql.execute('DROP DATABASE IF EXISTS empresa')
      reply.status(500).send(err.message)
    }
  })

  done()
}


