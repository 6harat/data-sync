let proc = require('process');

proc.on('message', (msg : any) => {
  console.log('Message from parent:', msg);
});

let counter = 0;

setInterval(() => {
  proc.send({ counter: counter++ });
}, 1000);