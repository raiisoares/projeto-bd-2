import fastify, {FastifyInstance} from "fastify";
import fastifyMysql, {MySQLPromiseConnection} from '@fastify/mysql'
import {databaseController} from "@controller/database-controller";
import {userController} from "@controller/user-controller";
import {productController} from "@controller/product-controller";
import {customerController} from "@controller/customer-controller";
import {specialCustomerController} from "@controller/special-customer-controller";
import {employeeController} from "@controller/employee-controller";
import {saleController} from "@controller/sale-controller";
import {cashbackController} from "@controller/cashback-controller";

declare module 'fastify' {
  interface FastifyInstance {
    mysql: MySQLPromiseConnection
  }
}

const app: FastifyInstance = fastify({
  logger: true
})

app.register(fastifyMysql, {
  host: 'localhost',
  user: 'root',
  password: '12345',
  type: "connection",
  multipleStatements: true,
  promise: true,
})

app.register(databaseController, {prefix: '/database'})
app.register(userController, {prefix: '/user'})
app.register(productController, {prefix: '/product'})
app.register(customerController, {prefix: '/customer'})
app.register(specialCustomerController, {prefix: '/special-customer'})
app.register(employeeController, {prefix: '/employee'})
app.register(saleController, {prefix: '/sale'})
app.register(cashbackController, {prefix: '/cashback'})

app.listen({port: 3333}, error => {
  if (error)
    return app.log.error(error)

  console.log('Server running on port 3333')
})