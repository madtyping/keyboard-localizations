import {KeyboardLayout} from '../types';

import {enUSIsoWindows} from './en-us-iso-windows';
import {csCzIsoWindows} from './cs-cz-iso-windows';

export const keyboardLocalizations: KeyboardLayout[] = [
  enUSIsoWindows,
  csCzIsoWindows,
];

export function getKeyboardLocalizationById(id: string): KeyboardLayout | undefined {
  return keyboardLocalizations.find(layout => layout.id === id);
}