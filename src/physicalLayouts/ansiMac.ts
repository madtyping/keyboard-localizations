import type {PhysicalLayout} from '../types.js';

export const ansiMacPhysicalLayout: PhysicalLayout = {
  label: 'ANSI (Mac)',
  id: 'ansi-mac',
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
    {code: 'Backspace', label: 'Delete', row: 0, widthFactor: 2},

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
    {code: 'Backslash', row: 1, widthFactor: 1.5},

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
    {code: 'Enter', label: 'Return', row: 2, widthFactor: 2.35},

    // Row 3: ZXCV row
    {code: 'ShiftLeft', label: 'Shift', row: 3, widthFactor: 2.25},
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
    {code: 'ShiftRight', label: 'Shift', row: 3, widthFactor: 2.95},

    // Row 4: Bottom row (Mac arrangement: Control -> Option -> Command -> Space -> Command -> Option -> Control)
    {code: 'ControlLeft', label: 'Control', row: 4, widthFactor: 1.4},
    {code: 'AltLeft', label: 'Option', row: 4, widthFactor: 1.4},
    {code: 'MetaLeft', label: '⌘', row: 4, widthFactor: 1.4},
    {code: 'Space', label: 'Space', row: 4, widthFactor: 7.22},
    {code: 'MetaRight', label: '⌘', row: 4, widthFactor: 1.4},
    {code: 'AltRight', label: 'Option', row: 4, widthFactor: 1.4},
    {code: 'ControlRight', label: 'Control', row: 4, widthFactor: 1.4},
  ]
};