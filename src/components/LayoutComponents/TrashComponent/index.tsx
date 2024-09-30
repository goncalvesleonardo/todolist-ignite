import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props: any) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18.202 13.986h-1.33v5.521h1.33v-5.522zM15.462 13.986h-1.33v5.521h1.33v-5.522z"
        fill="gray"
      />
      <Path
        d="M22.478 11.167a.644.644 0 00-.46-.605.618.618 0 00-.184-.045h-3.547a2.144 2.144 0 00-4.1 0h-3.548a.638.638 0 00-.172.027h-.015a.641.641 0 00.09 1.246l.711 9.743A1.512 1.512 0 0012.683 23h7.104a1.512 1.512 0 001.433-1.467l.708-9.734a.638.638 0 00.55-.632zm-6.242-.952a.938.938 0 01.69.302h-1.379a.932.932 0 01.69-.302zm3.55 11.575h-7.103c-.081 0-.208-.133-.223-.344l-.702-9.635h8.957l-.701 9.635c-.016.211-.143.344-.227.344z"
        fill="gray"
      />
    </Svg>
  )
}

export default SvgComponent
