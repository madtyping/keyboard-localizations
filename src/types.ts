/**
 * Represents a character and all the ways it can be produced from a physical key
 */
export type CharacterMapping = {
  char: string;
  modifiers: string[][]; // Array of modifier combinations using actual KeyboardEvent.code values, e.g., [['ShiftLeft']]
  sequence?: string; // For dead key sequences, e.g., 'ctrl+alt+digit5→e' for ê
  isDead?: true; // Only present when true to reduce JSON size
};

/**
 * Represents all possible characters a single physical key can produce.
 * Each character appears only once but can have multiple ways to produce it.
 */
export type KeyMapping = {
  chars: CharacterMapping[];
};

export type OSType = 'mac' | 'windows' | 'linux';

/**
 * Represents a single key's physical properties for rendering.
 * Uses numeric factors that multiply with a base size for consistent scaling.
 */
export type KeyDefinition = {
  /** The unique, unchanging identifier for the key's physical location (from event.code). */
  code: string;
  /** The row number (0-indexed) where the key is located. */
  row: number;
  /** The visual label for special keys (e.g., 'Enter', 'Shift'). Overrides the logical mapping for display. */
  label?: string;
  /** Width multiplier for the base size (e.g., 1.5 for Tab, 2.5 for Space). Defaults to 1. */
  widthFactor?: number;
  /** Height multiplier for the base size (e.g., 1 for normal keys, 2.1 for tall Enter). Defaults to 1. */
  heightFactor?: number;
};

/**
 * A Physical Layout defines the complete grid of keys, their codes, and their positions.
 * This represents a standard like ANSI or ISO.
 */
export type PhysicalLayout = {
  label: string; // A descriptive name, e.g., 'ANSI', 'ISO'
  id: string; // A unique identifier for the physical layout
  definition: KeyDefinition[]
};

/**
 * A Logical Layout defines the character mapping for a scheme like QWERTY or QWERTZ.
 * It's a dictionary that maps a key `code` to its corresponding `KeyMapping`.
 */
export type LogicalLayout = Record<string, KeyMapping>;

/**
 * A complete, final Keyboard Layout definition that combines a physical grid
 * with a logical character map. This is what you'll use to render a keyboard.
 */
export type KeyboardLayout = {
  label: string; // A descriptive name, e.g., 'US-QWERTY-ANSI'
  id: string; // A unique identifier for the keyboard layout
  physical: PhysicalLayout;
  logical: LogicalLayout;
  os: OSType;
};