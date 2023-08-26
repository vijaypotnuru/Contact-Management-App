import React from "react";
import { useQuery } from "@tanstack/react-query";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import { Icon } from "leaflet";

import markerIcon from "../assets/location-icon-png-4225.png";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function CasesMap() {
  const { data, isLoading } = useQuery(["countriesData"], async () => {
    const response = await axios.get(
      "https://disease.sh/v3/covid-19/countries"
    );
    return response;
  });

  const countriesData = data?.data;

  if (isLoading) {
    return <h1 className="text-violet-600 mb-4 font-bold text-2xl">Loading...</h1>
  }

  const customMakerIcon = new Icon({
    iconUrl: markerIcon,
    iconSize: [20, 25],
    iconAnchor: [15, 30],
  });

  return (
    <div className="w-11/12 ">
      <h1 className="text-4xl portrait:text-lg font-bold mb-4 mt-4 text-violet-500">
        Corona Cases World Map:
      </h1>
      <div className="border-2 border-violet-500 w-full h-96 m-auto 5 auto 5">
        <MapContainer
          className="m-auto h-full"
          bounds={[
            [-60, -180],
            [85, 180],
          ]}
          zoom={3}
          center={[20, 40]}
          scrollWheelZoom={true}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          />
          <div>
            {countriesData?.map((country: any) => {
              return (
                <Marker
                  icon={customMakerIcon}
                  key={country.countryInfo._id}
                  position={[country.countryInfo.lat, country.countryInfo.long]}
                >
                  <Popup>
                    <div className="flex flex-col justify-center items-center">
                      <img
                        src={country.countryInfo.flag}
                        alt={country.country}
                        className="w-20 h-10"
                      />
                      <h1 className="text-lg font-bold">{country.country}</h1>
                      <h1 className="text-lg font-bold">
                        Cases: {country.cases}
                      </h1>
                      <h1 className="text-lg font-bold">
                        Deaths: {country.deaths}
                      </h1>
                      <h1 className="text-lg font-bold">
                        Recovered: {country.recovered}
                      </h1>
                    </div>
                  </Popup>
                </Marker>
              );
            })}
          </div>
        </MapContainer>
      </div>
    </div>
  );
}

export default CasesMap;
