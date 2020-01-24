import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { GlobalStyle } from "../base/style"
import { device } from "../base/device"
import Masthead from "./masthead"
import Sidebar from "./sidebar"
import Footer from "./footer"

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1900px;
  position: relative;
  z-index: 2;
`

const Main = styled.main`
  flex: 1 1 100%;
`

const Container = styled.div`
  margin: 0 auto;
  padding: 0 2rem;

  @media ${device.medium} {
    max-width: 1200px;
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .split {
    position: relative;
    z-index: 2;

    @media ${device.large} {
      display: flex;
    }

    .split-content {
      padding-bottom: 4rem;

      @media ${device.medium} {
        flex: 1 1 68%;
        padding: 0 6rem 0 0;
      }
    }

    .split-sidebar {
      @media ${device.large} {
        flex: 1 1 32%;
      }
    }
  }
`

const SplitSide = ({ slug }) => {
  const isContact = slug === "contact" ? true : false
  return <Sidebar version={isContact ? "contact" : "default"} />
}

const Content = ({ children }) => {
  return <div className="split-content">{children}</div>
}

const Layout = ({ type, slug, children }) => {
  const isSplit = type === "split" ? true : false
  return (
    <>
      <GlobalStyle />
      <Wrap className={slug}>
        <Masthead />
        <Main>
          <Container>
            <div className={isSplit ? `split` : `wide`}>
              <Content children={children} />
              {isSplit && <SplitSide slug={slug} />}
            </div>
          </Container>
        </Main>
        <Footer />
      </Wrap>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
