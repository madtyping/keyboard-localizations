import {ansiPhysicalLayout} from '../physicalLayouts';
import type {KeyboardLayout} from '../types';

import {enUSAnsiWindowsLogicalLayout} from './en-us-logical';

export const enUSAnsiWindows: KeyboardLayout = {
  label: 'English (US) - ANSI (windows)',
  id: 'en-us-ansi-windows',
  languageCode: 'en-us',
  language: 'English (US)',
  os: 'windows',
  logical: enUSAnsiWindowsLogicalLayout,
  physical: ansiPhysicalLayout,
};
