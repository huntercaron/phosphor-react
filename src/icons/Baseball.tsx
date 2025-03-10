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
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M181.19142,79.40281a96.385,96.385,0,0,1,14.80852-19.167"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M196,195.76425a96.38487,96.38487,0,0,1-14.80811-19.16636"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M168.74273,140a97.31136,97.31136,0,0,1,0-24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <g>
      <path
        d="M74.80858,79.40281a96.385,96.385,0,0,0-14.80852-19.167"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <path
        d="M60.00005,195.76425a96.38487,96.38487,0,0,0,14.80811-19.16636"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <path
        d="M87.25728,140A96.9478,96.9478,0,0,0,88,128a96.94587,96.94587,0,0,0-.74152-11.9903"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </g>
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <path
      d="M60.05889,195.90664a96,96,0,0,1-.11775-135.64655l0,0a95.69768,95.69768,0,0,1,28,67.76427,95.69771,95.69771,0,0,1-27.99925,67.76355Z"
      opacity="0.2"
    />
    <path
      d="M196.05884,195.90664a96,96,0,0,1-.11776-135.64655l0,0a96,96,0,0,1,.00073,135.52782Z"
      opacity="0.2"
    />
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M169.172,113.03177a96.58913,96.58913,0,0,1,3.80409-15.5448"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M172.975,158.5097a96.58848,96.58848,0,0,1-3.80352-15.54493"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M86.828,113.03177A96.58913,96.58913,0,0,0,83.02388,97.487"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M83.025,158.5097a96.58848,96.58848,0,0,0,3.80352-15.54493"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M186.79812,70.93634a96.59069,96.59069,0,0,1,9.20058-10.701"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M195.999,195.765a96.59178,96.59178,0,0,1-9.20291-10.70411"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M60.0012,195.76479A96.5897,96.5897,0,0,0,69.204,185.06084"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M69.20188,70.93634A96.59162,96.59162,0,0,0,60.001,60.235"
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
    <path d="M207.24951,60.73486c-.02392.021-.04468.044-.06885.06446a88.76639,88.76639,0,0,0-10.37841,10.37841,8.0001,8.0001,0,1,1-12.21289-10.33691,104.79143,104.79143,0,0,1,11.3872-11.48828,103.80743,103.80743,0,0,0-135.95312,0,104.83246,104.83246,0,0,1,11.387,11.48779,8.00014,8.00014,0,0,1-6.102,13.169h-.00366a7.98253,7.98253,0,0,1-6.10987-2.83106A88.78841,88.78841,0,0,0,48.81592,60.7998c-.02368-.02-.0437-.04248-.0669-.0625a103.77819,103.77819,0,0,0,0,134.52588c.02417-.021.04493-.04443.06958-.06543A88.82286,88.82286,0,0,0,59.197,184.81934,8.00144,8.00144,0,0,1,71.4126,195.15723a104.89749,104.89749,0,0,1-11.38916,11.49023,103.80743,103.80743,0,0,0,135.95312,0,104.83154,104.83154,0,0,1-11.38916-11.49023,8,8,0,1,1,12.21192-10.33789,88.76639,88.76639,0,0,0,10.37841,10.37841c.02539.02149.04688.04541.07178.0669a103.77881,103.77881,0,0,0,0-134.52979ZM79.62866,87.97949A7.99764,7.99764,0,0,1,89.866,92.80518a104.86829,104.86829,0,0,1,4.4851,16.73877,8.00663,8.00663,0,0,1-7.88159,9.42431h-.00366a8.00242,8.00242,0,0,1-7.863-6.57861,88.81047,88.81047,0,0,0-3.79907-14.17676A8.00027,8.00027,0,0,1,79.62866,87.97949Zm14.72315,58.47315a104.886,104.886,0,0,1-4.48487,16.73925,8.003,8.003,0,0,1-7.52954,5.29834h-.00366a8.00492,8.00492,0,0,1-7.52905-10.70556,88.874,88.874,0,0,0,3.79883-14.17774,8.00167,8.00167,0,0,1,15.74829,2.84571Zm82.01391,21.56494a7.993,7.993,0,0,1-10.23291-4.82569,104.83662,104.83662,0,0,1-4.48486-16.73925,8.00011,8.00011,0,0,1,15.74512-2.84571,88.80709,88.80709,0,0,0,3.79834,14.17774A8.00013,8.00013,0,0,1,176.36572,168.01758Zm4.82666-69.8042a88.82819,88.82819,0,0,0-3.79883,14.17676,8.00019,8.00019,0,1,1-15.74511-2.84668,104.80436,104.80436,0,0,1,4.48633-16.73926,7.99986,7.99986,0,1,1,15.05761,5.40918Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M169.172,113.03177a96.58913,96.58913,0,0,1,3.80409-15.5448"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M172.975,158.5097a96.58848,96.58848,0,0,1-3.80352-15.54493"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M86.828,113.03177A96.58913,96.58913,0,0,0,83.02388,97.487"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M83.025,158.5097a96.58848,96.58848,0,0,0,3.80352-15.54493"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M186.79812,70.93634a96.59069,96.59069,0,0,1,9.20058-10.701"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M195.999,195.765a96.59178,96.59178,0,0,1-9.20291-10.70411"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M60.0012,195.76479A96.5897,96.5897,0,0,0,69.204,185.06084"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M69.20188,70.93634A96.59162,96.59162,0,0,0,60.001,60.235"
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
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M169.172,113.03177a96.58913,96.58913,0,0,1,3.80409-15.5448"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M172.975,158.5097a96.58848,96.58848,0,0,1-3.80352-15.54493"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M86.828,113.03177A96.58913,96.58913,0,0,0,83.02388,97.487"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M83.025,158.5097a96.58848,96.58848,0,0,0,3.80352-15.54493"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M186.79812,70.93634a96.59069,96.59069,0,0,1,9.20058-10.701"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M195.999,195.765a96.59178,96.59178,0,0,1-9.20291-10.70411"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M60.0012,195.76479A96.5897,96.5897,0,0,0,69.204,185.06084"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M69.20188,70.93634A96.59162,96.59162,0,0,0,60.001,60.235"
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
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M169.172,113.03177a96.58913,96.58913,0,0,1,3.80409-15.5448"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M172.975,158.5097a96.58848,96.58848,0,0,1-3.80352-15.54493"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M86.828,113.03177A96.58913,96.58913,0,0,0,83.02388,97.487"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M83.025,158.5097a96.58848,96.58848,0,0,0,3.80352-15.54493"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M186.79812,70.93634a96.59069,96.59069,0,0,1,9.20058-10.701"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M195.999,195.765a96.59178,96.59178,0,0,1-9.20291-10.70411"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M60.0012,195.76479A96.5897,96.5897,0,0,0,69.204,185.06084"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M69.20188,70.93634A96.59162,96.59162,0,0,0,60.001,60.235"
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

const Baseball = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Baseball.displayName = "Baseball";

export default Baseball;
