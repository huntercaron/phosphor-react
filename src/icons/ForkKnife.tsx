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
    <line
      x1="84"
      y1="32"
      x2="84"
      y2="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="84"
      y1="116"
      x2="84"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M120,32V80a36,36,0,0,1-72,0V32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M204,160H148S160,48,204,32V224"
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
    <path d="M204,160H148S160,48,204,32" opacity="0.2" />
    <line
      x1="84"
      y1="32"
      x2="84"
      y2="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="84"
      y1="116"
      x2="84"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M112,32l8,48a36,36,0,0,1-72,0l8-48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M204,160H148S160,48,204,32V224"
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
      <path d="M127.98877,79.77539c-.00439-.14453-.00977-.28906-.022-.43457-.01221-.146-.03028-.29-.04981-.43359-.01074-.07422-.01367-.14795-.02588-.22266l-8-48a8,8,0,1,0-15.78222,2.63086L110.55615,72H92V32a8,8,0,0,0-16,0V72H57.44385l6.44726-38.68457a8,8,0,1,0-15.78222-2.63086l-8,48c-.01221.07471-.01514.14844-.02588.22266-.01953.14355-.0376.28759-.04981.43359-.0122.14551-.01758.29-.022.43457C40.00928,79.85059,40,79.92432,40,80c0,.07129.00488.14111.00537.21191.00147.04932.00147.09815.00391.147A44.06056,44.06056,0,0,0,76,123.25781V224a8,8,0,0,0,16,0V123.25781a44.06056,44.06056,0,0,0,35.99072-42.89892c.00244-.04883.00244-.09766.00391-.147C127.99512,80.14111,128,80.07129,128,80,128,79.92432,127.99072,79.85059,127.98877,79.77539Z" />
      <path d="M211.99268,31.8584c-.00245-.165-.01172-.33008-.02491-.49561-.00879-.1123-.019-.22363-.03271-.33447-.01709-.13818-.03858-.27637-.063-.41455-.02441-.13916-.05127-.27686-.08252-.41309-.02539-.10839-.05371-.2163-.0835-.32422-.04443-.16064-.09228-.31884-.14648-.47509-.01514-.04492-.0249-.09033-.041-.13526-.01806-.04834-.041-.09326-.05957-.14111q-.09081-.23511-.19531-.46191-.06738-.148-.14062-.292-.09888-.19335-.208-.38037c-.06445-.11181-.13037-.22168-.19971-.32959-.06592-.10156-.13476-.20019-.20508-.29883-.08447-.11914-.17041-.23584-.26123-.34912-.0664-.08349-.13574-.16406-.20507-.24463-.1001-.11523-.20166-.229-.30762-.33789-.07422-.07617-.15137-.14941-.22852-.22265-.10644-.10156-.21386-.20117-.32568-.29639-.08984-.07666-.18311-.14892-.27637-.22168-.10449-.08105-.20947-.16162-.31787-.23779-.11084-.07764-.2251-.15039-.33984-.22217-.09717-.061-.19434-.12256-.29444-.1792-.13037-.07422-.26367-.14258-.39843-.20947-.09229-.0459-.18409-.0918-.27832-.13428-.14161-.06348-.28565-.12109-.43165-.17676-.09667-.03662-.19287-.07324-.2915-.10644-.13965-.04737-.28174-.08887-.4248-.12842-.11426-.03174-.228-.06152-.34327-.08838-.12695-.02881-.25537-.05371-.38427-.07666-.14063-.02539-.28076-.04687-.42285-.06445-.10889-.01319-.21827-.02393-.32862-.03321q-.24535-.01977-.49365-.0249C204.10352,24.00684,204.05273,24,204,24c-.04834,0-.0957.00635-.14355.00732-.16407.00293-.32813.01172-.49268.02491-.11279.00879-.22461.019-.33594.03271-.13818.01709-.27588.03858-.41406.063-.13916.02441-.27686.05127-.41309.083-.10839.0249-.2163.05322-.32422.083-.16064.04394-.31884.09228-.47509.14648-.04492.01514-.09033.0249-.13526.041-.09863.03613-.1958.0791-.29394.11572-.03711.01513-.0752.02832-.11231.04394-20.60986,7.74561-37.11474,33.0293-49.05713,75.17823a398.22183,398.22183,0,0,0-11.75683,59.32812A8.00051,8.00051,0,0,0,148,168h48v56a8,8,0,0,0,16,0V32C212,31.95215,211.99365,31.90625,211.99268,31.8584Z" />
    </g>
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="84"
      y1="32"
      x2="84"
      y2="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="84"
      y1="116"
      x2="84"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M112,32l8,48a36,36,0,0,1-72,0l8-48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M204,160H148S160,48,204,32V224"
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
    <line
      x1="84"
      y1="32"
      x2="84"
      y2="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="84"
      y1="116"
      x2="84"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M112,32l8,48a36,36,0,0,1-72,0l8-48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M204,160H148S160,48,204,32V224"
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
    <line
      x1="84"
      y1="32"
      x2="84"
      y2="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="84"
      y1="116"
      x2="84"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M112,32l8,48a36,36,0,0,1-72,0l8-48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M204,160H148S160,48,204,32V224"
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

const ForkKnife = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ForkKnife.displayName = "ForkKnife";

export default ForkKnife;
