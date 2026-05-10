import {isoPhysicalLayout} from '../physicalLayouts';
import type {KeyboardLayout} from '../types';

import {enUSIsoWindowsLogicalLayout} from './en-us-logical';

export const enUSIsoWindows: KeyboardLayout = {
  label: 'English (US) - ISO (windows)',
  id: 'en-us-iso-windows',
  languageCode: 'en-us',
  language: 'English (US)',
  os: 'windows',
  logical: enUSIsoWindowsLogicalLayout,
  physical: isoPhysicalLayout,
};
