import Fastify from 'fastify'

const fastify = Fastify()
await fastify.register(import('@fastify/rate-limit'), {
  max: 5,
  timeWindow: '1 minute'
})

fastify.get('/', (request, reply) => {
  reply.send({ hello: 'world' })
})

fastify.listen(3000, err => {
  if (err) throw err
  console.log('Server listening at http://localhost:3000')
})