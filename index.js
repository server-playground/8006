'use strict'

const { Ignitor } = require('@adonisjs/core/build/standalone')

new Ignitor(__dirname)
  .httpServer()
  .start()

console.log('server is running on "http://localhost:8006/"')
