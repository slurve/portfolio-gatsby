import React from "react"
import { graphql } from "gatsby"
import { device } from "../base/device"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const contactQuery = graphql`
  {
    wp {
      pageBy(uri: "contact") {
        content
        title
      }
    }
  }
`

const ContactForm = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  background-color: #ccc;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .lead {
    background-color: orange;
  }

  @media ${device.medium} {
    background-color: #000;
  }
`
const contactPage = ({ data }) => {
  const contactTitle = data.wp.pageBy.title
  const contactContent = data.wp.pageBy.content
  return (
    <Layout slug="contact">
      <SEO title={contactTitle} />
      <h1>{contactTitle}</h1>
      <div dangerouslySetInnerHTML={{ __html: contactContent }} />
      <ContactForm>
        {/* <form
          class="contact-form"
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <p class="error-message">Uh oh. Please fill in the fields below.</p>
          <fieldset>
            <legend>Contact form fields</legend>
            <p>
              <label for="name">Name</label>
              <input type="text" name="name" id="name" />
            </p>
            <p>
              <label for="email">Email</label>
              <input type="email" name="email" id="email" />
            </p>
            <p>
              <label for="phone">Phone</label>
              <input type="tel" name="phone" id="phone" />
            </p>
            <p>
              <label for="website">Website</label>
              <input type="tel" name="website" id="website" />
            </p>
            <p>
              <label for="description">Brief description of project</label>
              <textarea name="description" id="description"></textarea>
            </p>
            <input type="submit" value="Submit" class="button button-submit" />
          </fieldset>
        </form> */}
      </ContactForm>
    </Layout>
  )
}

export default contactPage
