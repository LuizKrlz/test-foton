import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  Defs,
  Pattern,
  Use,
  Image,
} from "react-native-svg";

function ShakeHandsIcon(props: SvgProps) {
  return (
    <Svg
      width="1em"
      height="1em"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path d="M0 24.68h24v-24H0v24z" fill="url(#prefix__pattern0)" />
      <Defs>
        <Pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#prefix__image0" transform="scale(.01563)" />
        </Pattern>
        <Image
          id="prefix__image0"
          width={64}
          height={64}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
}

const ShakeHands = React.memo(ShakeHandsIcon);
export default ShakeHands;
