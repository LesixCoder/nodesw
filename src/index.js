const yargs = require('yargs');
const Server = require('./app');

const argv = yargs
  .usage('anywhere [options]')
  .option('h', {
    alias: 'hostname',
    describe: 'host',
    default: '127.0.0.1'
  })
  .option('p', {
    alias: 'port',
    describe: '端口号',
    default: 9001
  })
  .option('d', {
    alias: 'root',
    describe: 'root',
    default: process.cwd()
  })
  .version()
  .alias('v', 'version')
  .help()
  .argv;

  const server = new Server(argv);
  server.start();
