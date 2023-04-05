import React, { useState } from "react";
import { Combobox } from "@headlessui/react";
import { IoIosArrowForward } from "react-icons/io";
import clsx from "clsx";

export const SelectValueBox = ({
  data = [],
  selected,
  setSelected,
}: {
  data: any;
  selected: any;
  setSelected: any;
}) => {

  const [countryName, setChangeCountryName] = useState("");

  const filterCountry =
    countryName === ""
      ? data
      : data.filter((country: any) => {
          return (country.Country?.toLowerCase() && country.Flag).includes(
            countryName.toLowerCase()
          );
      });

  return (
    <Combobox value={selected} onChange={setSelected}>
      {({ open, disabled }) => (
        <>
          <Combobox.Button className="relative">
            <Combobox.Input
              placeholder="Country Name"
              className="md:w-48 w-64 max-w-12 py-2 pl-3 pr-10 text-left transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md cursor-pointer text-sm"
              onChange={(e) => setChangeCountryName(e.target.value)}
              displayValue={() => selected?.Country}
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-slate-500">
              <IoIosArrowForward className={clsx(open && "rotate-90")} />
            </span>
          </Combobox.Button>
          {open && (
            <div>
              <Combobox.Options
                className={
                  "absolute z-1000 mt-1 w-60 bg-white max-h-60 md:w-3/12 w-2/3 overflow-auto rounded-md shadow-dropdown transition-all duration-300 ease-in-out"
                }
              >
                <Combobox.Option
                  value={[]}
                  className="relative py-2 pl-3 text-gray-900 cursor-pointer hover:bg-indigo-600 hover:text-white select-none pr-9 overflow-hidden"
                >
                  Global
                </Combobox.Option>
                {filterCountry?.map((data: any, idx: any) => (
                  <Combobox.Option
                    value={data}
                    key={idx}
                    className="relative py-2 pl-3 text-gray-900 cursor-pointer hover:bg-indigo-600 hover:text-white select-none pr-9 overflow-hidden"
                  >
                    <div className="flex flex-1 items-center">
                      <div className="object-cover h-5 w-10 flex justify-start">
                        <img crossOrigin="anonymous" src={data.Flag} />
                      </div>
                      <div className="flex justify-end pl-4">
                        {data.Country}
                      </div>
                    </div>
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            </div>
          )}
        </>
      )}
    </Combobox>
  );
}
