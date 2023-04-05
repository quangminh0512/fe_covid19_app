import React, { useEffect, useState } from "react";
import { TableComp } from "../../components/Table/Table";
import { IColumn } from "../../components/Table/type";
import { CountryCase } from "../../types/countryCaseType";
import { InputAdornment, TextField } from "@mui/material";
import { MdOutlineClear } from "react-icons/md";
import { SelectValueBox } from "../../components/SelectValueBox";

export const CountryCaseTable = ({ data }: { data: any }) => {
  const columns: IColumn<CountryCase>[] = [
    {
      dataCol: "Country",
      name: "Country",
    },
    // {
    //   dataCol: "NewConfirmed",
    //   name: "Newconfirmed",
    // },
    {
      dataCol: "Cases",
      name: "Cases",
      align: "right",
      format: (value: number) => value.toLocaleString(),
    },
    {
      dataCol: "Recovered",
      name: "Recovered",
      align: "right",
      format: (value: number) => value.toLocaleString(),
    },
    {
      dataCol: "Deaths",
      name: "Deaths",
      align: "right",
      format: (value: number) => value.toLocaleString(),
    },
    {
      dataCol: "Active",
      name: "Active",
      align: "right",
      format: (value: number) => value.toLocaleString(),
    },
    {
      dataCol: "Critical",
      name: "Critical",
      align: "right",
      format: (value: number) => value.toLocaleString(),
    },
  ];

  const [searchString, setSearchString] = useState("");

  const onSearch = (e: any) => {
    setSearchString(e.target.value);
  };

  const dataSearch = data?.filter((item: any) =>
    item.Country.toLowerCase().includes(searchString.toLowerCase())
  );

  const onReset = () => {
    setSearchString("");
  };

  return (
    <div className="w-full rounded-lg">
      <div className="">
        <span className="flex flex-1 text-red-500 font-bold">
          Search Country Case
        </span>

        <span className="flex flex-1 text-sm mb-2">
          <TextField
            onChange={onSearch}
            placeholder="Country Name"
            size="small"
            value={searchString}
            InputProps={{
              endAdornment: searchString ? (
                <InputAdornment position="end">
                  <button onClick={onReset}>
                    <MdOutlineClear />
                  </button>
                </InputAdornment>
              ) : null,
            }}
          />
          <SelectValueBox data={dataSearch} selected={searchString} setSelected={setSearchString} />
        </span>
      </div>
      <TableComp columns={columns} data={dataSearch || []} />
    </div>
  );
};
