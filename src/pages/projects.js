import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { device } from "../base/device"

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
            }
          }
        }
      }
    }
  }
`

const LeadText = styled.div`
  font-size: 2rem;
`

const Project = styled.div`
  background-color: #ccc;

  @media ${device.medium} {
    background-color: #eee;
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
      {projects.map(project => {
        const projectTitle = project.node.title
        const projectSummary = project.node.projectCustom.projectSummary
        return (
          <Project>
            <h2>{projectTitle}</h2>
            <div dangerouslySetInnerHTML={{ __html: projectSummary }} />
          </Project>
        )
      })}
    </Layout>
  )
}

export default projectsPage
