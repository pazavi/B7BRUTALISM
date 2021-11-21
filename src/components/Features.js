import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import ImageOne from "../images/B53.jpeg";

const Section = styled.section`
  background: #1c1b1b;
  padding: 10rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  background: #fff;
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm20 0a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 37a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm10-17h20v20H20V20zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14z' fill='%23b6b6b6' fill-opacity='0.19' fill-rule='evenodd'/%3E%3C/svg%3E");

  padding: 3rem 2rem;
  position: relative;
`;

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -15px;
  justify-content: flex-start;
  padding: 1rem;
`;

const Content = styled.div`
  flex: 0 0 50%;

  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 250px;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
    text-transform: uppercase;
    font-weight: 600;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.5;
  }
`;

const ColumnRight = styled.div`
  position: absolute;
  top: -80px;
  right: 0;
  max-width: 850px;
  height: 140%;
  width: 45%;
  padding-left: 1rem;

  @media screen and (max-width: 768px) {
    height: 320px;
    top: -65px;
    width: 80%;
    margin: 0 auto;
    left: -15px;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  @media screen and (max-height: 375px) {
    max-height: 70%;
  }
`;

const Features = () => {
  return (
    <Section>
      <Container>
        <Wrap>
          <ColumnLeft>
            <Content
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-once="false"
              data-aos-anchor-placement="center bottom"
            >
              <h1>Israel's capital of Brutalism</h1>

              <p>
                In recent years, it has been announced that an{" "}
                <a
                  href="https://www.haaretz.com/israel-news/culture/.premium-that-s-not-ugly-that-s-be-er-sheva-brutalism-1.5228748"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  initiative
                </a>{" "}
                is being formulated to promote the heritage of Béton brut
                architecture in Be'er Sheva, which calls for turning the capital
                of the Negev into Israel's capital of Brutalism.
              </p>
              <p>
                Although in the eyes of quite a few, brutalism in its various
                versions will be remembered more as a passing fad than as an
                expression of authentic modernism, the impressive and unique
                collection of Brutalist architectural gems erected in the desert
                city cannot be ignored.
              </p>
              <Button to="/about" primary="true">
                More...
              </Button>
            </Content>
          </ColumnLeft>
          <ColumnRight>
            <Image
              src={ImageOne}
              data-aos="fade-bottom"
              data-aos-duration="1000"
              data-aos-once="false"
              data-aos-anchor-placement="center bottom"
            />
          </ColumnRight>
        </Wrap>
      </Container>
    </Section>
  );
};

export default Features;
