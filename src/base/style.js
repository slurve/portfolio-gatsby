import { createGlobalStyle } from "styled-components"
import { device } from "./device"
import { variable } from "./variables"

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${variable.defaultFont};
    font-size: 16px;
    line-height: 26px;
    font-weight: 300;
    margin: 0;

    @media ${device.large} {
      font-size: 18px;
      line-height: 32px;
    }

    @media ${device.large} {
      &:not(.home) {
        overflow-x: hidden;

        &::after {
          content: "";
          width: 110%;
          height: 100vh;
          position: absolute;
          top: -56%;
          left: -14%;
          background-image: linear-gradient(
            to bottom left,
            rgba(#ccc, 0.4),
            rgba(#fff, 0.2)
          );
          transform: rotate(-18deg);
        }
      }
    }
  }

  h1,
  h2,
  h3,
  h4 {
    margin: 0;
    font-style: normal;
    font-weight: 600;
  }

  h1 {
    color: ${variable.colorDark};
    font-size: 2rem;
    line-height: 2.4rem;
    margin: 2rem 0;
    font-weight: 700;

    @media ${device.medium} {
      font-size: 3rem;
      line-height: 3.4rem;
      margin: 4rem 0;
    }
  }

  h2 {
    font-size: 1rem;
    line-height: 1.4rem;
    margin: 2.8rem 0 1.4rem 0;
    color: ${variable.colorGray};

    @media ${device.medium} {
      font-size: 1.8rem;
      line-height: 2.2rem;
    }
  }

  h3 {
    font-size: 1.2rem;
    line-height: 1.4rem;
  }

  h4 {
    font-size: 0.9rem;
    line-height: 1.4rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${variable.colorGray};
  }

  p {
    margin: 0 0 24px;
  }

  .lead {
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: ${variable.colorLightGray};
    margin: 0 0 2rem;

    @media ${device.medium} {
      max-width: 90%;
      font-size: 1.6rem;
      line-height: 2.4rem;
      margin: 0 0 3rem;
    }

    .split & {
      max-width: none;
    }
  }

  a {
    text-decoration: none;
    color: ${variable.colorLink};

    &:hover {
      color: ${variable.colorLinkHover};
    }

    .split-content &,
    .project-details p & {
      border-bottom: 1px dotted ${variable.colorLightGray};
      margin: 0 2px;
    }
  }

  .button {
    background-color: ${variable.colorLink};
    text-align: center;
    border-radius: 2px;
    padding: 10px 24px;
    font-size: 1.1rem;
    font-weight: 700;
    color: ${variable.colorLight};
    cursor: pointer;
    border-right: 4px solid ${variable.colorBorder};
    border-bottom: 4px solid ${variable.colorBorder};
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
    -webkit-appearance: none;

    &:hover {
      background-color: ${variable.colorLinkHover};
      color: ${variable.colorLight};
    }
  }

  ::selection {
    background-color: #d9cb9e;
  }

  .list {
    max-width: 80%;
    margin: 0 0 1.5rem;
    padding: 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    li {
      margin: 0 10px 10px 0;
      list-style-type: none;
      background-color: #ddd;
      font-size: 0.8rem;
      font-weight: 700;
      color: ${variable.colorLightGray};
      padding: 4px 16px;
      border-top-left-radius: 8px;
      border-bottom-right-radius: 8px;

      @media ${device.medium} {
        font-size: 0.9rem;
        padding: 6px 18px;
      }
    }
  }
`
