import React from "react";

const UserIcon = ({ size = 24, stroke = "#000" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12"
      cy="7.25"
      r="5.73"
      style={{
        fill: "none",
        stroke,
        strokeMiterlimit: 10,
        strokeWidth: 1.91,
      }}
    />
    <path
      d="M1.5,23.48l.37-2.05A10.3,10.3,0,0,1,12,13h0a10.3,10.3,0,0,1,10.13,8.45l.37,2.05"
      style={{
        fill: "none",
        stroke,
        strokeMiterlimit: 10,
        strokeWidth: 1.91,
      }}
    />
  </svg>
);

export default UserIcon;