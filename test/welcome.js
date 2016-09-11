var Lab = require('lab')
var lab = exports.lab = Lab.script()
var code = require('code');
var server = require('../app')

lab.experiment('Welcome test', function() {
  lab.test('Welcome with GET', function(done) {
    var options = {
      method: 'GET',
      url: '/welcome/juazisco'
    }
    server.inject(options, function(response) {
      var result = response.result
      code.expect(response.statusCode).to.equal(200)
      code.expect(result.statusCode).to.equal(0)
      code.expect(result.mensaje).to.equal("Welcome juazisco")
      done()
    })
  })

  lab.test('Welcome with POST', function(done) {
    var options = {
      method: 'POST',
      url: '/welcome',
      payload: {
        name: 'juazisco'
      }
    }
    server.inject(options, function(response) {
      var result = response.result
      code.expect(response.statusCode).to.equal(200)
      code.expect(result.statusCode).to.equal(0)
      code.expect(result.mensaje).to.equal("Welcome juazisco")
      done()
    })
  })

})
