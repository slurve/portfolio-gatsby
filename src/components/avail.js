import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { variable } from "../base/variables"
import { device } from "../base/device"

const AvailabilityWrap = styled.div`
  .availability {
    margin-bottom: 24px;

    p {
      margin: 0 0 2px;
      font-size: 0.95rem;
      font-weight: 700;
    }

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

export default function Availability() {
  return (
    <StaticQuery
      query={graphql`
        query availQuery {
          wp {
            pageBy(uri: "home") {
              home {
                availability
              }
            }
          }
        }
      `}
      render={data => (
        <AvailabilityWrap>
          <h2>Availability</h2>
          <div
            class="availability"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: data.wp.pageBy.home.availability,
            }}
          ></div>
        </AvailabilityWrap>
      )}
    />
  )
}
