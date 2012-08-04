void function(){

var whatKey = function(k){
  // if ('char' in k) {
  //   return function whatKey(e){
  //     return (e.char || '').toLowerCase();
  //   };
  // }
  if ('keyIdentifier' in k) {
    return function whatKey(e){
      return e.keyIdentifier.toLowerCase();
    };
  } else if ('charCode' in k) {
    return function whatKey(e){
      return (e.charCode || '').toLowerCase();
    };
  }
}(document.createEvent('KeyboardEvent'));


function Keyboard(view){
  var self = this;
  this.keys = {};
  this.view = view;
  this.ctrl = false;
  this.shift = false;
  this.alt = false;
  this.meta = false;

  var events = {
    keydown: function(e){
      self.update(e);
      self.emit('down', e);
    },
    keyup: function(e){
      self.update(e);
      self.emit('up', e);
    },
    keypress: function(e){
      self.update(e);
      self.emit('press', e);
    }
  };

  for (var k in events) {
    view.addEventListener(k, events[k], true);
  }
}

Keyboard.prototype = {
  constructor: Keyboard,
  update: function update(evt){
    this.lastKey = whatKey(evt);
    this.lasyEvent = evt;
    this.ctrl = evt.ctrlKey;
    this.shift = evt.shiftKey;
    this.alt = evt.altKey;
    this.meta = evt.metaKey;
  },
  emit: function emit(type, evt){
    var listeners = this.listeners[this.lastKey];
    if (listeners) {
      for (var i=0; i < listeners.length; i++) {
        listeners[i](type, evt);
      }
    }
  },
  on: function on(bind, listener){
    var self = this,
        current = 0,
        events = [],
        keys = bind.split('->');

    if (keys.length > 1) {

      keys.forEach(function(key, index){
        var listeners = self.keys[key] || (self.keys[key] = []);
        listeners.push(function(type, evt){
          if (type === 'down') {
            if (events.length === index) {
              events.push(evt);
              if (index === keys.length - 1) {
                listener.apply(self, events);
                events.length = 0;
              }
            }
          } else {
            events.length = 0;
          }
        });
      });

    } else if ((keys = bind.split('+')).length > 1) {

      keys.forEach(function(key, index){
        var listeners = self.keys[key] || (self.keys[key] = []);
        listeners.push(function(type, evt){
          if (evt.type === 'down') {
            current++;
            events[index] = evt;
            if (events.length === keys.length) {
              listener.apply(self, events);
              events.length = 0;
            }
          } else if (type === 'up') {
            current--;
            events[index] = null;
          }
        });
      });

    } else {
      var listeners = self.keys[bind] || (self.keys[bind] = []);
      listeners.push(function(type, evt){
        listener.call(self, evt);
      });
    }
  }
};


window.keyboard = new Keyboard(window);


}();
