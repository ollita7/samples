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