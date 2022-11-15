import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { device } from "../base/device"
import { variable } from "../base/variables"

const LeadTextWrap = styled.div`
  display: none;
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
`

const LeadText = ({ children }) => {
  return (
    <>
      <LeadTextWrap>{children}</LeadTextWrap>
    </>
  )
}

LeadText.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LeadText
