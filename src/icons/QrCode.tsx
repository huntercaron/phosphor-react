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
      x="48.00244"
      y="48"
      width="60"
      height="60"
      rx="8"
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="48.00244"
      y="148"
      width="60"
      height="60"
      rx="8"
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="148.00244"
      y="48"
      width="60"
      height="60"
      rx="8"
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="148.00244"
      y1="148"
      x2="148.00244"
      y2="172"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="148.002 208 184.002 208 184.002 148"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="184.00244"
      y1="164"
      x2="208.00244"
      y2="164"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <rect x="48.00244" y="48" width="64" height="64" rx="8" opacity="0.2" />
    <rect x="48.00244" y="144" width="64" height="64" rx="8" opacity="0.2" />
    <rect x="144.00244" y="48" width="64" height="64" rx="8" opacity="0.2" />
    <rect
      x="48.00244"
      y="48"
      width="64"
      height="64"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="48.00244"
      y="144"
      width="64"
      height="64"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="144.00244"
      y="48"
      width="64"
      height="64"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="144.00244"
      y1="144"
      x2="144.00244"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="144.002 208 176.002 208 176.002 144"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="176.00244"
      y1="160"
      x2="208.00244"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="208.00244"
      y1="192"
      x2="208.00244"
      y2="208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <g>
      <rect x="40.00244" y="40" width="80" height="80" rx="16" />
      <rect x="40.00244" y="136" width="80" height="80" rx="16" />
      <rect x="136.00244" y="40" width="80" height="80" rx="16" />
      <path d="M144.00244,184a8.00039,8.00039,0,0,0,8-8V144a8,8,0,0,0-16,0v32A8.00039,8.00039,0,0,0,144.00244,184Z" />
      <path d="M208.00244,152h-24v-8a8,8,0,0,0-16,0v56h-24a8,8,0,1,0,0,16h32a8.00039,8.00039,0,0,0,8-8V168h24a8,8,0,0,0,0-16Z" />
      <path d="M208.00244,184a8.00039,8.00039,0,0,0-8,8v16a8,8,0,0,0,16,0V192A8.00039,8.00039,0,0,0,208.00244,184Z" />
    </g>
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <rect
      x="48.00244"
      y="48"
      width="64"
      height="64"
      rx="8"
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="48.00244"
      y="144"
      width="64"
      height="64"
      rx="8"
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="144.00244"
      y="48"
      width="64"
      height="64"
      rx="8"
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="144.00244"
      y1="144"
      x2="144.00244"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="144.002 208 176.002 208 176.002 144"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="176.00244"
      y1="160"
      x2="208.00244"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="208.00244"
      y1="192"
      x2="208.00244"
      y2="208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <rect
      x="48.00244"
      y="48"
      width="64"
      height="64"
      rx="8"
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="48.00244"
      y="144"
      width="64"
      height="64"
      rx="8"
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="144.00244"
      y="48"
      width="64"
      height="64"
      rx="8"
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="144.00244"
      y1="144"
      x2="144.00244"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="144.002 208 176.002 208 176.002 144"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="176.00244"
      y1="160"
      x2="208.00244"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="208.00244"
      y1="192"
      x2="208.00244"
      y2="208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <rect
      x="48.00244"
      y="48"
      width="64"
      height="64"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="48.00244"
      y="144"
      width="64"
      height="64"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="144.00244"
      y="48"
      width="64"
      height="64"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="144.00244"
      y1="144"
      x2="144.00244"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="144.002 208 176.002 208 176.002 144"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="176.00244"
      y1="160"
      x2="208.00244"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="208.00244"
      y1="192"
      x2="208.00244"
      y2="208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const QrCode = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

QrCode.displayName = "QrCode";

export default QrCode;
