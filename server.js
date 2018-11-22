const noise = require('noise-network')

const server = noise.createServer()

server.on('connection', function (connection) {
  console.log('someone joined wup wup')
  connection.on('data', function(data){  console.log( data.toString() ) })
  connection.write('hello back');
})

server.listen(noise.keygen(), function () {
  const client = noise.connect(server.publicKey)
  client.write('hello world')
  client.on('data', function(data){  console.log( data.toString() ) })
  console.log('Server is listening on:', server.publicKey.toString('hex'))
})

