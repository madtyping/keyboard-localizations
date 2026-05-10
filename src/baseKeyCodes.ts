/**
 * Curated list of base KeyboardEvent.code values available in the layout builder.
 * Excludes Media / Lock / Navigation / Function / Numpad / IME keys.
 * Mirrors MDN "Writing System Keys" + the handful of functional keys
 * a physical keyboard layout typically needs.
 */

export type BaseKeyGroup = 'letters' | 'digits' | 'punctuation' | 'modifiers' | 'whitespace' | 'editing' | 'intl';

export type BaseKeyCode = {
  code: string;
  defaultLabel?: string;
  group: BaseKeyGroup;
  defaultWidthFactor?: number;
};

const letters: BaseKeyCode[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(ch => ({
  code: `Key${ch}`,
  group: 'letters',
}));

const digits: BaseKeyCode[] = '0123456789'.split('').map(d => ({
  code: `Digit${d}`,
  group: 'digits',
}));

const punctuation: BaseKeyCode[] = [
  {code: 'Backquote', group: 'punctuation'},
  {code: 'Minus', group: 'punctuation'},
  {code: 'Equal', group: 'punctuation'},
  {code: 'BracketLeft', group: 'punctuation'},
  {code: 'BracketRight', group: 'punctuation'},
  {code: 'Backslash', group: 'punctuation'},
  {code: 'Semicolon', group: 'punctuation'},
  {code: 'Quote', group: 'punctuation'},
  {code: 'Comma', group: 'punctuation'},
  {code: 'Period', group: 'punctuation'},
  {code: 'Slash', group: 'punctuation'},
];

const modifiers: BaseKeyCode[] = [
  {code: 'ShiftLeft', defaultLabel: 'Shift', group: 'modifiers', defaultWidthFactor: 2.25},
  {code: 'ShiftRight', defaultLabel: 'Shift', group: 'modifiers', defaultWidthFactor: 2.75},
  {code: 'ControlLeft', defaultLabel: 'Ctrl', group: 'modifiers', defaultWidthFactor: 1.25},
  {code: 'ControlRight', defaultLabel: 'Ctrl', group: 'modifiers', defaultWidthFactor: 1.25},
  {code: 'AltLeft', defaultLabel: 'Alt', group: 'modifiers', defaultWidthFactor: 1.25},
  {code: 'AltRight', defaultLabel: 'Alt', group: 'modifiers', defaultWidthFactor: 1.25},
  {code: 'MetaLeft', defaultLabel: 'Meta', group: 'modifiers', defaultWidthFactor: 1.25},
  {code: 'MetaRight', defaultLabel: 'Meta', group: 'modifiers', defaultWidthFactor: 1.25},
  {code: 'CapsLock', defaultLabel: 'Caps Lock', group: 'modifiers', defaultWidthFactor: 1.75},
  {code: 'ContextMenu', defaultLabel: 'Menu', group: 'modifiers', defaultWidthFactor: 1.25},
];

const whitespace: BaseKeyCode[] = [
  {code: 'Space', defaultLabel: 'Space', group: 'whitespace', defaultWidthFactor: 6.25},
  {code: 'Tab', defaultLabel: 'Tab', group: 'whitespace', defaultWidthFactor: 1.5},
  {code: 'Enter', defaultLabel: 'Enter', group: 'whitespace', defaultWidthFactor: 2.25},
];

const editing: BaseKeyCode[] = [
  {code: 'Backspace', defaultLabel: 'Backspace', group: 'editing', defaultWidthFactor: 2},
];

const intl: BaseKeyCode[] = [
  {code: 'IntlBackslash', defaultLabel: 'Intl \\', group: 'intl'},
  {code: 'IntlYen', defaultLabel: '¥', group: 'intl'},
  {code: 'IntlRo', defaultLabel: 'Intl ろ', group: 'intl'},
  {code: 'Convert', defaultLabel: '変換', group: 'intl', defaultWidthFactor: 1.25},
  {code: 'NonConvert', defaultLabel: '無変換', group: 'intl', defaultWidthFactor: 1.25},
  {code: 'Lang1', defaultLabel: 'カナ', group: 'intl', defaultWidthFactor: 1.25},
  {code: 'Lang2', defaultLabel: '한', group: 'intl', defaultWidthFactor: 1.25},
];

export const baseKeyCodes: BaseKeyCode[] = [
  ...letters,
  ...digits,
  ...punctuation,
  ...modifiers,
  ...whitespace,
  ...editing,
  ...intl,
];

export const baseKeyGroups: {id: BaseKeyGroup; label: string}[] = [
  {id: 'letters', label: 'Letters'},
  {id: 'digits', label: 'Digits'},
  {id: 'punctuation', label: 'Punctuation'},
  {id: 'modifiers', label: 'Modifiers'},
  {id: 'whitespace', label: 'Whitespace'},
  {id: 'editing', label: 'Editing'},
  {id: 'intl', label: 'International / IME'},
];

export const baseKeyByCode = new Map(baseKeyCodes.map(k => [k.code, k]));
