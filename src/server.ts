import fastify, {FastifyInstance} from "fastify";
import {MySQLConnection} from '@fastify/mysql'
import {createDatabase} from "./routes/database/create-database";
import {dropDatabase} from "./routes/database/drop-database";
import {createUserAdmin} from "./routes/user/create-user-admin";
import {dropUser} from "./routes/user/drop-user";

declare module 'fastify' {
  interface FastifyInstance {
    mysql: MySQLConnection
  }
}

const app: FastifyInstance = fastify({
  logger: true
})

app.register(require('@fastify/mysql'), {
  connectionString: 'mysql://root:12345@localhost/mysql'
})

app.register(createDatabase)
app.register(dropDatabase)
app.register(createUserAdmin)
app.register(dropUser)


app.listen({port: 3333}, error => {
  if (error)
    return app.log.error(error)

  console.log('Server running on port 3333')
})