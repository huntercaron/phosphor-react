/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <line x1="88" y1="68" x2="216" y2="68" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="88.00614" y1="128" x2="216" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="88.00614" y1="188" x2="216" y2="188" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <circle cx="44" cy="68" r="16"/>
  <circle cx="44" cy="128" r="16"/>
  <circle cx="44" cy="188.00586" r="16"/>

</>)
    case "duotone":
      return (<>
  <line x1="88" y1="68" x2="216" y2="68" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="88.00614" y1="128" x2="216" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="88.00614" y1="188" x2="216" y2="188" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="44" cy="68" r="12"/>
  <circle cx="44" cy="128" r="12"/>
  <circle cx="44" cy="188.00586" r="12"/>

</>)
    case "fill":
      return (<>
  <g>
    <path d="M88,76H216a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16Z"/>
    <path d="M216,120H88.00586a8,8,0,1,0,0,16H216a8,8,0,0,0,0-16Z"/>
    <path d="M216,180H88.00586a8,8,0,1,0,0,16H216a8,8,0,0,0,0-16Z"/>
    <circle cx="44" cy="68" r="12"/>
    <circle cx="44" cy="128" r="12"/>
    <circle cx="44" cy="188.00586" r="12"/>
  </g>

</>)
    case "light":
      return (<>
  <line x1="88" y1="68" x2="216" y2="68" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="88.00614" y1="128" x2="216" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="88.00614" y1="188" x2="216" y2="188" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <circle cx="44" cy="68" r="9"/>
  <circle cx="44" cy="128" r="9"/>
  <circle cx="44" cy="188.00586" r="9" opacity="0.8"/>

</>)
    case "thin":
      return (<>
  <line x1="88" y1="68" x2="216" y2="68" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="88.00614" y1="128" x2="216" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="88.00614" y1="188" x2="216" y2="188" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <circle cx="44" cy="68" r="6"/>
  <circle cx="44" cy="128" r="6"/>
  <circle cx="44" cy="188.00586" r="6"/>

</>)
    case "regular":
      return (<>
  <line x1="88" y1="68" x2="216" y2="68" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="88.00614" y1="128" x2="216" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="88.00614" y1="188" x2="216" y2="188" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="44" cy="68" r="12"/>
  <circle cx="44" cy="128" r="12"/>
  <circle cx="44" cy="188.00586" r="12"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const ListBullets = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { color, size, weight, mirrored, ...rest } = props;
  const {
    color: contextColor,
    size: contextSize,
    weight: contextWeight,
    mirrored: contextMirrored,
    ...contextRest
  } = useContext(IconContext);

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? contextSize}
      height={size ?? contextSize}
      fill={color ?? contextColor}
      viewBox="0 0 256 256"
      transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined}
      {...contextRest}
      {...rest}
    >
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>
  ); 
});

ListBullets.displayName = "ListBullets";

export default ListBullets;