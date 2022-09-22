import React from "react"
import styled from "styled-components"
import { variable } from "../base/variables"
import { device } from "../base/device"

const AvailabilityWrap = styled.div`
  .availability {
    font-size: 0.95rem;
    font-weight: 700;

    .available {
      color: ${variable.colorAvailable};
    }

    .unavailable {
      color: ${variable.colorUnavailable};
    }

    .limited {
      color: ${variable.colorLimited};
    }
  }
`
const Availability = () => {
  return (
    <AvailabilityWrap>
      <h2>Availability</h2>
      <p className="availability">
        <span className="limited">SEPTEMBER: Limited</span>
        <br />
        <span className="available">OCTOBER: Available</span>
        <br />
        <span className="available">NOVEMBER: Available</span>
        <br />
        <span className="limited">DECEMBER: Limited</span>
        <br />
        <span className="available">JANUARY+: Available</span>
        <br />
      </p>
    </AvailabilityWrap>
  )
}

export default Availability
