import React, { FC, useEffect, useMemo, useState } from "react";
import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";
import { CountryCase } from "../../types/countryCaseType";
import Button from "@mui/material/Button";
import axios from "axios";
import SearchBar from "./SearchBar";

export const Report: FC = () => {
  const baseURL = "http://localhost:8000/api/country_case";

  const [countryCase, setCountryCase] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const checkLoading = () => {
    setIsLoading(isLoading);
  };

  useEffect(() => {
    setIsLoading(isLoading);
    console.log(isLoading);
  }, [isLoading]);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setCountryCase(response.data);
        setIsLoading(true);
      })
      .catch((err) => console.log({ err }));
  }, [setCountryCase]);

  console.log("after loading", isLoading);

  const data = [
    {
      Country: "VN",
    },
    {
      Country: "Thailand",
    },
  ];

  const filter = (search: any) => {
    if (search === "") {
      return acticles;
    }
    return acticles.filter((item: any) => {
      item.Country.toLowerCase().includes(search.toLowerCase());
    });
  };

  const [acticles, setActicles] = useState<any>(data);
  const [search, setSearch] = useState("");

  console.log({ acticles });

  useEffect(() => {
    const filterd = filter(search);
    setActicles(filterd);
  }, [search]);

  const columns = useMemo<MRT_ColumnDef<CountryCase>[]>(
    () => [
      {
        accessorKey: "Country",
        header: "Country",
      },
      {
        accessorKey: "NewConfirmed",
        header: "NewConfirmed",
      },
      {
        accessorKey: "TotalConfirmed",
        header: "TotalConfirmed",
      },
      {
        accessorKey: "NewDeaths",
        header: "NewDeaths",
      },
      {
        accessorKey: "TotalDeaths",
        header: "TotalDeaths",
      },
      {
        accessorKey: "NewRecovered",
        header: "NewRecovered",
      },
      {
        accessorKey: "TotalRecovered",
        header: "TotalRecovered",
      },
    ],
    []
  );

  return (
    <div className="bg-white w-full border rounded-lg mt-4">
      <div className="p-4">
        <div className="mb-4 flex flex-1">
          <h3 className="text-xl text-blue-500">
            Report Covid19 Case All Country
          </h3>
          <div>
            <SearchBar callback={(search: any) => setSearch(search)} />
          </div>
          <div className="flex flex-1 justify-end">
            <Button className="rounded-lg bg-red-800" variant="contained">
              Load New Data
            </Button>
          </div>
        </div>

        <div>
          <h4>test</h4>
          {acticles.map((acticle: any) => (
            <div>{acticle.Country}</div>
          ))}
        </div>

        <MaterialReactTable
          data={acticles || []}
          columns={columns}
          enableColumnActions={false}
          enableColumnFilters={false}
          enablePagination={true}
          enableSorting={false}
          enableBottomToolbar={true}
          enableTopToolbar={false}
        />
      </div>
    </div>
  );
};

export default Report;
