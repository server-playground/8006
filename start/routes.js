'use strict'

const Route = use('Route')

Route.get('/', ({ request }) => {
  console.log('')
  console.log(request.url())
  console.log(request.headers()['user-agent'])
  return 'hello world'
})
