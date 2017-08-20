const { fork } = require('child_process');

const forked = fork('Nodechild');

forked.on('message', (msg : any) => {
  console.log('Message from child', msg);
});

forked.send({ hello: 'world' });