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
      d="M59.31371,40H196.68629a8,8,0,0,1,5.65686,13.65685L128,128,53.65685,53.65685A8,8,0,0,1,59.31371,40Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M59.31371,216H196.68629a8,8,0,0,0,5.65686-13.65685L128,128,53.65685,202.34315A8,8,0,0,0,59.31371,216Z"
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
    <path
      d="M59.31371,40H196.68629a8,8,0,0,1,5.65686,13.65685L53.65685,202.34315A8,8,0,0,0,59.31371,216H196.68629a8,8,0,0,0,5.65686-13.65685L53.65685,53.65685A8,8,0,0,1,59.31371,40Z"
      opacity="0.2"
    />
    <path
      d="M59.31371,40H196.68629a8,8,0,0,1,5.65686,13.65685L128,128,53.65685,53.65685A8,8,0,0,1,59.31371,40Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M59.31371,216H196.68629a8,8,0,0,0,5.65686-13.65685L128,128,53.65685,202.34315A8,8,0,0,0,59.31371,216Z"
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
    <path d="M139.31543,127.99854,208,59.31348A15.9999,15.9999,0,0,0,196.68652,32H59.31348A15.9999,15.9999,0,0,0,48,59.31348l68.68457,68.688L48,196.68652A15.9999,15.9999,0,0,0,59.31348,224h137.373A15.9999,15.9999,0,0,0,208,196.68652Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M59.31371,40H196.68629a8,8,0,0,1,5.65686,13.65685L128,128,53.65685,53.65685A8,8,0,0,1,59.31371,40Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M59.31371,216H196.68629a8,8,0,0,0,5.65686-13.65685L128,128,53.65685,202.34315A8,8,0,0,0,59.31371,216Z"
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
      d="M59.31371,40H196.68629a8,8,0,0,1,5.65686,13.65685L128,128,53.65685,53.65685A8,8,0,0,1,59.31371,40Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M59.31371,216H196.68629a8,8,0,0,0,5.65686-13.65685L128,128,53.65685,202.34315A8,8,0,0,0,59.31371,216Z"
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
      d="M59.31371,40H196.68629a8,8,0,0,1,5.65686,13.65685L128,128,53.65685,53.65685A8,8,0,0,1,59.31371,40Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M59.31371,216H196.68629a8,8,0,0,0,5.65686-13.65685L128,128,53.65685,202.34315A8,8,0,0,0,59.31371,216Z"
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

const HourglassSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

HourglassSimple.displayName = "HourglassSimple";

export default HourglassSimple;
