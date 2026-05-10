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
 * Helper type to identify if a key mapping contains dead keys
 */
export type DeadKeyInfo = {
  isDead: boolean;
  deadChar?: string;  // The actual dead character (´, ^, ¨, ˇ, etc.)
  combinations?: Record<string, string>; // Optional: common combinations like {a: "á", e: "é"}
};

import type {EnterShapeId} from './enterShapes.js';

/**
 * Represents a single key's physical properties for rendering.
 * Positions and spans are in **slot units** where 1 slot = baseSize + gap (px).
 */
export type KeyDefinition = {
  /** The unique, unchanging identifier for the key's physical location (from event.code). */
  code: string;
  /** The row number (0-indexed) where the key is located. */
  row: number;
  /** The visual label for special keys (e.g., 'Enter', 'Shift'). Overrides the logical mapping for display. */
  label?: string;
  /** Slot span on x (e.g., 1.5 for Tab, 6.25 for Space). Defaults to 1. A span of n renders `n*base + (n-1)*gap` px wide. */
  widthFactor?: number;
  /** Slot span on y. Defaults to 1. Ignored when enterShape is set. */
  heightFactor?: number;
  /** Explicit x position (in slot units) from the row start. If omitted, the key packs sequentially after the previous key in the row. */
  xOffset?: number;
  /** Explicit y position (in slot units) from the canvas top. When set, overrides the row-based y placement, enabling free vertical positioning. When omitted, the key renders at the position dictated by its `row` (row-based fallback). */
  yOffset?: number;
  /** Preset shape for the Enter key. Drives geometry (width/height/tail) and renders via SVG clip-path. */
  enterShape?: EnterShapeId;
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
  languageCode: string; // KeyboardLocalization.id, e.g. 'en-us'
  language: string; // KeyboardLocalization.label, e.g. 'English (US)'
  physical: PhysicalLayout;
  logical: LogicalLayout;
  os: OSType;
};

/**
 * Represents a keyboard language localization
 */
export type KeyboardLocalization = {
  /** Unique identifier for the localization (e.g., 'en-us', 'de-de') */
  id: string;
  /** Human-readable label for the localization (e.g., 'English (US)', 'German (Germany)') */
  label: string;
};
