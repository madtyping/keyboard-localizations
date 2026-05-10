import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import test from 'node:test';

import {
  getKeyboardLocalizationById,
  keyboardLocalizations,
} from '../dist/index.es.js';

const requestedLayouts = [
  ['en-us-ansi-windows', 'windows', 'ansi'],
  ['en-us-ansi-mac', 'mac', 'ansi-mac'],
  ['en-us-iso-mac', 'mac', 'iso-mac'],
];

function getLayout(id) {
  const layout = getKeyboardLocalizationById(id);
  assert.ok(layout, `${id} should be registered`);
  return layout;
}

function charsFor(layout, code) {
  return layout.logical[code]?.chars.map(mapping => mapping.char) ?? [];
}

function modifiersFor(layout, code, char) {
  return layout.logical[code]?.chars.find(mapping => mapping.char === char)?.modifiers ?? [];
}

test('bundles the requested en-US physical layout variants', () => {
  for (const [id, os, physicalId] of requestedLayouts) {
    const layout = getLayout(id);

    assert.equal(layout.languageCode, 'en-us');
    assert.equal(layout.language, 'English (US)');
    assert.equal(layout.os, os);
    assert.equal(layout.physical.id, physicalId);
  }

  for (const [id] of requestedLayouts) {
    assert.ok(
      keyboardLocalizations.some(layout => layout.id === id),
      `${id} should be present in keyboardLocalizations`,
    );
  }
});

test('maps US ANSI Windows punctuation without ISO-only logical keys', () => {
  const layout = getLayout('en-us-ansi-windows');

  assert.deepEqual(charsFor(layout, 'Backquote'), ['`', '~']);
  assert.deepEqual(charsFor(layout, 'Backslash'), ['\\', '|']);
  assert.equal(layout.logical.IntlBackslash, undefined);
});

test('maps Mac ANSI Option-layer characters and dead keys', () => {
  const layout = getLayout('en-us-ansi-mac');

  assert.deepEqual(charsFor(layout, 'Backquote'), ['`', '~', '\u0300']);
  assert.deepEqual(modifiersFor(layout, 'Digit2', '€'), [['ShiftLeft', 'AltLeft'], ['ShiftLeft', 'AltRight']]);
  assert.deepEqual(modifiersFor(layout, 'KeyE', '\u0301'), [['AltLeft'], ['AltRight'], ['ShiftLeft', 'AltLeft'], ['ShiftLeft', 'AltRight']]);
  assert.equal(
    layout.logical.KeyE.chars.find(mapping => mapping.char === '\u0301')?.isDead,
    true,
  );
});

test('maps Mac ISO section key separately from the backquote key', () => {
  const layout = getLayout('en-us-iso-mac');

  assert.deepEqual(charsFor(layout, 'IntlBackslash'), ['§', '±']);
  assert.deepEqual(charsFor(layout, 'Backquote'), ['`', '~', '\u0300']);
  assert.deepEqual(charsFor(layout, 'Backslash'), ['\\', '|', '«', '»']);
});

test('keeps logical maps limited to keys present in the physical layout', () => {
  for (const [id] of requestedLayouts) {
    const layout = getLayout(id);
    const physicalCodes = new Set(layout.physical.definition.map(key => key.code));
    const strayCodes = Object.keys(layout.logical).filter(code => !physicalCodes.has(code));

    assert.deepEqual(strayCodes, [], `${id} should not contain logical mappings for absent physical keys`);
  }
});

test('keeps the US ISO Windows logical map in the shared logical module', () => {
  const source = readFileSync('src/localizations/en-us-iso-windows.ts', 'utf8');

  assert.match(source, /import \{enUSIsoWindowsLogicalLayout\} from '\.\/en-us-logical';/);
  assert.match(source, /logical: enUSIsoWindowsLogicalLayout/);
  assert.doesNotMatch(source, /"logical":\s*\{/);
});
