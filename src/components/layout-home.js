import React from "react"
import PropTypes from "prop-types"
import styled, { keyframes } from "styled-components"
import { GlobalStyle } from "../base/style"
import { device } from "../base/device"
import { variable } from "../base/variables"
import Masthead from "./masthead"
import Footer from "./footer"
// import backgroundImage from "../images/building.jpg"

const RotatePanel = keyframes`
  0% {
    transform: rotate(-2deg);
  }
  100% {
    transform: rotate(-4deg);
  }
`

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  background-color: ${variable.colorGray};
  overflow-x: hidden;

  &::before {
    background-color: rgba(255, 255, 255, 0.85);
    content: "";
    height: 100vh;
    left: 0;
    position: absolute;
    width: 100%;

    @media ${device.large} {
      animation: ${RotatePanel} 2s 1;
      animation-direction: alternate;
      background-color: rgba(255, 255, 255, 0.95);
      height: 90vh;
      left: -34%;
      min-height: 920px;
      overflow-x: hidden;
      overflow-y: hidden;
      top: -20%;
      transform: rotate(-4deg);
      width: 150%;
    }

    @media ${device.landscape} {
      background-color: rgba(255, 255, 255, 0.9);
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
    }
  }

  footer {
    background: none;
    margin-top: 0;

    a:not(.mastodon) svg {
      fill: ${variable.colorLightGray};
      width: 30px;
      height: 30px;
    }

    .mastodon svg {
      width: 30px;
      height: 30px;

      .md-fill {
        fill: ${variable.colorLightGray};
      }

      .md-mark {
        fill: ${variable.colorGray};
      }
    }

    a {
      color: ${variable.colorLight};
    }
  }

  .split-content {
    align-items: flex-start;
    overflow-x: hidden;
    position: relative;
    z-index: 1;

    @media ${device.large} {
      padding-left: 4rem;
      padding-right: 4rem;
    }

    @media ${device.large} {
      min-height: 600px;
    }

    @media ${device.jumbo} {
      align-items: center;
      padding: 0px;
    }

    a {
      border-bottom: 2px solid;

      @media ${device.medium} {
        border-bottom-width: 3px;
      }
    }
  }

  h1 {
    font-size: 1.8rem;
    letter-spacing: -0.09rem;
    line-height: 2.2rem;
    margin: 10% 0 1rem;
    position: relative;
    z-index: 2;

    @media ${device.medium} {
      font-size: 3.4rem;
      line-height: 4rem;
      margin-top: 5%;
    }

    @media ${device.large} {
      margin-bottom: 2rem;
      margin-top: 5%;
    }

    @media ${device.jumbo} {
      font-size: 4.4rem;
      line-height: 5rem;
      max-width: 98%;
    }

    @media ${device.landscape} {
      font-size: 2.2rem;
      line-height: 2.6rem;
      margin-top: 1%;
    }
  }

  h2 {
    color: ${variable.colorLightGray};
    max-width: 900px;

    @media ${device.landscape} {
      font-size: 1.2rem;
      margin-top: 1rem;
    }

    a {
      display: inline-block;
      color: ${variable.colorPrimary};
      margin-left: 6px;

      &:hover {
        color: ${variable.colorGray};
      }
    }
  }
`

const Main = styled.main`
  flex: 1 1 100%;
`

const Container = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 9999;

  @media ${device.medium} {
    max-width: 1200px;
    padding-left: 3rem;
    padding-right: 3rem;
  }
`

const LayoutHome = ({ type, slug, children }) => {
  return (
    <>
      <GlobalStyle />
      <Wrap className={slug}>
        <Masthead />
        <Main>
          <Container>{children}</Container>
        </Main>
        <Footer />
      </Wrap>
    </>
  )
}

LayoutHome.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutHome
