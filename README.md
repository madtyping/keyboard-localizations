# @madtyping/keyboard-localizations

Keyboard physical layouts and localization definitions for Mad Typing tools, with full TypeScript support. The package includes reusable physical layouts, regional keyboard localizations, base key metadata for custom layout builders, and helpers for validating and composing layouts.

## Installation

```bash
npm install @madtyping/keyboard-localizations
```

## Usage

### Importing Types

```typescript
import type {
  KeyboardLayout,
  KeyboardLocalization,
  PhysicalLayout,
  LogicalLayout,
  KeyDefinition,
  KeyMapping,
  CharacterMapping,
  EnterShapeId,
  OSType
} from '@madtyping/keyboard-localizations';
```

### Working With Layouts

```typescript
import {
  getKeyboardLayout,
  getKeyboardLocalizationById,
  keyboardLocalizations,
  physicalLayouts,
  ansiPhysicalLayout,
  isoPhysicalLayout,
  ansiMacPhysicalLayout,
  isoMacPhysicalLayout,
  jisPhysicalLayout,
  baseKeyCodes,
  baseKeyGroups,
  baseKeyByCode,
  enterShapeSpecs,
  computeEnterGeometry,
  renderEnterShape,
  extendKeyboardLayout,
  mergeLogicalLayouts,
  createKeyboardLayout,
  validateKeyboardLayout,
  getDeadKeys,
  getCharactersForKey,
  modifierCodes
} from '@madtyping/keyboard-localizations';

const usLayout = getKeyboardLayout('en-us-iso-windows');
const allLocalizations = keyboardLocalizations;
const allPhysicalLayouts = physicalLayouts;

const enterGeometry = computeEnterGeometry('iso-l');
const spaceDefaults = baseKeyByCode.get('Space');
```

## Layout Model

### Physical Layouts

Physical layouts define the physical grid of keys: `KeyboardEvent.code`, row placement, optional label overrides, optional size factors, optional absolute positions, and optional Enter key shape presets.

Included layouts:

- `ansiPhysicalLayout` - Standard ANSI layout
- `isoPhysicalLayout` - Standard ISO layout with shaped ISO Enter
- `ansiMacPhysicalLayout` - ANSI layout for Mac
- `isoMacPhysicalLayout` - ISO layout for Mac with shaped ISO Enter
- `jisPhysicalLayout` - JIS layout with Japanese IME keys
- `physicalLayouts` - Array containing all included physical layouts

### Custom Physical Layouts

Custom layouts use the same `PhysicalLayout` and `KeyDefinition` types as the bundled layouts. `row` is required. Size and position fields are optional:

- `widthFactor` - horizontal slot span; defaults to `1`
- `heightFactor` - vertical slot span; defaults to `1`, ignored when `enterShape` is set
- `xOffset` - explicit horizontal position in slot units from the row start
- `yOffset` - explicit vertical position in slot units from the layout top
- `enterShape` - preset shaped Enter geometry: `'ansi-bar' | 'iso-l' | 'iso-l-stepped' | 'bae'`

Slot units are renderer-neutral: one slot corresponds to `baseSize + gap` in the consuming app. A width of `1.5` means `1.5 * baseSize + 0.5 * gap`.

```typescript
import type {PhysicalLayout} from '@madtyping/keyboard-localizations';

export const customPhysicalLayout: PhysicalLayout = {
  label: 'Custom Split ISO',
  id: 'custom-split-iso',
  definition: [
    {code: 'KeyQ', row: 1, xOffset: 0},
    {code: 'KeyW', row: 1},
    {code: 'Enter', label: 'Enter', row: 1, enterShape: 'iso-l'},
    {code: 'Space', label: 'Space', row: 4, widthFactor: 3, xOffset: 4.5},
    {code: 'AltRight', label: 'AltGr', row: 4, widthFactor: 1.25}
  ]
};
```

### General Definitions

The package exports general key and Enter shape metadata used by custom layout builders:

- `baseKeyCodes` - curated base `KeyboardEvent.code` list for letters, digits, punctuation, modifiers, whitespace, editing, and international/IME keys
- `baseKeyGroups` - display groups for the base key list
- `baseKeyByCode` - lookup map for base key metadata
- `enterShapeSpecs` / `enterShapeIds` - available Enter key shape presets
- `computeEnterGeometry()` - returns shape bounds and rect offsets in base units
- `renderEnterShape()` - returns renderer-friendly dimensions and clip path data

### Localization Layouts

Localization layouts define regional/language-specific character mappings:

- Base characters and shifted variants
- AltGr combinations
- Dead key sequences for accented characters
- OS-specific modifier combinations

Each `CharacterMapping` is character-first: one entry per produced character, with `modifiers` listing every modifier path that can produce it.

### Complete Layouts

A `KeyboardLayout` combines localization metadata, one physical layout, one logical character map, and an OS type:

```typescript
type KeyboardLayout = {
  label: string;
  id: string;
  languageCode: string;
  language: string;
  physical: PhysicalLayout;
  logical: LogicalLayout;
  os: OSType;
};
```

## Available Keyboard Localizations

- `azerty-fr-iso-windows` - AZERTY (French) with ISO physical layout for Windows
- `cs-cz-iso-windows` - Czech (Czech Republic) with ISO physical layout for Windows
- `de-de-iso-windows` - German (Germany) with ISO physical layout for Windows
- `en-us-ansi-mac` - English (US) with ANSI physical layout for macOS
- `en-us-ansi-windows` - English (US) with ANSI physical layout for Windows
- `en-us-iso-mac` - English (US) with ISO physical layout for macOS
- `en-uk-iso-windows` - English (UK) with ISO physical layout for Windows
- `en-us-iso-windows` - English (US) with ISO physical layout for Windows
- `es-es-iso-windows` - Spanish (Spain) with ISO physical layout for Windows

## Utility Functions

- `extendKeyboardLayout()` - Extend a layout with additional character mappings
- `mergeLogicalLayouts()` - Merge two logical layouts
- `createKeyboardLayout()` - Create a complete keyboard layout with language metadata
- `validateKeyboardLayout()` - Remove logical mappings for keys not present in the physical definition
- `getDeadKeys()` - Get all dead keys from a layout
- `getCharactersForKey()` - Get all characters for a specific key
- `modifierCodes` - Map of available modifier key codes

`createKeyboardLayout()` signature:

```typescript
createKeyboardLayout(
  id,
  label,
  languageCode,
  language,
  physical,
  logical,
  os
);
```

## Types Reference

### KeyDefinition

```typescript
type KeyDefinition = {
  code: string;
  row: number;
  label?: string;
  widthFactor?: number;
  heightFactor?: number;
  xOffset?: number;
  yOffset?: number;
  enterShape?: EnterShapeId;
};
```

### CharacterMapping

```typescript
type CharacterMapping = {
  char: string;
  modifiers: string[][];
  sequence?: string;
  isDead?: true;
};
```

### KeyMapping

```typescript
type KeyMapping = {
  chars: CharacterMapping[];
};
```

### PhysicalLayout

```typescript
type PhysicalLayout = {
  label: string;
  id: string;
  definition: KeyDefinition[];
};
```

### LogicalLayout

```typescript
type LogicalLayout = Record<string, KeyMapping>;
```

## Contributing

We welcome contributions of new keyboard layouts.

1. Fork the repository.
2. Generate layout JSON using the [Keyboard Layout Builder](https://keyboard.madtyping.com/) by typing on your physical keyboard.
3. Convert the JSON to TypeScript and add it to the appropriate directory:
   - `src/physicalLayouts/` for reusable physical layouts
   - `src/localizations/` for complete keyboard localizations
4. Register new physical layouts in `src/physicalLayouts/index.ts`.
5. Register new localizations in `src/localizations/index.ts`.
6. Run `npm run build`.
7. Submit a pull request.

## License

MIT License - see `LICENSE` for details.

## Repository

https://github.com/madtyping/keyboard-localizations
