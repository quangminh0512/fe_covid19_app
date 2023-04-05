import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import TotalCaseCard from "../../components/TotalCaseCard";
import { CountryCaseTable } from "./CountryCaseTable";
import { SelectValueBox } from "../../components/SelectValueBox";
import { FaDotCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { Button } from "@mui/material";
import { Chart } from "./Chart";

const View = () => {
  const ApiGlobalCase = import.meta.env.VITE_GLOBAL_CASE;
  const ApiCountry = import.meta.env.VITE_COUNTRY;
  const ApiCountryCase = import.meta.env.VITE_COUNTRY_CASE;
  const ApiNewConfirm = import.meta.env.VITE_COUNTRY_NEWCONFIRMED;

  const [dataGlobal, setDataGlobal] = useState<any>(null);
  const [countryInfo, setCountryInfo] = useState<any>(null);
  const [newConfirm, setNewConfirm] = useState<any>(null);
  const [countryCase, setCountryCase] = useState<any>(null);

  // call api global case
  useEffect(() => {
    axios
      .get(ApiGlobalCase)
      .then((res) => {
        setDataGlobal(res.data);
      })
      .catch((err) => console.log({ err }));
  }, [setDataGlobal]);

  // call api country info
  useEffect(() => {
    axios
      .get(ApiCountry)
      .then((res) => {
        setCountryInfo(res.data);
      })
      .catch((err) => console.log({ err }));
  }, [setCountryInfo]);

  // call api country newconfirmed
  useEffect(() => {
    axios
      .get(ApiNewConfirm)
      .then((res) => {
        setNewConfirm(res.data);
      })
      .catch((err) => console.log({ err }));
  }, [setNewConfirm]);

  // call api country case
  useEffect(() => {
    axios
      .get(ApiCountryCase)
      .then((res) => {
        setCountryCase(res.data);
      })
      .catch((err) => console.log({ err }));
  }, [setCountryCase]);

  const [countryDailyCase, setCountryDailyCase] = useState("");
  const [caseValue, setCaseValue] = useState(0);

  const [countryNewConfirmed, setCountryNewConfirmed] = useState("");
  const [newconfirmedValue, setNewconfirmedValue] = useState(0);

  useEffect(() => {
    const topConfirm = countryCase?.map((x: any) => {
      return {
        Country: x.Country,
        Cases: x.Cases,
      };
    });

    topConfirm?.sort((a: any, b: any) => {
      return b.Cases - a.Cases;
    });

    setCountryDailyCase(
      topConfirm
        ?.map((x: any) => {
          return x.Country;
        })
        ?.slice(0, 10)
    );

    setCaseValue(
      topConfirm
        ?.map((x: any) => {
          return x.Cases;
        })
        ?.slice(0, 10)
    );
  }, [countryCase]);

  useEffect(() => {
    const topNewConfirmed = newConfirm?.map((x: any) => {
      return {
        Country: x.Country,
        NewConfirmed: x.NewConfirmed,
      };
    });

    topNewConfirmed?.sort((a: any, b: any) => {
      return b.NewConfirmed - a.NewConfirmed;
    });

    setCountryNewConfirmed(
      topNewConfirmed
        ?.map((x: any) => {
          return x.Country;
        })
        ?.slice(0, 10)
    );

    setNewconfirmedValue(
      topNewConfirmed
        ?.map((x: any) => {
          return x.NewConfirmed;
        })
        ?.slice(0, 10)
    );

  }, [newConfirm]);

  return (
    <>
      <div className="w-full xl:flex xl:flex-col">
        <div className="w-full flex flex-col">
          <div className="flex-1 justify-start bg-white border rounded-lg p-4 mt-3 md:mr-3 md:max-h-52">
            <h3 className="text-xl text-blue-500">View</h3>

            <div className="md:flex w-full">
              <div className="md:w-4/12 w-full mb-2 md:pr-2">
                <div className="md:flex-1 bg-slate-100 rounded-lg pt-2 px-2 pb-6">
                  <div className="flex items-center">
                    <FaDotCircle className="animate-ping text-red-500 h-3 w-3" />
                    <h4 className="font-bold text-red-500 pl-2">LIVE</h4>
                    <Link
                      to={"/analysis"}
                      className="text-blue-500 flex flex-1 justify-end underline underline-offset-2"
                    >
                      View Detail
                    </Link>
                  </div>

                  <span className="flex flex-1">Filter by country</span>
                  <SelectValueBox
                    data={countryInfo}
                    selected={undefined}
                    setSelected={undefined}
                  />
                </div>
              </div>

              <div className="md:w-10/12 w-full">
                <div className="flex flex-1 space-x-1 pb-1">
                  <TotalCaseCard
                    title="NewRecovered"
                    data={dataGlobal?.map((x: any) =>
                      x.NewRecovered.toLocaleString()
                    )}
                    isRecovered={true}
                  />

                  <TotalCaseCard
                    title="NewConfirmed"
                    data={dataGlobal?.map((x: any) =>
                      x.NewConfirmed.toLocaleString()
                    )}
                    isConfirmed={true}
                  />

                  <TotalCaseCard
                    title="NewDeaths"
                    data={dataGlobal?.map((x: any) =>
                      x.NewDeaths.toLocaleString()
                    )}
                  />
                </div>

                <div className="flex flex-1 space-x-1">
                  <TotalCaseCard
                    title="TotalRecovered"
                    data={dataGlobal?.map((x: any) =>
                      x.TotalRecovered.toLocaleString()
                    )}
                    isRecovered={true}
                  />

                  <TotalCaseCard
                    title="TotalConfirmed"
                    data={dataGlobal?.map((x: any) =>
                      x.TotalConfirmed.toLocaleString()
                    )}
                    isConfirmed={true}
                  />
                  <TotalCaseCard
                    title="TotalDeaths"
                    data={dataGlobal?.map((x: any) =>
                      x.TotalDeaths.toLocaleString()
                    )}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-white border rounded-lg p-4 mt-3 md:mr-3">
            <div className="md:w-full md:flex">
              <div className="md:w-1/2 flex-1 ml-2">
                <Chart
                  labels={countryDailyCase}
                  labelText={"Number of infections"}
                  text={"Top countries with daily new cases"}
                  data={caseValue}
                />
              </div>
              <div className="md:w-1/12 flex-1 ml-2">
                <Chart
                  labels={countryNewConfirmed}
                  labelText={"Number of infections"}
                  text={"Top countries with daily new confirmed"}
                  data={newconfirmedValue}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-white border rounded-lg p-4 mt-3 md:mr-3">
          <CountryCaseTable data={countryCase} />
        </div>
      </div>
    </>
  );
};

export default View;
