import React from "react";
import styled, { css } from "styled-components/macro";
import { useLocation } from "react-router-dom";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Section = styled.section`
  background: #1c1b1b;
  color: #c6c6c6;
  width: 100%;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem 2rem;
`;

const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 1rem 0rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Quote = styled.div`
  flex: 1;
  margin-top: 2rem;
  // padding: 3rem 0rem;

  h3 {
    font-family: "Audiowide", cursive;
    font-size: 20px;
    font-size: clamp(1rem, 8vw, 1.5rem);
    text-transform: uppercase;
    font-weight: 300;
    @media screen and (max-width: 768px) {
      margin-top: -8rem;
      font-size: clamp(1rem, 3vw, 1.2rem);
    }
  }
`;

const FooterInfo = styled.div`
  padding: 2rem;
  line-height: 2;
  display: flex;
  flex-direction: column;

  a {
    color: #c6c6c6;

    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 0rem;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  padding: 2rem 0rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  width: 50%;

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
    width: 100%;
  }
`;

const Icons = css`
  font-size: clamp(1rem, 6vw, 2rem);
  margin-right: 1.5rem;
  color: #cd853f;
`;

const Instagram = styled(FaInstagram)`
  ${Icons}
`;

const Facebook = styled(FaFacebookF)`
  ${Icons}
`;

const LinkedIn = styled(FaLinkedinIn)`
  ${Icons}
`;

const Youtube = styled(FaYoutube)`
  ${Icons}
`;

// const Contact = styled.div`
//   width: 50%;
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;

//   @media screen and (max-width: 768px) {
//     width: 100%;
//     justify-content: flex-start;
//   }
// `;

const Footer = () => {
  const location = useLocation();
  let style = {
    padding:
      location.pathname === "/"
        ? "0rem calc((100vw - 1300px) / 2)"
        : "5rem calc((100vw - 1300px) / 2)",
  };
  return (
    <Section style={style}>
      <Container>
        <FooterTop>
          <Quote>
            <h3>B7BRUTALISM</h3>
          </Quote>
          <FooterInfo>
            <h4>Read More</h4>
            <a
              href="https://www.archdaily.com/954346/beersheba-brutalist-architecture-in-the-middle-of-the-desert"
              rel="noopener noreferrer"
              target="_blank"
            >
              ArchDaily
            </a>
            <a
              href="https://www.haaretz.com/israel-news/culture/.premium-that-s-not-ugly-that-s-be-er-sheva-brutalism-1.5228748"
              rel="noopener noreferrer"
              target="_blank"
            >
              Haaretz
            </a>
            <a
              href="https://www.designboom.com/architecture/beer-sheva-israels-brutalist-city-stefano-perego-06-22-2020/"
              rel="noopener noreferrer"
              target="_blank"
            >
              designboom
            </a>
          </FooterInfo>
          <FooterInfo>
            <h4>B7</h4>
            <a
              href="https://www.beer-sheva.muni.il/Eng/Pages/default.aspx"
              rel="noopener noreferrer"
              target="_blank"
            >
              City of Beer Sheva
            </a>
            <a
              href="https://in.bgu.ac.il/en/pages/default.aspx"
              rel="noopener noreferrer"
              target="_blank"
            >
              Ben-Gurion University of the Negev
            </a>
            <a
              href="http://negev-museum.org.il/exhibition/dreaming-in-concrete-the-style-that-built-beer-sheva/?lang=en"
              rel="noopener noreferrer"
              target="_blank"
            >
              The Negev Museum of Art
            </a>
          </FooterInfo>
        </FooterTop>
        <FooterBottom>
          <SocialIcons>
            <a
              href="//www.google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Youtube />
            </a>
            <a
              href="//www.google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Instagram />
            </a>
            <a
              href="//www.google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Facebook />
            </a>
            <a
              href="//www.google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <LinkedIn />
            </a>
          </SocialIcons>
          {/* <Contact>
            <Button to="/homes">
              Let's Chat <IoMdArrowRoundForward />
            </Button>
          </Contact> */}
        </FooterBottom>
        <div>
          {/* <p>
            Made with {""} <FaHeart style={{ color: "#07abf1" }} />
            {""} by
          </p> */}
          <a
            href="https://www.dynamic-juice.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/ddgevj2yp/image/upload/c_scale,e_blackwhite,w_120/v1619252612/dyji4_va32ll.png"
              alt="LogoFooter"
              style={{ padding: "0.5rem 0rem", opacity: "0.6" }}
            />
          </a>
          <p style={{ fontSize: "12px" }}>
            &copy;
            {new Date().getFullYear()}&nbsp; | All Rights Reserved
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default Footer;
