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
    <polyline
      points="144 144 168 120 144 96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <rect
      x="45.97561"
      y="45.97561"
      width="164.04877"
      height="164.04877"
      rx="8"
      transform="translate(-53.01934 128) rotate(-45)"
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M88,148v-4a24,24,0,0,1,24-24h56"
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
    <rect
      x="45.97561"
      y="45.97561"
      width="164.04877"
      height="164.04877"
      rx="8"
      transform="translate(-53.01934 128) rotate(-45)"
      opacity="0.2"
    />
    <polyline
      points="144 144 168 120 144 96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="45.97561"
      y="45.97561"
      width="164.04877"
      height="164.04877"
      rx="8"
      transform="translate(-53.01934 128) rotate(-45)"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M88,152v-8a24,24,0,0,1,24-24h56"
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
    <path d="M244,116.68555,139.31445,12.001A15.99888,15.99888,0,0,0,116.68652,12L11.999,116.68652A16.02163,16.02163,0,0,0,12,139.31445L116.68555,243.999a15.99888,15.99888,0,0,0,22.62793.001L244.001,139.31348A16.02163,16.02163,0,0,0,244,116.68555ZM175.999,120.022q-.00145.38379-.03906.7666c-.01172.12061-.03418.2378-.05127.35694-.02.13965-.03613.27929-.064.41748-.02637.13525-.06348.26611-.09717.39892-.03027.12012-.05664.24073-.09277.35987-.03956.13037-.0879.25586-.13379.3833-.04248.11914-.08155.23877-.13038.356-.04882.11767-.106.23-.16015.34472-.05762.12256-.11182.2461-.17627.36572-.05762.10791-.12354.21-.186.31495-.0708.11914-.13867.24023-.2163.35644-.07618.11328-.16065.22022-.24219.3291-.07471.1001-.144.20264-.22412.3003-.14893.18115-.30762.35449-.47168.522-.02.02051-.03711.04248-.05713.063l-24,24a8.00018,8.00018,0,0,1-11.31348-11.31446L148.686,128H112a16.01833,16.01833,0,0,0-16,16v8a8,8,0,0,1-16,0v-8a32.03667,32.03667,0,0,1,32-32h36.686l-10.34278-10.34277a8.00018,8.00018,0,0,1,11.31348-11.31446l24,24c.02.02051.03711.04248.05713.063.16406.16748.32275.34082.47168.522.08007.09766.14941.2002.22412.3003.08154.10888.166.21582.24219.3291.07763.11621.1455.2373.2163.35644.0625.105.12842.207.186.31495.06445.11962.11865.24316.17627.36572.0542.11474.11133.22705.16015.34472.04883.11719.0879.23682.13038.356.04589.12744.09423.25293.13379.3833.03613.11914.0625.23975.09277.35987.03369.13281.0708.26367.09717.39892.02783.13819.04394.27783.064.41748.01709.11914.03955.23633.05127.35694q.03809.38232.03906.7666L176,120Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polyline
      points="144 144 168 120 144 96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <rect
      x="45.97561"
      y="45.97561"
      width="164.04877"
      height="164.04877"
      rx="8"
      transform="translate(-53.01934 128) rotate(-45)"
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M88,152v-8a24,24,0,0,1,24-24h56"
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
    <polyline
      points="144 144 168 120 144 96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <rect
      x="45.97561"
      y="45.97561"
      width="164.04877"
      height="164.04877"
      rx="8"
      transform="translate(-53.01934 128) rotate(-45)"
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M88,152v-8a24,24,0,0,1,24-24h56"
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
    <polyline
      points="144 144 168 120 144 96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="45.97561"
      y="45.97561"
      width="164.04877"
      height="164.04877"
      rx="8"
      transform="translate(-53.01934 128) rotate(-45)"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M88,152v-8a24,24,0,0,1,24-24h56"
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

const TrafficSign = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

TrafficSign.displayName = "TrafficSign";

export default TrafficSign;
