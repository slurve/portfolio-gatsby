import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { device } from "../base/device"

const LogoWrap = styled.header`
  flex: 1 1 20%;

  @media all and (min-width: 1550px) {
    position: fixed;
  }
`

const LogoSVG = styled.div`
  svg {
    margin: 0 0 -4px 4px;
    width: 38px;

    @media ${device.medium} {
      margin-bottom: -10px;
      width: 77px;
    }

    .logo-fill {
      fill: #ff2d00;
    }

    &:hover .logo-fill {
      fill: #444;
    }
  }
`

const Logo = () => (
  <LogoWrap>
    <Link to="/">
      <LogoSVG>
        <svg viewBox="0 0 68 27">
          <title>&lt;tomrose&gt;</title>
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g
              className="logo-fill"
              transform="translate(-2.000000, -4.000000)"
              fillRule="nonzero"
            >
              <path d="M19.152,27.606 L2.166,19.17 L2.166,15.142 L19.152,6.706 L19.152,11.646 L7.828,17.118 L19.152,22.628 L19.152,27.606 Z M34.808,29.886 C33.896,30.152 33.022,30.266 31.502,30.266 C27.512,30.266 24.738,28.822 24.738,24.072 L24.738,16.054 L22.268,16.054 L22.268,11.38 L24.738,11.38 L24.738,5.832 L30.438,4.92 L30.438,11.38 L33.972,11.38 L34.694,16.054 L30.438,16.054 L30.438,23.16 C30.438,24.642 31.198,25.364 32.718,25.364 C33.212,25.364 33.706,25.288 34.124,25.174 L34.808,29.886 Z M49.514,16.852 C46.74,17.042 44.65,18.144 43.244,19.664 L43.244,30 L37.506,30 L37.506,11.38 L42.522,11.38 L43.13,15.066 C44.27,12.938 45.828,11.19 48.564,11 L49.514,16.852 Z M69.426,19.17 L52.44,27.606 L52.44,22.628 L63.764,17.194 L52.44,11.684 L52.44,6.706 L69.426,15.142 L69.426,19.17 Z"></path>
            </g>
          </g>
        </svg>
      </LogoSVG>
    </Link>
  </LogoWrap>
)

export default Logo
