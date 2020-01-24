import React from "react"
import styled from "styled-components"
import { device } from "../base/device"
import { variable } from "../base/variables"
import Social from "../components/social"

const FooterWrap = styled.footer`
  align-items: center;
  background-image: linear-gradient(#fff, rgba(#ddd, 0.6));
  color: ${variable.ColorLightGray};
  display: flex;
  flex: 1 1 100px;
  font-size: 0.9rem;
  font-weight: 700;
  justify-content: center;
  margin-top: 4rem;
  padding: 2rem 1rem;

  @media ${device.medium} {
    margin-top: 8rem;
    padding-bottom: 2rem;
    padding-left: 3rem;
    padding-right: 3rem;
  }

  @media ${device.large} {
    justify-content: flex-end;
  }

  @media ${device.landscape} {
    padding-bottom: 0.2rem;
  }

  a {
    align-items: center;
    display: inline-flex;
    margin: 0 10px;
  }

  span {
    display: none;
  }
`

const Footer = () => (
  <FooterWrap>
    <Social />
  </FooterWrap>
)

export default Footer
