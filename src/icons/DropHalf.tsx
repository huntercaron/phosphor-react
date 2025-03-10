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
    <path
      d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="128"
      y1="224"
      x2="128"
      y2="16"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="127.99999"
      y1="79.99999"
      x2="206.65864"
      y2="158.65864"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="127.99999"
      y1="139.99999"
      x2="186.53165"
      y2="198.53165"
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
    <path d="M128,224a80,80,0,0,0,80-80c0-72-80-128-80-128Z" opacity="0.2" />
    <path
      d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="224"
      x2="128"
      y2="16"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
));

pathsByWeight.set("fill", (color: string) => (
  <>
    <path
      d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path d="M128,224a80,80,0,0,0,80-80c0-72-80-128-80-128Z" />
    <line
      x1="128"
      y1="224"
      x2="128"
      y2="16"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="128"
      y1="224"
      x2="128"
      y2="16"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="127.99999"
      y1="63.99999"
      x2="208"
      y2="144"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="127.99999"
      y1="111.99999"
      x2="198.26945"
      y2="182.26945"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <g>
      <line
        x1="127.99999"
        y1="159.99999"
        x2="176.00281"
        y2="208.00281"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
      <line
        x1="127.99999"
        y1="159.99999"
        x2="176.00281"
        y2="208.00281"
        fill="#231f20"
      />
    </g>
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <path
      d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="128"
      y1="224"
      x2="128"
      y2="16"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="127.99999"
      y1="63.99999"
      x2="208"
      y2="144"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="127.99999"
      y1="111.99999"
      x2="198.26945"
      y2="182.26945"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <g>
      <line
        x1="127.99999"
        y1="159.99999"
        x2="176.00281"
        y2="208.00281"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
      <line
        x1="127.99999"
        y1="159.99999"
        x2="176.00281"
        y2="208.00281"
        fill="#231f20"
      />
    </g>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path
      d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="224"
      x2="128"
      y2="16"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="127.99999"
      y1="63.99999"
      x2="208"
      y2="144"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="127.99999"
      y1="111.99999"
      x2="198.26945"
      y2="182.26945"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <g>
      <line
        x1="127.99999"
        y1="159.99999"
        x2="176.00281"
        y2="208.00281"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <line
        x1="127.99999"
        y1="159.99999"
        x2="176.00281"
        y2="208.00281"
        fill="#231f20"
      />
    </g>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const DropHalf = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

DropHalf.displayName = "DropHalf";

export default DropHalf;
