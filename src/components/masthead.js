import React from "react"
import Logo from "../components/logo"
import Nav from "../components/nav"
import styled from "styled-components"
import { device } from "../base/device"

const Header = styled.header`
  align-items: center;
  display: flex;
  min-height: 2rem;
  padding: 1.2rem;
  position: relative;
  z-index: 1;

  @media ${device.medium} {
    padding: 2.2rem 3rem;
  }
}
`

const Masthead = () => (
  <Header>
    <Logo></Logo>
    <Nav></Nav>
  </Header>
)

export default Masthead
