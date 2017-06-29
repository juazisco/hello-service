var config = {};
if(process.env.NODE_ENV == "pro"){
  config = {
    server: {
      host: '0.0.0.0',
      port: process.env.PORT || 3001
    }
  }
}
if (process.env.NODE_ENV == 'dev' || !process.env.NODE_ENV) {
  config = {
    server: {
      host: '0.0.0.0',
      port: process.env.PORT || 3011
    }
  }
}
if (process.env.NODE_ENV == 'test') {
  config = {
    server: {
      host: '0.0.0.0',
      port: process.env.PORT || 3021
    },
  }
}

module.exports = config
