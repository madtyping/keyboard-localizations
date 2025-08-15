import {KeyboardLayout} from '../types';

import {enUSIsoWindows} from './en-us-iso-windows';
import {csCzIsoWindows} from './cs-cz-iso-windows';
import {deDeIsoWindows} from './de-de-iso-windows';
import {azertyFrIsoWindows} from './azerty-fr-iso-windows';
import {enUkIsoWindows} from './en-uk-iso-windows';
import {esEsIsoWindows} from './es-es-iso-windows';

export const keyboardLocalizations: KeyboardLayout[] = [
  enUSIsoWindows,
  enUkIsoWindows,
  deDeIsoWindows,
  azertyFrIsoWindows,
  esEsIsoWindows,
  csCzIsoWindows,
];

export function getKeyboardLocalizationById(id: string): KeyboardLayout | undefined {
  return keyboardLocalizations.find(layout => layout.id === id);
}