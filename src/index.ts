// Export all types
export * from './types';

// Export layout data
export * from './physicalLayouts';
export * from './localizations';

// Export utility functions
export * from './utils';

// Main function to get keyboard layouts
import {getKeyboardLocalizationById} from './localizations';

export function getKeyboardLayout(id: string) {
  return getKeyboardLocalizationById(id);
}