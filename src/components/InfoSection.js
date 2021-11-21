import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 2rem 0rem;
`;

const Container = styled.div`
  padding: 0.5rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  flex-dirction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 25% 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  margin-bottom: ${({ reverse }) => (reverse ? "-0px" : "-4rem")};

  h1 {
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 768px) {
    background-color: #dfdfdf;
    background-image: ${({ reverse }) =>
      reverse
        ? "url(https://res.cloudinary.com/ddgevj2yp/image/upload/o_15/v1628157207/T2_yhezeb.jpg)"
        : "url(https://res.cloudinary.com/ddgevj2yp/image/upload/o_15/v1628157200/T1_lhdgaw.jpg)"};

    background-size: cover;
  }
  @media screen and (max-width: 375px) {
    min-height: 900px;
    margin-top: ${({ reverse }) => (reverse ? "12px" : "0px")};
    background-color: #dfdfdf;
    background-image: ${({ reverse }) =>
      reverse
        ? "url(https://res.cloudinary.com/ddgevj2yp/image/upload/o_15/v1628157207/T2_yhezeb.jpg)"
        : "url(https://res.cloudinary.com/ddgevj2yp/image/upload/o_15/v1628157200/T1_lhdgaw.jpg)"};

    background-size: cover;
  }
`;

const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "1" : "2")};
    align-items: flex-start;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

const InfoSection = ({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  reverse,
  image,
  delay,
}) => {
  return (
    <Section>
      <Container>
        <ColumnLeft
          reverse={reverse}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="false"
          data-aos-delay={delay}
          data-aos-anchor-placement="center bottom"
        >
          <h1>{heading}</h1>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "	flex-start",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              <FacebookShareButton
                url="https://b7brutalism.netlify.app/"
                qoute={heading}
                hashtag="#Brutalism"
              >
                <FacebookIcon
                  size={36}
                  style={{ margin: "5px", borderRadius: "50%" }}
                />
              </FacebookShareButton>

              <TwitterShareButton
                url="https://b7brutalism.netlify.app/"
                title={heading}
                hashtag="#Brutalism"
              >
                <TwitterIcon
                  size={36}
                  style={{ margin: "5px", borderRadius: "50%" }}
                />
              </TwitterShareButton>

              <LinkedinShareButton
                url="https://b7brutalism.netlify.app/"
                title={heading}
                summary={paragraphOne}
                source="B7BRUTALISM"
                F
              >
                <LinkedinIcon
                  size={36}
                  style={{ margin: "5px", borderRadius: "50%" }}
                />
              </LinkedinShareButton>

              <WhatsappShareButton
                url="https://b7brutalism.netlify.app/"
                title={heading}
                hashtag="#Brutalism"
              >
                <WhatsappIcon
                  size={36}
                  style={{ margin: "5px", borderRadius: "50%" }}
                />
              </WhatsappShareButton>
            </div>
          </div>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <Button to="/buildings" primary="true">
            {buttonLabel}
          </Button>
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <img
            src={image}
            alt="building"
            data-aos="zoom-out"
            data-aos-duration="1000"
            data-aos-once="false"
            data-aos-delay={delay}
            data-aos-anchor-placement="center bottom"
          />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InfoSection;
