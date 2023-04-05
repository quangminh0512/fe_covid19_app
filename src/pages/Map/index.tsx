import React, { useEffect, useState } from "react";
import "maplibre-gl/dist/maplibre-gl.css";
import axios from "axios";
import { MapContainer, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { SelectValueBox } from "../../components/SelectValueBox";

const MapPage = () => {
  const ApiCountry = import.meta.env.VITE_COUNTRY;
  const ApiCountryCase = import.meta.env.VITE_COUNTRY_CASE;

  const [countryInfo, setCountryInfo] = useState<any>(null);
  const [countryCase, setCountryCase] = useState<any>(null);

  const [selectedVal, setSelectedVal] = useState<any>(null);

  useEffect(() => {
    axios
      .get(ApiCountry)
      .then((res) => {
        setCountryInfo(res.data);
      })
      .catch((err) => console.log({ err }));
  }, [setCountryInfo]);

  useEffect(() => {
    axios
      .get(ApiCountryCase)
      .then((res) => {
        setCountryCase(res.data);
      })
      .catch((err) => console.log({ err }));
  }, [setCountryCase]);

  console.log({ countryCase });

  return (
    <div className="w-full flex">
      <div className="w-2/12">
        <SelectValueBox
          data={countryInfo}
          selected={selectedVal}
          setSelected={setSelectedVal}
        />
      </div>

      <div className="w-10/12">
        <MapContainer
          style={{ width: "100%", height: "100vh" }}
          zoom={3}
          center={[0, 0]}
          scrollWheelZoom={true}
          fadeAnimation={true}
          markerZoomAnimation={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {selectedVal !== null && (
            <Popup position={[selectedVal?.Latitude, selectedVal?.Longtitude]}>
              <div className="flex flex-1 items-center">
                <div className="object-cover h-10 w-20 flex justify-start">
                  <img crossOrigin="anonymous" src={selectedVal.Flag} />
                </div>

                <div className="flex justify-end pl-1 text-lg font-bold">
                  {selectedVal?.Country}
                </div>
              </div>

              {countryCase?.map((x: any) => {
                if (selectedVal?.Country === x.Country) {
                  return (
                    <div className="my-2">
                      <span className="flex flex-1 text-lg justify-start">
                        Total Cases:
                        <span className="flex flex-1 justify-end">
                          {x.Cases.toLocaleString()}
                        </span>
                      </span>

                      <span className="flex flex-1 text-lg justify-start">
                        Total Recovered:
                        <span className="flex flex-1 justify-end">
                          {x.Recovered.toLocaleString()}
                        </span>
                      </span>

                      <span className="flex flex-1 text-lg justify-start">
                        Total Deaths:
                        <span className="flex flex-1 justify-end">
                          {x.Deaths.toLocaleString()}
                        </span>
                      </span>

                      <span className="flex flex-1 text-lg justify-start">
                        Active:
                        <span className="flex flex-1 justify-end">
                          {x.Active.toLocaleString()}
                        </span>
                      </span>

                      <span className="flex flex-1 text-lg justify-start">
                        Critical:
                        <span className="flex flex-1 justify-end">
                          {x.Critical.toLocaleString()}
                        </span>
                      </span>
                    </div>
                  );
                }
              })}
            </Popup>
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapPage;
