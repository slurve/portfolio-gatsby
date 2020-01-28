import React from "react"
import styled from "styled-components"
import { device } from "../base/device"
import { variable } from "../base/variables"
import ubahn from "../images/ubahn.jpg"
import Social from "../components/social"

const SidebarWrap = styled.aside`
  position: relative;
`

const SidebarCTA = styled.div`
  color: ${variable.colorGray};
  position: sticky;
  top: 2rem;

  @media ${device.large} {
    margin-top: 12rem;
  }

  .availability {
    font-size: 0.95rem;
    font-weight: 700;

    .available {
      color: ${variable.colorAvailable};
    }

    .limited {
      color: ${variable.colorLimited};
    }
  }

  img {
    border-bottom: 4px solid #ddd;
    border-bottom-right-radius: 30px;
    border-right: 4px solid #ddd;
    border-top-left-radius: 30px;
    display: block;
    height: 280px;
    margin: 0 0 1.6rem;
    width: 280px;
  }

  h2 {
    color: ${variable.colorLink};
    margin: 0 auto 0.5rem;
  }

  p {
    color: ${variable.colorLightGray};
    font-size: 1.1rem;
    line-height: 1.6rem;
    margin: 0 0 1.6rem;
    max-width: 280px;
  }

  .social-vertical a {
    align-items: center;
    display: flex;
    font-weight: 700;
    margin-bottom: 20px;
  }
`

const Sidebar = ({ version }) => {
  let sidebarContent
  if (version === "contact") {
    sidebarContent = (
      <>
        <h2>Let's connect</h2>
        <p>
          If filling out contact forms isn't your thing, please feel free to
          send me an email at{" "}
          <strong>
            <a href="mailto:tom@slurve.com">tom@slurve.com</a>
          </strong>
          . You can also find me on the web:
        </p>
        <div className="social-vertical">
          <Social />
        </div>
      </>
    )
  } else if (version === "blog") {
    sidebarContent = (
      <>
        <img src={ubahn} alt="Tom Rose" />
        <div className="social-vertical">
          <Social />
        </div>
      </>
    )
  } else {
    sidebarContent = (
      <>
        <img src={ubahn} alt="Tom Rose" />
        <h2>Availability</h2>
        <p className="availability">
          January: <span className="limited">Limited</span>
          <br />
          February: <span className="limited">Limited</span>
          <br />
          March: <span className="available">Available</span>
        </p>
        <p>I'd love to set up a time to hear about your project. Let's talk!</p>
        <a href="/contact" className="button">
          Contact
        </a>
      </>
    )
  }
  return (
    <SidebarWrap>
      <SidebarCTA>{sidebarContent}</SidebarCTA>
    </SidebarWrap>
  )
}

export default Sidebar
