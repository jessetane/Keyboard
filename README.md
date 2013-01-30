# Keyboard
An object that gives the keyboard a first class identity, normalizes keyboard events across browsers, and allows binding to multiple keys.

## Example Usage

```javascript
// create a new Keyboard object that is scoped to a specific DOM element or the window
var kb = new Keyboard(window);

// when both ctrl+a are pressed together
kb.on('ctrl+a', 'activate', function(e){ /***/ });

// when a, then be, then c are pressed in sequence and released
kb.on('a->b->c', 'release', function(e){ /***/ });

// when any key is first pressed (including modifiers such as shift/control/etc.)
kb.on('*', 'activate', function(e){ /***/ })

// when any key is activated, pressed, repeats, released
kb.on('*', function(e){
  console.log(e.action); // one of ['activate', 'repeat', 'release', 'press']
});
```

## API

* __new Keyboard(view)__  
    *view*: a Window, Document, or Element which will be listened to

* __keyboard.on(keyCombo, [filter], callback)__  
    *keyCombo*: a string that can be any key name or a combination of key names separated by '+' or '->'. The '+' combinator requires the keys be held together, '->' requires they be pressed in a specific sequence.  

    *filter*: optional and must be one
    *   *activate*: when a key is first depressed
    *   *repeat*: when a keydown due to the key being held down
    *   *release*: fires on keyup
    *   *press*: fires on keypress

    *callback*: called with the keyboardEvent object if the keyCombo was a single key, or an array of keyboardEvent objects if the keyCombo was a combinator.

* __keyboardEvent.action__  
    What type of action the event originated from. Same as the above filter types.
