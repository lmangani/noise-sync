const noise = require('noise-network')

var args = process.argv.slice(2);
if (!args[0]) process.exit();

// noise guarantees that we connect to the server in a E2E encrypted stream
const client = noise.connect(args[0])

// client is a noise-peer stream instance
client.write('hello server from remote')
client.on('data', function(data){  console.log( data.toString() ) })
