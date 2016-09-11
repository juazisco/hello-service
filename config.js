var config = {};
if(process.env.NODE_ENV == "pro"){
  config = {
    server: {
      host: '0.0.0.0',
      port: process.env.PORT || 3000
    }
  }
}
if (process.env.NODE_ENV == 'dev' || !process.env.NODE_ENV) {
  config = {
    server: {
      host: '0.0.0.0',
      port: process.env.PORT || 3010
    }
  }
}
if (process.env.NODE_ENV == 'test') {
  config = {
    server: {
      host: '0.0.0.0',
      port: process.env.PORT || 3020
    },
  }
}

module.exports = config
