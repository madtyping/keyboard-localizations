import {ansiMacPhysicalLayout} from '../physicalLayouts';
import type {KeyboardLayout} from '../types';

import {enUSAnsiMacLogicalLayout} from './en-us-logical';

export const enUSAnsiMac: KeyboardLayout = {
  label: 'English (US) - ANSI (mac)',
  id: 'en-us-ansi-mac',
  languageCode: 'en-us',
  language: 'English (US)',
  os: 'mac',
  logical: enUSAnsiMacLogicalLayout,
  physical: ansiMacPhysicalLayout,
};
