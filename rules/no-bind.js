'use strict'

const utils = require('./utils.js')

module.exports = {
  meta: {
    docs: {},
    schema: []
  },

  create: function(context) {
    return {
      CallExpression: function(node) {
        if (node.callee.type !== 'MemberExpression') return
        if (node.callee.property.name !== 'bind') return

        if (utils.isjQuery(node)) {
          context.report({
            node: node,
            message: 'Prefer addEventListener to $.bind'
          })
        }
      }
    }
  }
}
