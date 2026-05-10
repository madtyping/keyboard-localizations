import {isoMacPhysicalLayout} from '../physicalLayouts';
import type {KeyboardLayout} from '../types';

import {enUSIsoMacLogicalLayout} from './en-us-logical';

export const enUSIsoMac: KeyboardLayout = {
  label: 'English (US) - ISO (mac)',
  id: 'en-us-iso-mac',
  languageCode: 'en-us',
  language: 'English (US)',
  os: 'mac',
  logical: enUSIsoMacLogicalLayout,
  physical: isoMacPhysicalLayout,
};
