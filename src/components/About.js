import React from "react";
import styled from "styled-components";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

const Section = styled.section`
  background: #1c1b1b;
  padding: 2rem 0rem;
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
  h1 {
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
  }
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  margin-bottom: 2rem;
  object-fit: cover;
  @media screen and (max-height: 375px) {
    max-height: 70%;
  }
`;
const sliderImages = [
  {
    src: "https://res.cloudinary.com/ddgevj2yp/image/upload/e_hue:80/v1626704872/PAZ_7848_kdzkdv.jpg",
  },
  {
    src: "https://res.cloudinary.com/ddgevj2yp/image/upload/e_hue:80/v1626703251/B11_tpnl9t.jpg",
  },
  {
    src: "https://res.cloudinary.com/ddgevj2yp/image/upload/e_hue:80/v1626704074/PAZ_7961_tf7aas.jpg",
  },

  {
    src: "https://res.cloudinary.com/ddgevj2yp/image/upload/e_hue:80/v1626703433/B31_s9h59q.jpg",
  },

  {
    src: "https://res.cloudinary.com/ddgevj2yp/image/upload/e_hue:80/v1626705208/PAZ_7818_xvby5u.jpg",
  },
  {
    src: "https://res.cloudinary.com/ddgevj2yp/image/upload/e_hue:80/v1627569628/PAZ_7937_jqm5gk.jpg",
  },
  {
    src: "https://res.cloudinary.com/ddgevj2yp/image/upload/e_hue:80/v1627638110/PAZ_7792_t0woa1.jpg",
  },
  {
    src: "https://res.cloudinary.com/ddgevj2yp/image/upload/e_hue:80/v1627046345/PAZ_8027_1_axaj9f.jpg",
  },
];

function About() {
  return (
    <Section>
      <Container>
        <Wrap>
          <h1>Israel's capital of Brutalism</h1>
          <Image
            src={
              "https://res.cloudinary.com/ddgevj2yp/image/upload/v1628171816/S2a_7_jhwqh5.jpg"
            }
            data-aos="fade-bottom"
            data-aos-duration="1000"
            data-aos-once="false"
            data-aos-anchor-placement="center bottom"
          />

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
            architecture in Be'er Sheva, which calls for turning the capital of
            the Negev into Israel's capital of Brutalism.
          </p>
          <p>
            Although in the eyes of quite a few, brutalism in its various
            versions will be remembered more as a passing fad than as an
            expression of authentic modernism, the impressive and unique
            collection of Brutalist architectural gems erected in the desert
            city cannot be ignored.
          </p>

          <p>
            The young talents of Israeli architecture in the 1950s and 1960s
            left a significant and indelible mark on the urban landscape of
            Be'er Sheva.
          </p>
          <Carousel
            images={sliderImages}
            hasCaptions={true}
            style={{ height: 800, width: "100%", marginBottom: "2rem" }}
          />
          <p>
            None of them came to live in the desert city. They came from Tel
            Aviv to influence the new city, the one that tried to move away from
            ancient Be'er Sheva and invent a renewed Israeli experience with
            European inspiration in the heart of the desert. They tried to
            educate a generation of settlers to live differently: in
            neighborhoods not seen anywhere else in the country, in concrete
            buildings that were the pinnacle of fashion but did not necessarily
            suit the climate, and in groundbreaking models that did not stand
            the test of time.
          </p>
          <p>
            This was perhaps the most fascinating architectural experiment in
            the history of the country. Today, it is not clear which parts of
            this groundbreaking experiment, if any, are considered a success.
          </p>
        </Wrap>
      </Container>
    </Section>
  );
}

export default About;
