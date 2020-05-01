# Custom Events sample
Sample of event emitter without using default nodejs EventEmitter.

Custom emitter module provide two functionalities: 1) `on` to add a new listener and 2) `emit` to emit some event to all listeners.

```javascript
function Emitter(){
  this.events = {};
}

Emitter.prototype.on = function(type, listener){
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener)
}

Emitter.prototype.emit = function(type, data){
  if(this.events[type]){
    this.events[type].forEach(listener => {
      listener(data);
    });
  }
}

Emitter.prototype.listeners = function(type){
  return !this.events[type] ? 0 : this.events[type].length;
}

module.exports = Emitter;
```

The following code is a sample of how to use our custom emitter module.
```javascript
var Emitter = require('./emitter');

const emitter = new Emitter();
const event_name = 'something_happend';

emitter.on(event_name, function(data){
  console.log(`Something happend event 1 with: ${data}`);
});

emitter.emit(event_name, "data information");
```

Code is on that [links](https://github.com/ollita7/samples/tree/master/events).

