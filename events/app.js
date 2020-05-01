var Emitter = require('./emitter');

const emitter = new Emitter();
const event_name = 'something_happend';


emitter.on(event_name, function(data){
  console.log(`Something happend event 1 with: ${data}`);
});

emitter.on(event_name, function(data){
  console.log(`Something happend event 2 with: ${data}`);
});

emitter.on(event_name, function(data){
  console.log(`Something happend event 3 with: ${data}`);
});

emitter.on(event_name, function(data){
  console.log(`Something happend event 4 with: ${data}`);
});

console.log(`Listeners count: ${emitter.listeners(event_name)}`);

emitter.emit(event_name, "data information");