void function(){

var keys = {
    0: ['Unknown'],
    1: ['Mouse 1'],
    2: ['Mouse 2'],
    3: ['Break'],
    4: ['Mouse 3'],
    5: ['Mouse 4'],
    6: ['Mouse 5'],
    8: ['Backspace'],
    9: ['Tab'],
   12: ['Clear'],
   13: ['Return'],
   16: ['Shift'],
   17: ['Control'],
   18: ['Alt'],
   19: ['Pause'],
   20: ['CapsLock'],
   21: ['IME Hangul'],
   23: ['IME Junja'],
   24: ['IME Final'],
   25: ['IME Kanji'],
   27: ['Escape'],
   28: ['IME Convert'],
   29: ['IME Nonconvert'],
   30: ['IME Accept'],
   31: ['IME Modechange'],
   32: ['Space'],
   33: ['PageUp'],
   34: ['PageDown'],
   35: ['End'],
   36: ['Home'],
   37: ['Left'],
   38: ['Up'],
   39: ['Right'],
   40: ['Down'],
   41: ['Select'],
   42: ['Print'],
   43: ['Execute'],
   44: ['Snapshot'],
   45: ['Insert'],
   46: ['Delete'],
   47: ['Help'],
   48: '0)',
   49: '1!',
   50: '2@',
   51: '3#',
   52: '4$',
   53: '5%',
   54: '6^',
   55: '7&',
   56: '8*',
   57: '9(',
   65: 'aA',
   66: 'bB',
   67: 'cC',
   68: 'dD',
   69: 'eE',
   70: 'fF',
   71: 'gG',
   72: 'hH',
   73: 'iI',
   74: 'jJ',
   75: 'kK',
   76: 'lL',
   77: 'mM',
   78: 'nN',
   79: 'oO',
   80: 'pP',
   81: 'qQ',
   82: 'rR',
   83: 'sS',
   84: 'tT',
   85: 'uU',
   86: 'vV',
   87: 'wW',
   88: 'xX',
   89: 'yY',
   90: 'zZ',
   91: ['Left Win'],
   92: ['Right Win'],
   93: ['Menu'],
   95: ['Sleep'],
   96: ['Numpad 0', 'Numpad Insert'],
   97: ['Numpad 1', 'Numpad End'],
   98: ['Numpad 2', 'Numpad Down'],
   99: ['Numpad 3', 'Numpad PageDown'],
  100: ['Numpad 4', 'Numpad Left'],
  101: ['Numpad 5', 'Numpad Clear'],
  102: ['Numpad 6', 'Numpad Right'],
  103: ['Numpad 7', 'Numpad Home'],
  104: ['Numpad 8', 'Numpad Up'],
  105: ['Numpad 9', 'Numpad PageUp'],
  106: ['Numpad *', 'Shift Numpad *'],
  107: ['Numpad +', 'Shift Numpad +'],
  108: ['Numpad Separator', 'Numpad '],
  109: ['Numpad -', 'Shift Numpad -'],
  110: ['Numpad .', 'Numpad Delete'],
  111: ['Numpad /', 'Shift Numpad /'],
  112: ['F1'],
  113: ['F2'],
  114: ['F3'],
  115: ['F4'],
  116: ['F5'],
  117: ['F6'],
  118: ['F7'],
  119: ['F8'],
  120: ['F9'],
  121: ['F10'],
  122: ['F11'],
  123: ['F12'],
  124: ['F13'],
  125: ['F14'],
  126: ['F15'],
  127: ['F16'],
  128: ['F17'],
  129: ['F18'],
  130: ['F19'],
  131: ['F20'],
  132: ['F21'],
  133: ['F22'],
  134: ['F23'],
  135: ['F24'],
  144: ['NumLock'],
  145: ['ScrollLock'],
  160: ['Left Shift'],
  161: ['Right Shift'],
  162: ['Left Control'],
  163: ['Right Control'],
  164: ['Left Alt'],
  165: ['Right Alt'],
  166: ['Browser Back'],
  167: ['Browser Forward'],
  168: ['Browser Refresh'],
  169: ['Browser Stop'],
  170: ['Browser Search'],
  171: ['Browser Favorites'],
  172: ['Browser Home'],
  173: ['Volume Mute'],
  174: ['Volume Down'],
  175: ['Volume Up'],
  176: ['Next Track'],
  177: ['Prev Track'],
  178: ['Stop'],
  179: ['Play/Pause'],
  180: ['Launch Mail'],
  181: ['Launch Media Select'],
  182: ['Launch App1'],
  183: ['Launch App2'],
  186: ';:',
  187: '=+',
  188: ',<',
  189: '-_',
  190: '.>',
  191: '/?',
  192: '`~',
  219: '[{',
  220: '\\|',
  221: ']}',
  222: '\'"',
  223: ['Meta'],
  226: ['AltGr'],
  229: ['IME Process'],
  231: ['0x00'],
  246: ['Attention'],
  247: ['Crsel'],
  248: ['Exsel'],
  249: ['Erase EOF'],
  250: ['Play'],
  251: ['Zoom'],
  252: ['NoName'],
  254: ['Clear'],
};

var shiftNumpad = {
 33: 105,
 34: 99,
 35: 97,
 36: 103,
 37: 100,
 38: 104,
 39: 102,
 40: 98,
 45: 96,
}

function whatKey(evt){
  var key = keys[evt.keyCode];
  if (key) {
    if (evt.shiftKey) {
      return key[+evt.shiftKey] || key[0];
    } else {
      if (evt.keyLocation === 3) {
        var mapped = shiftNumpad[evt.keyCode];
        if (mapped) {
          return keys[mapped][1];
        }
      }
      return key[0];
    }
  } else if (evt.keyIdentifier) {
    return evt.keyIdentifier;
  } else {
    return String.fromCharCode(evt.keyCode);
  }
}

function Keyboard(view){
  var self = this;
  this.keys = {};
  this.view = view;
  this.ctrl = false;
  this.shift = false;
  this.alt = false;
  this.meta = false;

  view.addEventListener('keydown', function(e){
    self.update(e);
    this.lastKey = e.name = whatKey(e);
    self.emit('down', e);
  }, true);
  view.addEventListener('keyup', function(e){
    self.update(e);
    this.lastKey = e.name = whatKey(e);
    self.emit('up', e);
  }, true);
  view.addEventListener('keypress', function(e){
    self.update(e);
    this.lastKey = e.name = String.fromCharCode(e.keyCode);
    self.emit('press', e);
  }, true);
}

Keyboard.LOCATION = {
  STANDARD : 0,
  LEFT     : 1,
  RIGHT    : 2,
  NUMPAD   : 3,
  MOBILE   : 4,
  JOYSTICK : 5
};

Keyboard.prototype = {
  constructor: Keyboard,
  update: function update(evt){
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
        listener.call(self, evt);
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
window.keyboard = new Keyboard(window);
}();
