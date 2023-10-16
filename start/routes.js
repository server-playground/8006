'use strict'

const Route = global[Symbol.for('ioc.use')]('Adonis/Core/Route')

Route.get('/', ({ request }) => {
  console.log('')
  console.log(request.url())
  console.log(request.headers()['user-agent'])
  return 'hello world'
})
