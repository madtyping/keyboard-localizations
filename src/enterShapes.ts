/**
 * Preset shapes for the Enter key. Each shape describes the key geometry as the
 * union of up to two rectangles (a main rect + optional tail). The renderer turns
 * the spec into an SVG clip-path so a single <kbd> element can appear as an L.
 *
 * All measurements are in base units (same scale as widthFactor).
 */

export type EnterShapeId = 'ansi-bar' | 'iso-l' | 'iso-l-stepped' | 'bae';

export type EnterShapeSpec = {
  id: EnterShapeId;
  label: string;
  /** Width of the main rectangle (base units). */
  mainWidth: number;
  /** Height of the main rectangle (base units). */
  mainHeight: number;
  /** Width of the tail rectangle. 0 = no tail (flat bar). */
  tailWidth: number;
  /** Height of the tail rectangle. 0 = no tail. */
  tailHeight: number;
  /** Horizontal offset of the tail from the main's left edge (base units). Negative = tail extends left past main. */
  tailInsetX: number;
};

export const enterShapeSpecs: Record<EnterShapeId, EnterShapeSpec> = {
  'ansi-bar': {
    id: 'ansi-bar',
    label: 'ANSI bar',
    mainWidth: 2.25,
    mainHeight: 1,
    tailWidth: 0,
    tailHeight: 0,
    tailInsetX: 0,
  },
  'iso-l': {
    id: 'iso-l',
    label: 'ISO L',
    mainWidth: 1.5,
    mainHeight: 1,
    tailWidth: 1.25,
    tailHeight: 1,
    tailInsetX: 0.25,
  },
  'iso-l-stepped': {
    id: 'iso-l-stepped',
    label: 'ISO L (stepped)',
    mainWidth: 1.5,
    mainHeight: 1,
    tailWidth: 1.5,
    tailHeight: 1,
    tailInsetX: 0,
  },
  'bae': {
    id: 'bae',
    label: 'Big-ass Enter',
    mainWidth: 1.25,
    mainHeight: 1,
    tailWidth: 2.25,
    tailHeight: 1,
    tailInsetX: -1,
  },
};

export const enterShapeIds: EnterShapeId[] = Object.keys(enterShapeSpecs) as EnterShapeId[];

export type EnterShapeGeometry = {
  /** Bounding-box width in base units. */
  boundingWidth: number;
  /** Bounding-box height in base units. */
  boundingHeight: number;
  /** Horizontal offset of the main rect inside the bounding box (base units). Non-zero when the tail extends left of main. */
  mainX: number;
  /** Horizontal offset of the tail rect inside the bounding box (base units). */
  tailX: number;
  /** Whether the shape has a tail at all. */
  hasTail: boolean;
  /** Spec copied through for convenience. */
  spec: EnterShapeSpec;
};

export const computeEnterGeometry = (shapeId: EnterShapeId): EnterShapeGeometry => {
  const spec = enterShapeSpecs[shapeId];
  const hasTail = spec.tailWidth > 0 && spec.tailHeight > 0;
  const leftExtent = Math.min(0, spec.tailInsetX);
  const mainX = -leftExtent;
  const tailX = spec.tailInsetX - leftExtent;
  const boundingWidth = hasTail
    ? Math.max(mainX + spec.mainWidth, tailX + spec.tailWidth)
    : spec.mainWidth;
  const boundingHeight = hasTail
    ? spec.mainHeight + spec.tailHeight
    : spec.mainHeight;
  return {boundingWidth, boundingHeight, mainX, tailX, hasTail, spec};
};

/**
 * Concrete rendered dimensions (rem) for a shaped key. The tail's visual top
 * sits at `mainHeight * baseSize`, i.e. directly under the main rect with no
 * intra-key gap — the tail fills the inter-row gap plus the row below.
 */
export type EnterRenderBox = {
  widthRem: number;
  heightRem: number;
  mainOffsetXRem: number;
  mainWidthRem: number;
  mainHeightRem: number;
  clipPath?: string;
  slotSpanX: number;
  slotSpanY: number;
};

export const renderEnterShape = (shapeId: EnterShapeId, baseSize: number, interRowGap: number): EnterRenderBox => {
  const g = computeEnterGeometry(shapeId);
  const slot = baseSize + interRowGap;
  const toPx = (slots: number) => slots * baseSize + Math.max(0, slots - 1) * interRowGap;

  const mainWRem = toPx(g.spec.mainWidth);
  const mainHRem = toPx(g.spec.mainHeight);
  const mainOffsetXRem = g.mainX * slot;
  const tailWRem = toPx(g.spec.tailWidth);
  const tailOffsetXRem = g.tailX * slot;

  if (!g.hasTail) {
    return {
      widthRem: mainWRem,
      heightRem: mainHRem,
      mainOffsetXRem,
      mainWidthRem: mainWRem,
      mainHeightRem: mainHRem,
      slotSpanX: g.boundingWidth,
      slotSpanY: g.boundingHeight,
    };
  }

  const widthRem = toPx(g.boundingWidth);
  // Tail visually absorbs the inter-row gap so the key spans cleanly from row to row.
  const heightRem = toPx(g.boundingHeight);
  const pct = (x: number, total: number) => `${((x / total) * 100).toFixed(4)}%`;

  const mainLeft = pct(mainOffsetXRem, widthRem);
  const mainRight = pct(mainOffsetXRem + mainWRem, widthRem);
  const tailLeft = pct(tailOffsetXRem, widthRem);
  const tailRight = pct(tailOffsetXRem + tailWRem, widthRem);
  const top = '0%';
  const mid = pct(mainHRem, heightRem);
  const bottom = '100%';

  let clipPath: string;
  if (g.spec.tailInsetX >= 0) {
    clipPath = `polygon(${mainLeft} ${top}, ${mainRight} ${top}, ${mainRight} ${bottom}, ${tailLeft} ${bottom}, ${tailLeft} ${mid}, ${mainLeft} ${mid})`;
  } else {
    clipPath = `polygon(${mainLeft} ${top}, ${mainRight} ${top}, ${mainRight} ${mid}, ${tailRight} ${mid}, ${tailRight} ${bottom}, ${tailLeft} ${bottom}, ${tailLeft} ${mid}, ${mainLeft} ${mid})`;
  }

  return {
    widthRem,
    heightRem,
    mainOffsetXRem,
    mainWidthRem: mainWRem,
    mainHeightRem: mainHRem,
    clipPath,
    slotSpanX: g.boundingWidth,
    slotSpanY: g.boundingHeight,
  };
};
