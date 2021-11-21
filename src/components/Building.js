import React from "react";
import styled from "styled-components/macro";
import { Link, useLocation } from "react-router-dom";
import { SliderData } from "../data/SliderData";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 5rem 1rem;
`;

const Heading = styled.div`
  font-size: 1.5rem;
  //   padding: 0rem 1rem;
  margin-bottom: 40px;
  text-transform: uppercase;

  h1 {
    font-size: clamp(1.5rem, 6vw, 2rem);
    font-weight: 400;
  }
  h3 {
    font-size: clamp(1rem, 3vw, 1.5rem);
    font-weight: 400;
    margin-top: 1rem;
  }

  p {
    font-size: clamp(1rem, 3vw, 1rem);
    margin-top: 1rem;
    text-transform: none;
    line-height: 1.4;
  }

  @media screen and (max-width: 768px) {
    text-align: start;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 1300px;
  max-height: 867px;
  object-fit: cover;
  margin-bottom: 1rem;
`;
const InfoLink = styled(Link)`
  text-decoration: none;
  color: #000d1a;
  // width: 140px;

  transition: 0.4s ease-in-out;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
`;

// const DescWrap = styled.div`
//   column-count: 3;
//   column-gap: 30px;
// `;

const Paragraph = styled.p`
  font-size: 1rem !important;
`;

const Building = () => {
  const location = useLocation();
  const building = SliderData.filter(
    (item) => item.path === location.pathname
  )[0];
  const otherBuildings = SliderData.filter(
    (item) => item.path !== location.pathname
  );

  return (
    <Section>
      <Container>
        <div>
          {otherBuildings.map((item) => {
            return (
              <InfoLink to={item.path}>
                <Image
                  src={item.image2}
                  alt="poi"
                  style={{
                    width: "60px",
                    marginRight: "1.2rem",
                    cursor: "pointer",
                  }}
                />
              </InfoLink>
            );
          })}
        </div>
        {building.image2 && <Image src={building.image2} alt="poi" />}
        <Heading>
          <h1
            data-aos="fade-top"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            {building.title}
          </h1>
          <h3
            data-aos="fade-top"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
            style={{ marginBottom: "20px" }}
          >
            {building.architect}
          </h3>

          <a
            href={`https://waze.com/ul?ll=${building.lat},${building.lng}&navigate=yes`}
            target="_blank"
            rel="noreferrer"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="false"
            data-aos-anchor-placement="center bottom"
          >
            <img
              src="https://image.flaticon.com/icons/png/512/732/732257.png"
              alt="waze logo"
              style={{
                width: "35px",
                margin: "auto",
              }}
            />
            {/* <p>Get there with Waze</p> */}
          </a>

          {building.desc &&
            building.desc.map((p) => {
              return (
                <Paragraph
                  data-aos="fade-top"
                  data-aos-duration="1000"
                  data-aos-once="false"
                  data-aos-anchor-placement="center bottom"
                >
                  {p}
                </Paragraph>
              );
            })}
        </Heading>
        {building.sliderImages && (
          <Carousel
            images={building.sliderImages}
            isLoop={true}
            style={{ height: 800, width: "100%", marginBottom: "2rem" }}
          />
        )}
      </Container>
    </Section>
  );
};

export default Building;
