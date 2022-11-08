import React from "react"
import { graphql } from "gatsby"
import { device } from "../base/device"
import { variable } from "../base/variables"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LeadText from "../components/lead-text"

export const contactQuery = graphql`
  {
    wordpress {
      pageBy(uri: "contact") {
        content
        title
      }
    }
  }
`

const ContactForm = styled.div`
  margin-top: 2rem;

  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
  }

  legend {
    display: none;
  }

  p {
    margin-bottom: 2rem;
  }

  input:not([type="submit"]),
  textarea {
    background-image: linear-gradient(
      rgba(163, 163, 167, 0.08),
      rgba(163, 163, 167, 0.16)
    );
    border: 0;
    border-bottom: 4px solid ${variable.colorBorder};
    border-bottom-right-radius: 8px;
    border-right: 4px solid ${variable.colorBorder};
    border-top-left-radius: 8px;
    font-family: ${variable.defaultFont};
    font-size: 1rem;
    outline: none;
    padding: 14px;
    width: 87%;

    @media ${device.large} {
      font-size: 1.3rem;
      padding: 20px;
      width: 98%;
    }
  }

  textarea {
    min-height: 220px;
    resize: none;
  }

  [type="submit"] {
    font-family: ${variable.defaultFont};
    font-size: 1.4rem;
    outline: none;
    padding: 18px 36px;
  }

  input.error-field,
  textarea.error-field {
    border-color: ${variable.colorError};
  }

  input.error-field::-webkit-input-placeholder,
  textarea.error-field::-webkit-input-placeholder {
    color: ${variable.colorError};
  }

  label {
    color: ${variable.colorGray};
    display: block;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 1px;
    padding: 2px 2px 0;
    text-transform: uppercase;
  }

  .error-message {
    color: ${variable.colorError};
  }

  &.thanks form,
  &.thanks p {
    display: none;
  }

  &.thanks .thanks-message {
    display: block;
  }

  .error-message,
  .thanks-message {
    display: none;
  }

  .error-message.active,
  .thanks-message.active {
    color: #f00;
    display: block;
    margin-bottom: 3rem;
  }
`
const contactPage = ({ data }) => {
  const contactTitle = data.wordpress.pageBy.title
  const contactContent = data.wordpress.pageBy.content
  return (
    <Layout type="split" slug="contact">
      <SEO title={contactTitle} />
      <h1>{contactTitle}</h1>
      <LeadText>
        <div dangerouslySetInnerHTML={{ __html: contactContent }} />
      </LeadText>
      <ContactForm>
        <form
          className="contact-form"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <p className="error-message">
            Uh oh. Please fill in the fields below.
          </p>
          <fieldset>
            <legend>Contact form fields</legend>
            <p hidden>
              <label>
                Don't fill this out: <input name="b" />
              </label>
            </p>
            <p>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </p>
            <p>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </p>
            <p>
              <label htmlFor="phone">Phone</label>
              <input type="tel" name="phone" id="phone" />
            </p>
            <p>
              <label htmlFor="website">Website</label>
              <input type="tel" name="website" id="website" />
            </p>
            <p>
              <label htmlFor="description">Brief description of project</label>
              <textarea name="description" id="description"></textarea>
            </p>
            <input type="hidden" name="form-name" value="contact" />
            <input
              type="submit"
              value="Submit"
              className="button button-submit"
            />
          </fieldset>
        </form>
      </ContactForm>
    </Layout>
  )
}

export default contactPage
