'use strict'

const { Env } = require('@adonisjs/env')

module.exports = {
  appKey: new Env().get('APP_KEY'),
  http: {
    cookie: {},
    trustProxy: Boolean
  }
}
