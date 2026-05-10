import type {CharacterMapping, KeyMapping, LogicalLayout} from '../types';

const shift = 'ShiftLeft';
const capsLock = 'CapsLock';
const optionLeft = 'AltLeft';
const optionRight = 'AltRight';

const optionModifiers = [[optionLeft], [optionRight]];
const shiftOptionModifiers = [
  [shift, optionLeft],
  [shift, optionRight],
];

function mapping(char: string, modifiers: string[][]): CharacterMapping {
  return {char, modifiers};
}

function deadKey(char: string, modifiers: string[][]): CharacterMapping {
  return {char, modifiers, isDead: true};
}

function key(...chars: CharacterMapping[]): KeyMapping {
  return {chars};
}

function printable(unmodified: string, shifted: string): KeyMapping {
  return key(
    mapping(unmodified, [[]]),
    mapping(shifted, [[shift]]),
  );
}

function letter(unmodified: string): KeyMapping {
  return key(
    mapping(unmodified, [[]]),
    mapping(unmodified.toUpperCase(), [[shift], [capsLock]]),
  );
}

function withCharacters(base: KeyMapping, ...extras: CharacterMapping[]): KeyMapping {
  return {
    chars: [...base.chars, ...extras],
  };
}

function withOption(base: KeyMapping, option: string, shiftOption: string): KeyMapping {
  return withCharacters(
    base,
    mapping(option, optionModifiers),
    mapping(shiftOption, shiftOptionModifiers),
  );
}

function withDeadOption(base: KeyMapping, accent: string): KeyMapping {
  return withCharacters(
    base,
    deadKey(accent, [...optionModifiers, ...shiftOptionModifiers]),
  );
}

const enUSCommonLogicalLayout: LogicalLayout = {
  Digit1: printable('1', '!'),
  Digit2: printable('2', '@'),
  Digit3: printable('3', '#'),
  Digit4: printable('4', '$'),
  Digit5: printable('5', '%'),
  Digit6: printable('6', '^'),
  Digit7: printable('7', '&'),
  Digit8: printable('8', '*'),
  Digit9: printable('9', '('),
  Digit0: printable('0', ')'),
  Minus: printable('-', '_'),
  Equal: printable('=', '+'),
  KeyQ: letter('q'),
  KeyW: letter('w'),
  KeyE: letter('e'),
  KeyR: letter('r'),
  KeyT: letter('t'),
  KeyY: letter('y'),
  KeyU: letter('u'),
  KeyI: letter('i'),
  KeyO: letter('o'),
  KeyP: letter('p'),
  BracketLeft: printable('[', '{'),
  BracketRight: printable(']', '}'),
  KeyA: letter('a'),
  KeyS: letter('s'),
  KeyD: letter('d'),
  KeyF: letter('f'),
  KeyG: letter('g'),
  KeyH: letter('h'),
  KeyJ: letter('j'),
  KeyK: letter('k'),
  KeyL: letter('l'),
  Semicolon: printable(';', ':'),
  Quote: printable('\'', '"'),
  KeyZ: letter('z'),
  KeyX: letter('x'),
  KeyC: letter('c'),
  KeyV: letter('v'),
  KeyB: letter('b'),
  KeyN: letter('n'),
  KeyM: letter('m'),
  Comma: printable(',', '<'),
  Period: printable('.', '>'),
  Slash: printable('/', '?'),
};

export const enUSAnsiWindowsLogicalLayout: LogicalLayout = {
  Backquote: printable('`', '~'),
  ...enUSCommonLogicalLayout,
  Backslash: printable('\\', '|'),
};

export const enUSIsoWindowsLogicalLayout: LogicalLayout = {
  ...enUSAnsiWindowsLogicalLayout,
  IntlBackslash: printable('\\', '|'),
};

export const enUSAnsiMacLogicalLayout: LogicalLayout = {
  ...enUSAnsiWindowsLogicalLayout,
  Backquote: withCharacters(
    enUSAnsiWindowsLogicalLayout.Backquote,
    deadKey('\u0300', optionModifiers),
  ),
  Digit1: withOption(enUSCommonLogicalLayout.Digit1, '¡', '⁄'),
  Digit2: withOption(enUSCommonLogicalLayout.Digit2, '™', '€'),
  Digit3: withOption(enUSCommonLogicalLayout.Digit3, '£', '‹'),
  Digit4: withOption(enUSCommonLogicalLayout.Digit4, '¢', '›'),
  Digit5: withOption(enUSCommonLogicalLayout.Digit5, '∞', 'ﬁ'),
  Digit6: withOption(enUSCommonLogicalLayout.Digit6, '§', 'ﬂ'),
  Digit7: withOption(enUSCommonLogicalLayout.Digit7, '¶', '‡'),
  Digit8: withOption(enUSCommonLogicalLayout.Digit8, '•', '°'),
  Digit9: withOption(enUSCommonLogicalLayout.Digit9, 'ª', '·'),
  Digit0: withOption(enUSCommonLogicalLayout.Digit0, 'º', '‚'),
  Minus: withOption(enUSCommonLogicalLayout.Minus, '–', '—'),
  Equal: withOption(enUSCommonLogicalLayout.Equal, '≠', '±'),
  KeyQ: withOption(enUSCommonLogicalLayout.KeyQ, 'œ', 'Œ'),
  KeyW: withOption(enUSCommonLogicalLayout.KeyW, '∑', '„'),
  KeyE: withDeadOption(enUSCommonLogicalLayout.KeyE, '\u0301'),
  KeyR: withOption(enUSCommonLogicalLayout.KeyR, '®', '‰'),
  KeyT: withOption(enUSCommonLogicalLayout.KeyT, '†', 'ˇ'),
  KeyY: withOption(enUSCommonLogicalLayout.KeyY, '¥', 'Á'),
  KeyU: withDeadOption(enUSCommonLogicalLayout.KeyU, '\u0308'),
  KeyI: withDeadOption(enUSCommonLogicalLayout.KeyI, '\u0302'),
  KeyO: withOption(enUSCommonLogicalLayout.KeyO, 'ø', 'Ø'),
  KeyP: withOption(enUSCommonLogicalLayout.KeyP, 'π', '∏'),
  BracketLeft: withOption(enUSCommonLogicalLayout.BracketLeft, '“', '”'),
  BracketRight: withOption(enUSCommonLogicalLayout.BracketRight, '‘', '’'),
  KeyA: withOption(enUSCommonLogicalLayout.KeyA, 'å', 'Å'),
  KeyS: withOption(enUSCommonLogicalLayout.KeyS, 'ß', 'Í'),
  KeyD: withOption(enUSCommonLogicalLayout.KeyD, '∂', 'Î'),
  KeyF: withOption(enUSCommonLogicalLayout.KeyF, 'ƒ', 'Ï'),
  KeyG: withOption(enUSCommonLogicalLayout.KeyG, '©', '˝'),
  KeyH: withOption(enUSCommonLogicalLayout.KeyH, '˙', 'Ó'),
  KeyJ: withOption(enUSCommonLogicalLayout.KeyJ, '∆', 'Ô'),
  KeyK: withOption(enUSCommonLogicalLayout.KeyK, '˚', ''),
  KeyL: withOption(enUSCommonLogicalLayout.KeyL, '¬', 'Ò'),
  Semicolon: withOption(enUSCommonLogicalLayout.Semicolon, '…', 'Ú'),
  Quote: withOption(enUSCommonLogicalLayout.Quote, 'æ', 'Æ'),
  Backslash: withOption(enUSAnsiWindowsLogicalLayout.Backslash, '«', '»'),
  KeyZ: withOption(enUSCommonLogicalLayout.KeyZ, 'Ω', '¸'),
  KeyX: withOption(enUSCommonLogicalLayout.KeyX, '≈', '˛'),
  KeyC: withOption(enUSCommonLogicalLayout.KeyC, 'ç', 'Ç'),
  KeyV: withOption(enUSCommonLogicalLayout.KeyV, '√', '◊'),
  KeyB: withOption(enUSCommonLogicalLayout.KeyB, '∫', 'ı'),
  KeyN: withDeadOption(enUSCommonLogicalLayout.KeyN, '\u0303'),
  KeyM: withOption(enUSCommonLogicalLayout.KeyM, 'µ', 'Â'),
  Comma: withOption(enUSCommonLogicalLayout.Comma, '≤', '¯'),
  Period: withOption(enUSCommonLogicalLayout.Period, '≥', '˘'),
  Slash: withOption(enUSCommonLogicalLayout.Slash, '÷', '¿'),
};

export const enUSIsoMacLogicalLayout: LogicalLayout = {
  ...enUSAnsiMacLogicalLayout,
  IntlBackslash: printable('§', '±'),
};
