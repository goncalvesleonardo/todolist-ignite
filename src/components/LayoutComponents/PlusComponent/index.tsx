import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function PlusComponent(props: any) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_10703_283)" fill="#F2F2F2">
        <Path d="M7.984 1.452a6.532 6.532 0 11-6.532 6.532 6.557 6.557 0 016.532-6.532zm0-1.452a7.984 7.984 0 10.065 15.967A7.984 7.984 0 007.984 0z" />
        <Path d="M11.707 7.381H8.495V4.17H7.414V7.38H4.199v1.082h3.215v3.211h1.081V8.463h3.212V7.38z" />
      </G>
      <Defs>
        <ClipPath id="clip0_10703_283">
          <Path fill="#fff" d="M0 0H16V16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default PlusComponent
