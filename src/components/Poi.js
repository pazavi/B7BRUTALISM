import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
// import { FaEye } from "react-icons/fa";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);

  @media screen and (max-width: 768px) {
    margin-top: -7rem;
  }
  @media screen and (max-width: 375px) {
    margin-top: 3rem;
  }
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem 1rem;
`;

const Heading = styled.div`
  // font-size: 1.5rem;
  padding: 0rem 1rem;
  text-transform: uppercase;
  h1 {
    font-size: clamp(1.5rem, 6vw, 2rem);

    font-weight: 400;

    text-align: center;
    // color: white;
    // background-color: #b1b1b1;
    padding: 1rem 0rem;
  }

  @media screen and (max-width: 768px) {
    text-align: start;
  }
`;

const InfoRow = styled.div`
  padding: 1rem 0rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  // align-self: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const InfoWrap = styled.div`
  max-height: 280px;
  margin-bottom: 1.5rem;
  padding: 2rem;
  cursor: pointer;
  transition: 0.5s ease-in-out;

  @media screen and (max-width: 375px) {
    padding: 0.8rem;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 280px;
  max-height: 280px;
  object-fit: cover;
  border-radius: 50%;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 18px 19px 36px -13px rgba(0, 0, 0, 0.66);
    -webkit-box-shadow: 18px 19px 36px -13px rgba(0, 0, 0, 0.66);
    -moz-box-shadow: 18px 19px 36px -13px rgba(0, 0, 0, 0.66);
  }

  
  }
`;

const Poi = () => {
  return (
    <Section>
      <Container>
        <Heading>
          {/* <div style={{ textAlign: "center" }}>
            <FaEye size="4rem" color="#cd853f" />{" "}
          </div> */}
          {/* <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            Points of Interest
          </h1> */}
        </Heading>
        <InfoRow>
          <Link to="/orot-cinema">
            <InfoWrap
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-once="false"
              data-aos-anchor-placement="center bottom"
            >
              <Image
                src="https://res.cloudinary.com/ddgevj2yp/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1626703433/B31_s9h59q.jpg"
                alt="poi"
              />
            </InfoWrap>
          </Link>
          <Link to="/negev-brigade-monument">
            <InfoWrap
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-once="false"
              data-aos-anchor-placement="center bottom"
            >
              <Image
                src="https://res.cloudinary.com/ddgevj2yp/image/upload/ar_1:1,c_fill,g_auto,w_1000/v1626703251/B11_tpnl9t.jpg"
                alt="poi"
              />
            </InfoWrap>
          </Link>
          <Link to="/drawer-tower">
            <InfoWrap
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-once="false"
              data-aos-anchor-placement="center bottom"
            >
              <Image
                src="https://res.cloudinary.com/ddgevj2yp/image/upload/ar_1:1,c_fill,g_auto,w_1000/v1626704872/PAZ_7848_kdzkdv.jpg"
                alt="poi"
              />
            </InfoWrap>
          </Link>
          <Link to="/zalman-aranne-library">
            <InfoWrap
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-once="false"
              data-aos-anchor-placement="center bottom"
            >
              <Image
                src="https://res.cloudinary.com/ddgevj2yp/image/upload/ar_1:1,c_fill,e_auto_saturation,g_auto,w_1000/a_0/v1627046345/PAZ_8027_1_axaj9f.jpg"
                alt="poi"
              />
            </InfoWrap>
          </Link>
        </InfoRow>
      </Container>
    </Section>
  );
};

export default Poi;
