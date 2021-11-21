import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import { InfoData, InfoDataTwo } from "../data/InfoData";
import { SliderData } from "../data/SliderData";

import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import { MarkersData } from "../data/MarkersData";
import mapStyles from "../mapStyles";
import Poi from "../components/Poi";
import Features from "../components/Features";
import { useState } from "react";

function Map() {
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 31.254949, lng: 34.795977 }}
      defaultOptions={{ styles: mapStyles }}
    >
      {MarkersData.map((building) => (
        <Marker
          key={building.id}
          position={{ lat: building.lat, lng: building.lng }}
          onClick={() => {
            setSelectedBuilding(building);
          }}
          icon={{
            url: "https://image.flaticon.com/icons/png/512/1009/1009242.png",
            scaledSize: new window.google.maps.Size(35, 35),
          }}
        />
      ))}
      {selectedBuilding && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedBuilding(null);
          }}
          position={{ lat: selectedBuilding.lat, lng: selectedBuilding.lng }}
          zIndex={200}
        >
          <div
            style={{
              textAlign: "center",
              marginLeft: "6%",
              padding: "0px 12px",
              overflowX: "hidden",
            }}
          >
            <a
              href={`https://waze.com/ul?ll=${selectedBuilding.lat},${selectedBuilding.lng}&navigate=yes`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://image.flaticon.com/icons/png/512/732/732257.png"
                alt="waze logo"
                style={{ width: "35px", margin: "auto" }}
              />
            </a>

            <h2
              style={{
                textAlign: "center",
                margin: "auto",
                padding: "10px 2px",
              }}
            >
              {selectedBuilding.title}
            </h2>
            <p
              data-aos-anchor-placement="center top"
              style={{
                textAlign: "center",
                margin: "auto",
                padding: "10px 2px",
              }}
            >
              {selectedBuilding.architect}
            </p>

            <img
              src={selectedBuilding.image}
              alt={selectedBuilding.title}
              data-aos-anchor-placement="center top"
              style={{
                width: "320px",
                margin: "auto",
                padding: "10px 2px",
                overflow: "hidden",
              }}
            />
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));
const Home = () => {
  return (
    <>
      <Hero slides={SliderData} />
      <div
        style={{
          width: "100vw",
          height: "400px",
          marginTop: "50px",
        }}
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-once="false"
        data-aos-delay="3600"
        data-aos-anchor-placement="center bottom"
      >
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>

      <InfoSection {...InfoData} />
      <InfoSection {...InfoDataTwo} />
      <Poi />

      <Features />
    </>
  );
};

export default Home;
