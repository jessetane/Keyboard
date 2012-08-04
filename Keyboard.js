void function(){

function whatKey(evt){
  if (keymap[evt.charCode]) {
    return keymap[evt.charCode];
  } else {
    return String.fromCharCode(evt.charCode);
  }
}

var keymap = {
  8: "backspace", 9: "tab", 13: "return", 16: "shift", 17: "ctrl", 18: "alt", 19: "pause",
  20: "capslock", 27: "esc", 32: "space", 33: "pageup", 34: "pagedown", 35: "end", 36: "home",
  37: "left", 38: "up", 39: "right", 40: "down", 45: "insert", 46: "del",
  96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7",
  104: "8", 105: "9", 106: "*", 107: "+", 109: "-", 110: ".", 111 : "/",
  112: "f1", 113: "f2", 114: "f3", 115: "f4", 116: "f5", 117: "f6", 118: "f7", 119: "f8",
  120: "f9", 121: "f10", 122: "f11", 123: "f12", 144: "numlock", 145: "scroll", 191: "/", 224: "meta"
};

// var shiftKeymap = {
//   "`": "~", "1": "!", "2": "@", "3": "#", "4": "$", "5": "%", "6": "^", "7": "&",
//   "8": "*", "9": "(", "0": ")", "-": "_", "=": "+", ";": ": ", "'": "\"", ",": "<",
//   ".": ">",  "/": "?",  "\\": "|"
// };


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
    this.lastEvent = evt;
    this.ctrl = evt.ctrlKey;
    this.shift = evt.shiftKey;
    this.alt = evt.altKey;
    this.meta = evt.metaKey;
  },
  emit: function emit(type, evt){
    var listeners = this.keys['*'];
    if (listeners) {
      for (var i=0; i < listeners.length; i++) {
        listeners[i](type, evt);
      }
    }

    listeners = this.keys[this.lastKey];
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

    if (bind === '*') {

      var listeners = this.keys['*'] || (this.keys['*'] = []);
      listeners.push(function(type, evt){
        listeners.call(self, evt);
      });

    } else if (keys.length > 1) {

      keys.forEach(function(key, index){
        var listeners = self.keys[key] || (self.keys[key] = []);
        listeners.push(function(type, evt){
          if (type === 'down' && events.length === index) {
            events.push(evt);
            if (index === keys.length - 1) {
              listener.apply(self, events);
              events.length = 0;
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

window.Keyboard = Keyboard;
Object.defineProprerty(Window.prototype, 'keyboard', {
  enumerate: true,
  configurable: true,
  get: function(){
    var kb = new Keyboard(this);
    Object.defineProperty(this, 'keyboard', {
      enumerable: true,
      configurable: true,
      writable: true,
      value: kb
    });
    return kb;
  }
});
}();
