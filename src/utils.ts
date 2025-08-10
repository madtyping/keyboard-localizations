import { KeyboardLayout, PhysicalLayout, LogicalLayout, KeyMapping, CharacterMapping } from './types';


export const modifierCodes = new Map<string, string>();
modifierCodes.set('ControlLeft', 'ControlLeft');
modifierCodes.set('ControlRight', 'ControlRight');
modifierCodes.set('ShiftLeft', 'ShiftLeft');
modifierCodes.set('ShiftRight', 'ShiftRight');
modifierCodes.set('AltLeft', 'AltLeft');
modifierCodes.set('AltRight', 'AltRight');
modifierCodes.set('MetaLeft', 'MetaLeft');
modifierCodes.set('MetaRight', 'MetaRight');
modifierCodes.set('AltGraph', 'AltGraph');

/**
 * Extends a keyboard layout with additional character mappings
 */
export function extendKeyboardLayout(
  baseLayout: KeyboardLayout,
  extensions: Partial<LogicalLayout>
): KeyboardLayout {
  const extendedLogical: LogicalLayout = { ...baseLayout.logical };
  
  for (const [keyCode, keyMapping] of Object.entries(extensions)) {
    if (!keyMapping) continue;
    
    if (extendedLogical[keyCode]) {
      // Merge character mappings, avoiding duplicates
      const existingChars = new Set(extendedLogical[keyCode].chars.map(c => c.char));
      const newChars = keyMapping.chars.filter(c => !existingChars.has(c.char));
      extendedLogical[keyCode] = {
        chars: [...extendedLogical[keyCode].chars, ...newChars]
      };
    } else {
      extendedLogical[keyCode] = keyMapping;
    }
  }

  return {
    ...baseLayout,
    logical: extendedLogical
  };
}

/**
 * Merges two logical layouts, with the second layout taking precedence for conflicts
 */
export function mergeLogicalLayouts(
  base: LogicalLayout,
  overlay: LogicalLayout
): LogicalLayout {
  const merged: LogicalLayout = { ...base };
  
  for (const [keyCode, keyMapping] of Object.entries(overlay)) {
    merged[keyCode] = keyMapping;
  }
  
  return merged;
}

/**
 * Creates a new keyboard layout by combining a physical layout with a logical layout
 */
export function createKeyboardLayout(
  id: string,
  label: string,
  physical: PhysicalLayout,
  logical: LogicalLayout,
  os: 'mac' | 'windows' | 'linux'
): KeyboardLayout {
  return {
    id,
    label,
    physical,
    logical,
    os
  };
}

/**
 * Filters a keyboard layout to only include keys that exist in the physical layout
 */
export function validateKeyboardLayout(layout: KeyboardLayout): KeyboardLayout {
  const validKeyCodes = new Set(layout.physical.definition.map(key => key.code));
  const validatedLogical: LogicalLayout = {};
  
  for (const [keyCode, keyMapping] of Object.entries(layout.logical)) {
    if (validKeyCodes.has(keyCode)) {
      validatedLogical[keyCode] = keyMapping;
    }
  }
  
  return {
    ...layout,
    logical: validatedLogical
  };
}

/**
 * Gets all dead keys from a keyboard layout
 */
export function getDeadKeys(layout: KeyboardLayout): Record<string, CharacterMapping[]> {
  const deadKeys: Record<string, CharacterMapping[]> = {};
  
  for (const [keyCode, keyMapping] of Object.entries(layout.logical)) {
    const deadChars = keyMapping.chars.filter(c => c.isDead);
    if (deadChars.length > 0) {
      deadKeys[keyCode] = deadChars;
    }
  }
  
  return deadKeys;
}

/**
 * Gets all characters that can be produced by a specific key code
 */
export function getCharactersForKey(layout: KeyboardLayout, keyCode: string): string[] {
  const keyMapping = layout.logical[keyCode];
  if (!keyMapping) return [];
  
  return keyMapping.chars.map(c => c.char);
}