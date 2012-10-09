'Keyboard' in window || (Keyboard = function(){
  var keyNames = {
   Unknown           :   0,
   Mouse1            :   1,
   Mouse2            :   2,
   Break             :   3,
   Mouse3            :   4,
   Mouse4            :   5,
   Mouse5            :   6,
   ''                :   7,
   Backspace         :   8,
   Tab               :   9,
   ''                :  10,
   ''                :  11,
   Clear             :  12,
   Enter             :  13,
   ''                :  14,
   ''                :  15,
   Shift             :  16,
   Control           :  17,
   Alt               :  18,
   Pause             :  19,
   CapsLock          :  20,
   IMEHangul         :  21,
   ''                :  22,
   IMEJunja          :  23,
   IMEFinal          :  24,
   IMEKanji          :  25,
   Escape            :  27,
   IMEConvert        :  28,
   IMENonconvert     :  29,
   IMEAccept         :  30,
   IMEModechange     :  31,
   Space             :  32,
   PageUp            :  33,
   PageDown          :  34,
   End               :  35,
   Home              :  36,
   Left              :  37,
   Up                :  38,
   Right             :  39,
   Down              :  40,
   Select            :  41,
   Print             :  42,
   Execute           :  43,
   Snapshot          :  44,
   Insert            :  45,
   Delete            :  46,
   Help              :  47,
   0                 :  48,
   1                 :  49,
   2                 :  50,
   3                 :  51,
   4                 :  52,
   5                 :  53,
   6                 :  54,
   7                 :  55,
   8                 :  56,
   9                 :  57,
   ''                :  58,
   ''                :  59,
   ''                :  60,
   ''                :  61,
   ''                :  62,
   ''                :  63,
   ''                :  64,
   A                 :  65,
   B                 :  66,
   C                 :  67,
   D                 :  68,
   E                 :  69,
   F                 :  70,
   G                 :  71,
   H                 :  72,
   I                 :  73,
   J                 :  74,
   K                 :  75,
   L                 :  76,
   M                 :  77,
   N                 :  78,
   O                 :  79,
   P                 :  80,
   Q                 :  81,
   R                 :  82,
   S                 :  83,
   T                 :  84,
   U                 :  85,
   V                 :  86,
   W                 :  87,
   X                 :  88,
   Y                 :  89,
   Z                 :  90,
   OSLeft            :  91,
   OSRight           :  92,
   MetaExtra         :  93,
   ''                :  94,
   Sleep             :  95,
   Numpad0           :  96,
   Numpad1           :  97,
   Numpad2           :  98,
   Numpad3           :  99,
   Numpad4           : 100,
   Numpad5           : 101,
   Numpad6           : 102,
   Numpad7           : 103,
   Numpad8           : 104,
   Numpad9           : 105,
   NumpadMultiply    : 106,
   NumpadAdd         : 107,
   NumpadEnter       : 108,
   NumpadSubtract    : 109,
   NumpadDecimal     : 110,
   NumpadDivide      : 111,
   F1                : 112,
   F2                : 113,
   F3                : 114,
   F4                : 115,
   F5                : 116,
   F6                : 117,
   F7                : 118,
   F8                : 119,
   F9                : 120,
   F10               : 121,
   F11               : 122,
   F12               : 123,
   F13               : 124,
   F14               : 125,
   F15               : 126,
   F16               : 127,
   F17               : 128,
   F18               : 129,
   F19               : 130,
   F20               : 131,
   F21               : 132,
   F22               : 133,
   F23               : 134,
   F24               : 135,
   ''                : 136,
   ''                : 137,
   ''                : 138,
   ''                : 139,
   ''                : 140,
   ''                : 141,
   ''                : 142,
   ''                : 143,
   NumLock           : 144,
   ScrollLock        : 145,
   ''                : 146,
   ''                : 147,
   ''                : 148,
   ''                : 149,
   ''                : 150,
   ''                : 151,
   ''                : 152,
   ''                : 153,
   ''                : 154,
   ''                : 155,
   ''                : 156,
   ''                : 157,
   ''                : 158,
   ''                : 159,
   ShiftLeft         : 160,
   ShiftRight        : 161,
   ControlLeft       : 162,
   ControlRight      : 163,
   AltLeft           : 164,
   AltRight          : 165,
   BrowserBack       : 166,
   BrowserForward    : 167,
   BrowserRefresh    : 168,
   BrowserStop       : 169,
   BrowserSearch     : 170,
   BrowserFavorites  : 171,
   BrowserHome       : 172,
   VolumeMute        : 173,
   VolumeDown        : 174,
   VolumeUp          : 175,
   MediaNextTrack    : 176,
   MediaPrevTrack    : 177,
   MediaStop         : 178,
   MediaPlayPause    : 179,
   LaunchMail        : 180,
   SelectMedia       : 181,
   LaunchApplication1: 182,
   LaunchApplication2: 183,
   ''                : 184,
   ''                : 185,
   ';'               : 186,
   '='               : 187,
   ','               : 188,
   '-'               : 189,
   '.'               : 190,
   '/'               : 191,
   DeadGrave         : 192,
   DeadAcute         : 193,
   DeadCircumflex    : 194,
   DeadTilde         : 195,
   DeadMacron        : 196,
   DeadBreve         : 197,
   DeadAboveDot      : 198,
   DeadUmlaut        : 199,
   DeadAboveRing     : 200,
   DeadDoubleAcute   : 201,
   DeadCaron         : 202,
   ''                : 203,
   ''                : 204,
   ''                : 205,
   ''                : 206,
   ''                : 207,
   ''                : 208,
   ''                : 209,
   ''                : 210,
   ''                : 211,
   ''                : 212,
   ''                : 213,
   ''                : 214,
   DeadCedilla       : 215,
   DeadOgonek        : 216,
   ''                : 217,
   ''                : 218,
   '['               : 219,
   '\\'              : 220,
   ']'               : 221,
   '\\'              : 222,
   Meta              : 223,
   Meta              : 224,
   ''                : 225,
   AltGr             : 226,
   ''                : 227,
   ''                : 228,
   IMEProcess        : 229,
   ''                : 230,
   '0x00'            : 231,
   ''                : 232,
   ''                : 233,
   ''                : 234,
   ''                : 235,
   ''                : 236,
   ''                : 237,
   ''                : 238,
   ''                : 239,
   ''                : 240,
   ''                : 241,
   ''                : 242,
   ''                : 243,
   ''                : 244,
   ''                : 245,
   Attention         : 246,
   Crsel             : 247,
   Exsel             : 248,
   EraseEOF          : 249,
   Play              : 250,
   Zoom              : 251,
   NoName            : 252,
   ''                : 253,
   Clear             : 254,
   ''                : 255,
  };

  var keyCodes = {};
  for (var k in keyNames)
    keyCodes[keyNames[k]] = k;


  var shiftNumpad = {
    12: 101,
    13: 108,
    33: 105,
    34: 99,
    35: 97,
    36: 103,
    37: 100,
    38: 104,
    39: 102,
    40: 98,
    45: 96,
  };


  function whatKey(evt){
    var key = keyCodes[evt.keyCode];
    evt.shift = evt.shiftKey;
    if (key) {
      if (evt.keyLocation === 3) {
        var mapped = shiftNumpad[evt.keyCode];
        if (mapped) {
          evt.shift = evt.shiftKey && evt.keyCode !== 13;
          return keyCodes[mapped];
        }
      }
      return key;
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

    var down = Object.create(null);

    view.addEventListener('keydown', function(e){
      self.update(e);
      e.name = whatKey(e);
      if (down[e.name]) {
        e.action = 'repeat';
        self.emit(e);
      } else {
        e.action = 'activate';
        down[e.name] = true;
        self.lastKey = e.name;
        self.emit(e);
      }
    }, true);
    view.addEventListener('keyup', function(e){
      self.update(e);
      e.action = 'release';
      self.lastKey = e.name = whatKey(e);
      self.emit(e);
      down[e.name] = null;
    }, true);
    view.addEventListener('keypress', function(e){
      self.update(e);
      e.action = 'press';
      self.lastKey = e.name = String.fromCharCode(e.keyCode);
      self.emit(e);
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

  Keyboard.keyCodes = keyCodes;
  Keyboard.keyNames = keyNames;

  Keyboard.prototype = {
    constructor: Keyboard,
    update: function update(evt){
      this.lastEvent = evt;
      this.ctrl = evt.ctrlKey;
      this.shift = evt.shift;
      this.alt = evt.altKey;
      this.meta = evt.metaKey;
      this.altgr = evt.altGraphKey;
    },
    emit: function emit(evt){
      var listeners = this.keys['*'];
      if (listeners) {
        for (var i=0; i < listeners.length; i++) {
          listeners[i](evt);
        }
      }

      listeners = this.keys[this.lastKey];
      if (listeners) {
        for (var i=0; i < listeners.length; i++) {
          listeners[i](evt);
        }
      }
    },
    on: function on(bind, filter, listener){
      var self = this,
          current = 0,
          events = [],
          keys = bind.split('->');

      if (!filter) {
        listener = filter;
        filter = '';
      }

      if (bind === '*') {

        var listeners = this.keys['*'] || (this.keys['*'] = []);
        listeners.push(function(evt){
          listener.call(self, evt);
        });

      } else if (keys.length > 1) {

        keys.forEach(function(key, index){
          var listeners = self.keys[key] || (self.keys[key] = []);
          listeners.push(function(evt){
            if (evt.action === 'activate' && events.length === index) {
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
          listeners.push(function(evt){
            if (evt.action === 'activate') {
              current++;
              events[index] = evt;
              if (events.length === keys.length) {
                listener.apply(self, events);
                events.length = 0;
              }
            } else if (evt.action === 'release') {
              current--;
              events[index] = null;
            }
          });
        });

      } else {
        var listeners = self.keys[bind] || (self.keys[bind] = []);
        listeners.push(function(evt){
          if (!filter || evt.action === filter)
            listener.call(self, evt);
        });
      }
    }
  };


  function KeyboardEventInit(init){
    init = Object(init);
    for (var k in KeyboardEventInit.prototype)
      if (k in init)
        this[k] = init[k];
  }

  KeyboardEventInit.prototype = {
    bubbles   : false,
    cancelable: false,
    view      : null,
    detail    : 0,
    char      : "",
    key       : "",
    location  : 0,
    modifiers : "",
    repeat    : false,
    locale    : "",
    charCode  : 0,
    keyCode   : 0,
    which     : 0
  }

  var KBE = window.KeyboardEvent;

  var modMap = {
    Alt: 'altKey',
    AltGraph: 'altGraphKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey'
  };

  var modState = {
    Alt: function(e){ return !!e.altKey },
    AltGraph: function(e){ return !!(e.altGraphKey || e.ctrlKey && e.altKey) },
    Control: function(e){ return !!(e.ctrlKey || e.altGraphKey) },
    Meta: function(e){ return !!e.metaKey },
    Shift: function(e){ return !!e.shiftKey },
    OS: function(e){ return !!e.metaKey }
  };

  'getModifierState' in KBE.prototype || (KBE.prototype.getModifierState = function getModifierState(key){
    return modState[key](this);
  });

  function normalizeModifiers(init){
    if (init.modifiers) {
      init.modifiers.split(' ').forEach(function(s){
        init[modMap[s]] = true;
      });
    } else {
      var mods = [];
      for (var k in modMap) {
        if (init[modMap[k]])
          mods.push(k);
      }
      init.modifiers = mods.join(' ');
    }
  }

  if ('initKeyEvent' in KBE.prototype) {
    var KeyboardEvent = function KeyboardEvent(type, init){
      var evt = document.createEvent('KeyboardEvent');
      init = new KeyboardEventInit(init);
      init.charCode = init.char.charCodeAt(0);
      normalizeModifiers(init);
      evt.initKeyEvent(type, init.bubbles, init.cancelable, init.view, init.ctrlKey, init.altKey,
                             init.shiftKey, init.metaKey, init.keyCode, init.charCode);
      return evt;
    };
  } else {
    var KeyboardEvent = function KeyboardEvent(type, init){
      var evt = document.createEvent('KeyboardEvent');
      init = new KeyboardEventInit(init);
      normalizeModifiers(init);
      evt.initKeyboardEvent(type, init.bubbles, init.cancelable, init.view, init.char,
                                  init.location, init.modifiers, init.repeat, init.locale);
      return evt;
    };
  }

  Object.defineProperties(KeyboardEvent, {
    DOM_KEY_LOCATION_STANDARD: { value: 0, enumerable: true },
    DOM_KEY_LOCATION_LEFT    : { value: 1, enumerable: true },
    DOM_KEY_LOCATION_RIGHT   : { value: 2, enumerable: true },
    DOM_KEY_LOCATION_NUMPAD  : { value: 3, enumerable: true },
    DOM_KEY_LOCATION_MOBILE  : { value: 4, enumerable: true },
    DOM_KEY_LOCATION_JOYSTICK: { value: 5, enumerable: true },
  });

  KeyboardEvent.prototype = KBE.prototype;

  Object.defineProperty(KeyboardEvent.prototype, 'constructor', {
    configurable: true,
    enumerable: false,
    writable: true,
    value: KeyboardEvent
  });

  window.KeyboardEvent = KeyboardEvent;

  return Keyboard;
}());
