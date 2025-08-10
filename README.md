# @madtyping/keyboard-localizations

A comprehensive library of keyboard localization layouts providing physical layouts (ANSI, ISO) and regional/language-specific character mappings with full TypeScript support.

## Installation

```bash
npm install @madtyping/keyboard-localizations
```

## Usage

### Importing Types

```typescript
import {
  KeyboardLayout,
  PhysicalLayout,
  LogicalLayout,
  KeyMapping,
  CharacterMapping,
  KeyDefinition,
  OSType
} from '@madtyping/keyboard-localizations';
```

### Working with Layouts

```typescript
import {
  getKeyboardLayout,
  getKeyboardLocalizationById,
  keyboardLocalizations,
  ansiPhysicalLayout,
  isoPhysicalLayout,
  ansiMacPhysicalLayout,
  isoMacPhysicalLayout,
  extendKeyboardLayout,
  mergeLogicalLayouts,
  createKeyboardLayout,
  validateKeyboardLayout,
  getDeadKeys,
  getCharactersForKey,
  modifierCodes
} from '@madtyping/keyboard-localizations';

// Get a specific layout by ID
const usLayout = getKeyboardLayout('en-us-iso-windows');

// Get all available layouts
const allLayouts = keyboardLocalizations;

// Work with physical layouts
const ansiLayout = ansiPhysicalLayout;
const isoLayout = isoPhysicalLayout;
```

## Layout Structure

### Physical Layouts
Define the physical arrangement of keys including:
- Key positions and dimensions
- Factor-based sizing for scalable rendering
- Support for different form factors (ANSI, ISO, etc.)

### Localization Layouts
Define regional/language-specific character mappings including:
- Base characters and shifted variants
- AltGr (Alt Graph) combinations
- Dead key sequences for accented characters
- OS-specific modifier combinations

### Complete Layouts
Combine physical and localization layouts for complete keyboard definitions ready for rendering or input processing.

## Contributing

We welcome contributions of new keyboard layouts! To contribute:

1. Fork the repository
2. Add your layout JSON files to the appropriate directories:
   - `src/physicalLayouts/` for physical layouts
   - `src/localizations/` for localization layouts  
3. Update the index files to import your layouts
4. Submit a pull request

### Layout Generation

## Available Layouts

### Physical Layouts
- `ansiPhysicalLayout` - Standard ANSI layout
- `isoPhysicalLayout` - Standard ISO layout  
- `ansiMacPhysicalLayout` - ANSI layout for Mac
- `isoMacPhysicalLayout` - ISO layout for Mac

### Keyboard Localizations
- `en-us-iso-windows` - English (US) with ISO physical layout for Windows
- `cs-cz-iso-windows` - Czech with ISO physical layout for Windows

## Utility Functions

- `extendKeyboardLayout()` - Extend a layout with additional character mappings
- `mergeLogicalLayouts()` - Merge two logical layouts
- `createKeyboardLayout()` - Create a new keyboard layout
- `validateKeyboardLayout()` - Validate layout against physical definition
- `getDeadKeys()` - Get all dead keys from a layout
- `getCharactersForKey()` - Get all characters for a specific key
- `modifierCodes` - Map of available modifier key codes

## Types Reference

### KeyMapping
Represents all possible characters a single physical key can produce:

```typescript
type KeyMapping = {
  chars: CharacterMapping[];
};
```

### CharacterMapping
Defines how a character is produced:

```typescript
type CharacterMapping = {
  char: string;
  modifiers: string[][]; // e.g., [['ShiftLeft']]
  sequence?: string; // For dead keys: 'ctrl+alt+digit5→e'
  isDead?: true;
};
```

### PhysicalLayout
Defines the physical arrangement of keys:

```typescript
type PhysicalLayout = {
  label: string; // e.g., 'ANSI'
  id: string;
  definition: KeyDefinition[];
};
```

### LogicalLayout
Maps key codes to localized character outputs:

```typescript
type LogicalLayout = Record<string, KeyMapping>;
```

### KeyboardLayout
Complete keyboard definition:

```typescript
type KeyboardLayout = {
  label: string; // e.g., 'English (US) - ISO (windows)'
  id: string; // e.g., 'en-us-iso-windows'
  physical: PhysicalLayout;
  logical: LogicalLayout;
  os: OSType;
};
```

## License

MIT License - See LICENSE file for details.

## Repository

https://github.com/madtyping/keyboard-localizations