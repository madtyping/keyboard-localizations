import type {PhysicalLayout} from '../types.js';

import {ansiPhysicalLayout} from './ansi.js';
import {ansiMacPhysicalLayout} from './ansiMac.js';
import {isoPhysicalLayout} from './iso.js';
import {isoMacPhysicalLayout} from './isoMac.js';
import {jisPhysicalLayout} from './jis.js';

export {
  ansiPhysicalLayout,
  ansiMacPhysicalLayout,
  isoPhysicalLayout,
  isoMacPhysicalLayout,
  jisPhysicalLayout,
};

export const physicalLayouts: PhysicalLayout[] = [
  ansiPhysicalLayout,
  isoPhysicalLayout,
  ansiMacPhysicalLayout,
  isoMacPhysicalLayout,
  jisPhysicalLayout,
];
