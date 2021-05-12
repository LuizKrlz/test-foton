import * as React from "react";
import Svg, { SvgProps, Path, Circle } from "react-native-svg";

function SearchIcon(props: SvgProps) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.667 6.667A5.333 5.333 0 114 6.667a5.333 5.333 0 0110.667 0zm-9.334 0a4 4 0 108 0 4 4 0 00-8 0z"
        fill="#DCD8D8"
      />
      <Path
        d="M3.862 11.195L1.529 13.53a.667.667 0 10.942.942l2.334-2.333a.667.667 0 10-.943-.943z"
        fill="#F0F0F0"
      />
      <Circle cx={9.333} cy={6.667} r={0.667} fill="#F0F0F0" />
    </Svg>
  );
}

export default SearchIcon;
