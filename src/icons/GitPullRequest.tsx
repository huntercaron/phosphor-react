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
      cx="68"
      cy="188"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle
      cx="68"
      cy="68"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="68"
      y1="96"
      x2="68"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle
      cx="188.00244"
      cy="188"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M188.00244,160l-.00163-40.11889a48,48,0,0,0-14.05888-33.93918L136,48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="136 88 136 48 176 48"
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
    <circle cx="68" cy="68" r="28" opacity="0.2" />
    <circle cx="188.00244" cy="188" r="28" opacity="0.2" />
    <circle
      cx="68"
      cy="188"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="68"
      cy="68"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="188.00244"
      cy="188"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="68"
      y1="96"
      x2="68"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M188.00244,160l-.00163-40.11889a48,48,0,0,0-14.05888-33.93918L136,48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="136 88 136 48 176 48"
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
      <path d="M104.00049,68a36,36,0,1,0-44,35.0929v49.8142a36,36,0,1,0,16,0V103.0929A36.05516,36.05516,0,0,0,104.00049,68Zm-16,120a20,20,0,1,1-20-20A20.0226,20.0226,0,0,1,88.00049,188Z" />
      <path d="M196.002,152.907l-.00146-33.02563a55.63508,55.63508,0,0,0-16.40137-39.59619L155.31445,56h20.686a8,8,0,0,0,0-16h-40c-.01563,0-.03028.00226-.0459.00232-.24756.0014-.49463.01318-.74121.03747-.12842.01252-.25293.0362-.3794.05469-.13086.01929-.2622.03418-.39257.05994-.145.02862-.28516.068-.42725.10431-.11035.02826-.22168.052-.33057.085-.14013.04224-.2749.0943-.41162.14386-.10937.03961-.21972.07538-.32763.12-.12745.05268-.24952.11432-.37354.17328-.11279.05347-.22656.10328-.33691.16236-.11914.0636-.23243.13574-.34766.20508-.1084.0653-.21875.12652-.3252.19751-.12353.08264-.23974.17443-.35839.26367-.09082.06823-.18409.1311-.27246.20361-.1875.15381-.36622.31714-.53907.487-.01562.0152-.03222.02783-.04785.04315-.02051.02051-.0376.04321-.05762.06391-.16357.16711-.32177.33941-.47021.52032-.083.10059-.15527.20648-.23193.31006-.07862.10571-.16065.20862-.23438.3183-.08057.12072-.15088.24591-.22461.36993-.05957.1-.12207.19757-.17724.30036-.06788.12591-.125.25531-.18506.384-.05078.1084-.10547.21466-.15137.32568-.05127.12463-.09326.25189-.13867.37848-.04248.11987-.08887.238-.126.36047-.03857.12775-.06738.25757-.09912.38678-.03125.124-.06592.24622-.09131.37244-.02978.15088-.04785.30328-.06933.45544-.01465.10645-.03516.21094-.0459.31867q-.03955.39752-.04.79706V88a8,8,0,0,0,16,0V67.31415l24.28418,24.28448a39.73874,39.73874,0,0,1,11.71582,28.28321l.00146,33.02533a36.00007,36.00007,0,1,0,16-.00019Z" />
    </g>
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="68"
      cy="188"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle
      cx="68"
      cy="68"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="68"
      y1="96"
      x2="68"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle
      cx="188.00244"
      cy="188"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M188.00244,160l-.00163-40.11889a48,48,0,0,0-14.05888-33.93918L136,48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="136 88 136 48 176 48"
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
      cx="68"
      cy="188"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle
      cx="68"
      cy="68"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="68"
      y1="96"
      x2="68"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle
      cx="188.00244"
      cy="188"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M188.00244,160l-.00163-40.11889a48,48,0,0,0-14.05888-33.93918L136,48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="136 88 136 48 176 48"
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
      cx="68"
      cy="188"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="68"
      cy="68"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="68"
      y1="96"
      x2="68"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="188.00244"
      cy="188"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M188.00244,160l-.00163-40.11889a48,48,0,0,0-14.05888-33.93918L136,48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="136 88 136 48 176 48"
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

const GitPullRequest = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

GitPullRequest.displayName = "GitPullRequest";

export default GitPullRequest;
