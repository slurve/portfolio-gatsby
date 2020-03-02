import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { device } from "../base/device"
import { variable } from "../base/variables"

const NavWrap = styled.nav`
  flex: 1 1 80%;
  margin-right: 6px;
  text-align: right;

  a {
    color: ${variable.colorLightGray};
    font-size: 0.85rem;
    font-style: normal;
    font-weight: 700;
    margin: 0 0 0 18px;
    padding: 0 0 3px;

    @media ${device.smallBreak1} {
      font-size: 1rem;
    }

    @media ${device.smallBreak2} {
      margin-left: 26px;
    }

    @media ${device.medium} {
      font-size: 1.2rem;
      margin: 0 4px 0 30px;
    }

    .home &.nav-home,
    .projects &.nav-projects,
    .about &.nav-about,
    .blog &.nav-blog,
    .contact &.nav-contact {
      border-bottom: 2px solid;
      color: ${variable.colorPrimary};
    }
  }
`

const Nav = () => (
  <NavWrap>
    <Link to="/projects" className="nav-projects">
      Projects
    </Link>
    <Link to="/about" className="nav-about">
      About
    </Link>
    <Link to="/contact" className="nav-contact">
      Contact
    </Link>
  </NavWrap>
)

export default Nav
