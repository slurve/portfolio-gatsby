import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LeadText from "../components/lead-text"
import Brands from "../components/brands"
import styled, { keyframes } from "styled-components"
import { device } from "../base/device"
import { variable } from "../base/variables"

export const queryProjects = graphql`
  {
    wp {
      pageBy(uri: "projects") {
        content(format: RENDERED)
        title
      }
      projects {
        edges {
          node {
            title
            projectCustom {
              projectSummary
              projectUrl
            }
            slug
            featuredImage {
              sourceUrl
            }
          }
        }
      }
    }
  }
`

const screenHover = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(0, -12px, 0);
  }
`

const Project = styled.div`
  border-bottom: 1px solid ${variable.colorBorder};
  box-shadow: inset 0 -8px 8px -10px ${variable.colorShadow};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 6rem;
  overflow-y: hidden;

  &:first-child {
    margin-top: 6rem;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media ${device.large} {
    align-items: center;
    flex-direction: row;

    &:nth-child(2n) {
      .project-screen {
        order: 2;
      }

      .project-details {
        order: 1;
      }
    }
  }

  @media ${device.jumbo} {
    align-items: flex-end;
  }

  .project-screen {
    order: 2;
    position: relative;
    text-align: center;

    @media ${device.large} {
      flex: 1 1 50%;
      order: 1;
    }

    img {
      box-shadow: 0 0 19px 0 ${variable.colorShadow};
      display: block;
      margin: 0 auto -20px;
      max-width: 300px;

      @media ${device.medium} {
        margin: 0 auto;
        max-width: 400px;
      }

      @media ${device.large} {
        &:hover {
          animation-delay: 0;
          animation-duration: 0.4s;
          animation-fill-mode: both;
          animation-name: ${screenHover};
          animation-timing-function: cubic-bezier(0.66, 0.01, 0.82, 0.96) 0.4s;
        }
      }

      @media ${device.jumbo} {
        bottom: -40px;
        left: 10%;
        max-width: 500px;
        position: absolute;
      }
    }
  }

  .project-details {
    align-items: center;
    display: flex;
    justify-content: center;
    order: 1;

    @media ${device.large} {
      flex: 1 1 50%;
      line-height: 1.9rem;
      order: 2;
    }

    div {
      padding-bottom: 2rem;
      width: 100%;

      @media ${device.medium} {
        padding: 4rem;
      }
    }

    h2 {
      font-size: 1.8rem;
      font-weight: 700;
      margin-bottom: 0.4rem;
    }

    h3 {
      color: ${variable.colorGray};
      font-size: 0.9rem;
      font-weight: 500;
      margin-bottom: 1rem;

      @media ${device.medium} {
        margin-bottom: 1.8rem;
      }
    }

    p {
      color: ${variable.colorGray};
    }
  }
`

const projectsPage = ({ data }) => {
  const projectsTitle = data.wp.pageBy.title
  const projectsLead = data.wp.pageBy.content
  const projects = data.wp.projects.edges
  return (
    <Layout slug="projects">
      <SEO title={projectsTitle} />
      <h1>{projectsTitle}</h1>
      <LeadText>
        <div dangerouslySetInnerHTML={{ __html: projectsLead }} />
      </LeadText>
      <Brands />
      {projects.map(project => {
        const projectTitle = project.node.title
        const projectSlug = project.node.slug
        const projectSummary = project.node.projectCustom.projectSummary
        const projectUrl = project.node.projectCustom.projectUrl
        const projectScreen = project.node.featuredImage.sourceUrl
        return (
          <Project key={projectSlug}>
            <div className="project-screen">
              <a rel="noopener noreferrer" target="_blank" href={projectUrl}>
                <img src={projectScreen} alt="Screenshot of {projectTitle}" />
              </a>
            </div>
            <div className="project-details">
              <div>
                <h2>{projectTitle}</h2>
                <h3>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={projectUrl}
                  >
                    {projectUrl}
                  </a>
                </h3>
                <span dangerouslySetInnerHTML={{ __html: projectSummary }} />
              </div>
            </div>
          </Project>
        )
      })}
    </Layout>
  )
}

export default projectsPage
