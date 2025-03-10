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
      d="M56,216H48a8,8,0,0,1-8-8v-8.00037"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="112"
      y1="88"
      x2="92"
      y2="88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="112"
      y1="216"
      x2="96"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="168"
      y1="163.99963"
      x2="168"
      y2="143.99963"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="40"
      y1="159.99963"
      x2="40"
      y2="143.99963"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M152,216h8a8,8,0,0,0,8-8v-8.00037"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M152,88h8a8,8,0,0,1,8,8v7.99963"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M56,88H48a8,8,0,0,0-8,8v7.99963"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M169.501,164H208.25a7.75,7.75,0,0,0,7.75-7.75V47.75A7.75,7.75,0,0,0,208.25,40H99.75A7.75,7.75,0,0,0,92,47.75V86.50568"
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
    <rect x="40" y="88" width="128" height="128" rx="8" opacity="0.2" />
    <path
      d="M56,216H48a8,8,0,0,1-8-8v-8.00037"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="112"
      y1="88"
      x2="88"
      y2="88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="112"
      y1="216"
      x2="96"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="168"
      y1="167.99963"
      x2="168"
      y2="143.99963"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="40"
      y1="159.99963"
      x2="40"
      y2="143.99963"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M152,216h8a8,8,0,0,0,8-8v-8.00037"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M152,88h8a8,8,0,0,1,8,8v7.99963"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M56,88H48a8,8,0,0,0-8,8v7.99963"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M168,167.99414h39.999a8,8,0,0,0,8-8v-112a8,8,0,0,0-8-8h-112a8,8,0,0,0-8,8V88"
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
    <path d="M64,216a8.00008,8.00008,0,0,1-8,8H48a16.01833,16.01833,0,0,1-16-16v-8a8,8,0,0,1,16,0v8h8A8.00008,8.00008,0,0,1,64,216Zm48-8H96a8,8,0,0,0,0,16h16a8,8,0,0,0,0-16ZM40,168a8.00008,8.00008,0,0,0,8-8V144a8,8,0,0,0-16,0v16A8.00008,8.00008,0,0,0,40,168Zm128,24a8.00008,8.00008,0,0,0-8,8v8h-8a8,8,0,0,0,0,16h8a16.01833,16.01833,0,0,0,16-16v-8A8.00008,8.00008,0,0,0,168,192Zm0-80a8.00008,8.00008,0,0,0,8-8V96a16.01833,16.01833,0,0,0-16-16h-8a8,8,0,0,0,0,16h8v8A8.00008,8.00008,0,0,0,168,112ZM56,80H48A16.01833,16.01833,0,0,0,32,96v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16ZM207.999,31.99414h-112a16.01833,16.01833,0,0,0-16,16V88a8.00009,8.00009,0,0,0,8,8H112a8,8,0,0,0,0-16H95.999V47.99414h112v112H176V144a8,8,0,0,0-16,0v24a8.00008,8.00008,0,0,0,8,8c.03918,0,.0769-.00537.116-.00586H207.999a16.01833,16.01833,0,0,0,16-16v-112A16.01833,16.01833,0,0,0,207.999,31.99414Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M56,216H48a8,8,0,0,1-8-8v-8.00037"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="112"
      y1="88"
      x2="88"
      y2="88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="112"
      y1="216"
      x2="96"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="168"
      y1="167.99963"
      x2="168"
      y2="143.99963"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="40"
      y1="159.99963"
      x2="40"
      y2="143.99963"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M152,216h8a8,8,0,0,0,8-8v-8.00037"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M152,88h8a8,8,0,0,1,8,8v7.99963"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M56,88H48a8,8,0,0,0-8,8v7.99963"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M168,167.99414h39.999a8,8,0,0,0,8-8v-112a8,8,0,0,0-8-8h-112a8,8,0,0,0-8,8V88"
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
    <path
      d="M56,216H48a8,8,0,0,1-8-8v-8.00037"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="112"
      y1="88"
      x2="88"
      y2="88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="112"
      y1="216"
      x2="96"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="168"
      y1="167.99963"
      x2="168"
      y2="143.99963"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="40"
      y1="159.99963"
      x2="40"
      y2="143.99963"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M152,216h8a8,8,0,0,0,8-8v-8.00037"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M152,88h8a8,8,0,0,1,8,8v7.99963"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M56,88H48a8,8,0,0,0-8,8v7.99963"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M168,167.99414h39.999a8,8,0,0,0,8-8v-112a8,8,0,0,0-8-8h-112a8,8,0,0,0-8,8V88"
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
    <path
      d="M56,216H48a8,8,0,0,1-8-8v-8.00037"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="112"
      y1="88"
      x2="88"
      y2="88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="112"
      y1="216"
      x2="96"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="168"
      y1="167.99963"
      x2="168"
      y2="143.99963"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="40"
      y1="159.99963"
      x2="40"
      y2="143.99963"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M152,216h8a8,8,0,0,0,8-8v-8.00037"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M152,88h8a8,8,0,0,1,8,8v7.99963"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M56,88H48a8,8,0,0,0-8,8v7.99963"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M168,167.99414h39.999a8,8,0,0,0,8-8v-112a8,8,0,0,0-8-8h-112a8,8,0,0,0-8,8V88"
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

const SelectionForeground = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => <IconBase ref={ref} {...props} renderPath={renderPath} />
);

SelectionForeground.displayName = "SelectionForeground";

export default SelectionForeground;
