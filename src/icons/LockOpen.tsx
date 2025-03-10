/* GENERATED FILE */
import React, { forwardRef } from "react";

import {
  IconWeight,
  IconProps,
  PaintFunction,
  renderPathForWeight,
} from "../lib";
import IconBase, { RenderFunction } from "../lib/IconBase";

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set("bold", (color: string) => (
  <>
    <rect
      x="40"
      y="88"
      width="176"
      height="128"
      rx="8"
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M92,88V52a36.00169,36.00169,0,0,1,71.78028-4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle cx="128" cy="152" r="16" />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <rect x="40" y="88" width="176" height="128" rx="8" opacity="0.2" />
    <rect
      x="40"
      y="88"
      width="176"
      height="128"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M92,88V52a36,36,0,0,1,72,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="128" cy="152" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M208,80H100V52a28,28,0,0,1,56,0,8,8,0,0,0,16,0,44,44,0,0,0-88,0V80H48A16.01833,16.01833,0,0,0,32,96V208a16.01833,16.01833,0,0,0,16,16H208a16.01833,16.01833,0,0,0,16-16V96A16.01833,16.01833,0,0,0,208,80Zm-80.00586,84a12,12,0,1,1,12-12A12,12,0,0,1,127.99414,164Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <rect
      x="40"
      y="88"
      width="176"
      height="128"
      rx="8"
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M92,88V52a36,36,0,0,1,72,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle cx="128" cy="152" r="10" />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <rect
      x="40"
      y="88"
      width="176"
      height="128"
      rx="8"
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M92,88V52a36,36,0,0,1,72,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle cx="128" cy="152" r="8" />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <rect
      x="40"
      y="88"
      width="176"
      height="128"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M92,88V52a36,36,0,0,1,72,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="128" cy="152" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const LockOpen = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

LockOpen.displayName = "LockOpen";

export default LockOpen;
