import type {PhysicalLayout} from '../types.js';

export const isoPhysicalLayout: PhysicalLayout = {
    label: 'ISO',
    id: 'iso',
    definition: [
      // Row 0: Number row
      {code: 'Backquote', row: 0},
      {code: 'Digit1', row: 0},
      {code: 'Digit2', row: 0},
      {code: 'Digit3', row: 0},
      {code: 'Digit4', row: 0},
      {code: 'Digit5', row: 0},
      {code: 'Digit6', row: 0},
      {code: 'Digit7', row: 0},
      {code: 'Digit8', row: 0},
      {code: 'Digit9', row: 0},
      {code: 'Digit0', row: 0},
      {code: 'Minus', row: 0},
      {code: 'Equal', row: 0},
      {code: 'Backspace', label: 'Backspace', row: 0, widthFactor: 2},

      // Row 1: QWERTY row
      {code: 'Tab', label: 'Tab', row: 1, widthFactor: 1.5},
      {code: 'KeyQ', row: 1},
      {code: 'KeyW', row: 1},
      {code: 'KeyE', row: 1},
      {code: 'KeyR', row: 1},
      {code: 'KeyT', row: 1},
      {code: 'KeyY', row: 1},
      {code: 'KeyU', row: 1},
      {code: 'KeyI', row: 1},
      {code: 'KeyO', row: 1},
      {code: 'KeyP', row: 1},
      {code: 'BracketLeft', row: 1},
      {code: 'BracketRight', row: 1},
      // ISO: L-shaped Enter key (tall, spans 2 rows)
      {code: 'Enter', label: 'Enter', row: 1, widthFactor: 1.5, heightFactor: 2.12},

      // Row 2: ASDF row
      {code: 'CapsLock', label: 'Caps Lock', row: 2, widthFactor: 1.75},
      {code: 'KeyA', row: 2},
      {code: 'KeyS', row: 2},
      {code: 'KeyD', row: 2},
      {code: 'KeyF', row: 2},
      {code: 'KeyG', row: 2},
      {code: 'KeyH', row: 2},
      {code: 'KeyJ', row: 2},
      {code: 'KeyK', row: 2},
      {code: 'KeyL', row: 2},
      {code: 'Semicolon', row: 2},
      {code: 'Quote', row: 2},
      // ISO: Hash/Backslash key next to Enter
      {code: 'Backslash', row: 2},

      // Row 3: ZXCV row
      {code: 'ShiftLeft', label: 'Shift', row: 3, widthFactor: 1.25},
      // ISO: Additional key next to left Shift
      {code: 'IntlBackslash', row: 3},
      {code: 'KeyZ', row: 3},
      {code: 'KeyX', row: 3},
      {code: 'KeyC', row: 3},
      {code: 'KeyV', row: 3},
      {code: 'KeyB', row: 3},
      {code: 'KeyN', row: 3},
      {code: 'KeyM', row: 3},
      {code: 'Comma', row: 3},
      {code: 'Period', row: 3},
      {code: 'Slash', row: 3},
      {code: 'ShiftRight', label: 'Shift', row: 3, widthFactor: 2.85},

      // Row 4: Bottom row
      {code: 'ControlLeft', label: 'Ctrl', row: 4, widthFactor: 1.4},
      {code: 'MetaLeft', label: 'Win', row: 4, widthFactor: 1.25},
      {code: 'AltLeft', label: 'Alt', row: 4, widthFactor: 1.4},
      {code: 'Space', label: 'Space', row: 4, widthFactor: 6.19},
      {code: 'AltRight', label: 'Alt', row: 4, widthFactor: 1.4},
      {code: 'MetaRight', label: 'Win', row: 4, widthFactor: 1.25},
      {code: 'ContextMenu', label: 'Menu', row: 4, widthFactor: 1.25},
      {code: 'ControlRight', label: 'Ctrl', row: 4, widthFactor: 1.4},
    ]
  }
;