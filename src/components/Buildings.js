import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Button } from "./Button";
import { FaEye } from "react-icons/fa";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 3rem calc((100vw - 1300px) / 2);
  // background: #fff;
  // background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm20 0a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 37a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm10-17h20v20H20V20zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14z' fill='%23b6b6b6' fill-opacity='0.19' fill-rule='evenodd'/%3E%3C/svg%3E");
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem 1rem;
`;

const Heading = styled.div`
  padding: 0rem 1rem;
  text-transform: uppercase;
  text-align: center;
  margin: auto;
  h1 {
    font-size: clamp(1.5rem, 6vw, 2rem);
    font-weight: 400;
  }
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  // padding: 1rem 0rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const InfoWrap = styled.div`
  padding: 0rem 1rem;
  // min-height: 350px;
  height: 100%;
  margin: auto;

  h2 {
    margin-bottom: 1rem;
    font-size: 1rem;
    color: #1c1b1b;

    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    // margin-bottom: 1rem;
    // background-color: rgba(205, 133, 63, 0.8);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const InfoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000d1a;
  width: 140px;

  transition: 0.3s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 10px;
`;

const Buildings = () => {
  return (
    <Section>
      <Container>
        <Heading>
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            Points of Interest
          </h1>
          <div>
            <FaEye size="4rem" color="#cd853f" />{" "}
          </div>
        </Heading>
        <InfoRow>
          <InfoWrap
            data-aos="zoom-out-up"
            data-aos-duration="1200"
            data-aos-once="false"
            data-aos-anchor-placement="center bottom"
          >
            <Image
              src="https://res.cloudinary.com/ddgevj2yp/image/upload/v1626703433/B31_s9h59q.jpg"
              alt="poi"
            />
            <InfoLink style={{ textAlign: "center", marginTop: "-4.6rem" }}>
              <Button to="/orot-cinema" primary="true">
                {/* <p>View Details</p> */}
                <FaEye size="25px" />
                <Arrow size="25px" />
              </Button>
            </InfoLink>
            <h2>Orot Cinema</h2>
          </InfoWrap>

          <InfoWrap
            data-aos="zoom-out-up"
            data-aos-duration="1200"
            data-aos-once="false"
            data-aos-anchor-placement="center bottom"
          >
            <Image
              src="https://res.cloudinary.com/ddgevj2yp/image/upload/v1626703251/B11_tpnl9t.jpg"
              alt="poi"
            />
            <InfoLink style={{ textAlign: "center", marginTop: "-4.6rem" }}>
              <Button to="/negev-brigade-monument" primary="true">
                {/* <p>View Details</p> */}
                <FaEye size="25px" />
                <Arrow size="25px" />
              </Button>
            </InfoLink>
            <h2>Negev Brigade Monument</h2>
          </InfoWrap>
        </InfoRow>
        <InfoRow>
          <InfoWrap
            data-aos="zoom-out-up"
            data-aos-duration="1200"
            data-aos-once="false"
            data-aos-anchor-placement="center bottom"
          >
            <Image
              src="https://res.cloudinary.com/ddgevj2yp/image/upload/v1626704074/PAZ_7961_tf7aas.jpg"
              alt="poi"
            />
            <InfoLink style={{ textAlign: "center", marginTop: "-4.6rem" }}>
              <Button to="/medical-library" primary="true">
                <FaEye size="25px" />
                <Arrow size="25px" />
              </Button>
            </InfoLink>
            <h2>Medical Library</h2>
          </InfoWrap>

          <InfoWrap
            data-aos="zoom-out-up"
            data-aos-duration="1200"
            data-aos-once="false"
            data-aos-anchor-placement="center bottom"
          >
            <Image
              src="https://res.cloudinary.com/ddgevj2yp/image/upload/v1626704299/PAZ_7811_nihzvz.jpg"
              alt="poi"
            />
            <InfoLink style={{ textAlign: "center", marginTop: "-4.6rem" }}>
              <Button to="/yad-lebanim-museum-of-memory" primary="true">
                <FaEye size="25px" />
                <Arrow size="25px" />
              </Button>
            </InfoLink>
            <h2>Yad Lebanim Museum of Memory</h2>
          </InfoWrap>
        </InfoRow>
        <InfoRow>
          <InfoWrap
            data-aos="zoom-out-up"
            data-aos-duration="1200"
            data-aos-once="false"
            data-aos-anchor-placement="center bottom"
          >
            <Image
              src="https://res.cloudinary.com/ddgevj2yp/image/upload/v1626704872/PAZ_7848_kdzkdv.jpg"
              alt="poi"
            />
            <InfoLink style={{ textAlign: "center", marginTop: "-4.6rem" }}>
              <Button to="/drawer-tower" primary="true">
                <FaEye size="25px" />
                <Arrow size="25px" />
              </Button>
            </InfoLink>

            <h2>"Drawer Tower" Residential Building</h2>
          </InfoWrap>

          <InfoWrap
            data-aos="zoom-out-up"
            data-aos-duration="1200"
            data-aos-once="false"
            data-aos-anchor-placement="center bottom"
          >
            <Image
              src="https://res.cloudinary.com/ddgevj2yp/image/upload/v1626705313/PAZ_7818_1_a8mnm3.jpg"
              alt="poi"
            />
            <InfoLink style={{ textAlign: "center", marginTop: "-4.6rem" }}>
              <Button to="/beersheba-city-hall" primary="true">
                <FaEye size="25px" />
                <Arrow size="25px" />
              </Button>
            </InfoLink>
            <h2>Beersheba City Hall</h2>
          </InfoWrap>
        </InfoRow>
      </Container>
    </Section>
  );
};

export default Buildings;
