import React, { useState } from "react";
import { ReactDOM } from "react";

const SearchBox = ({
  searchString = "",
  handleChange,
}: {
    searchString: string,
    handleChange: () => void,
}) => {
  // const [seachString, setSearchString] = useState("");

  // const handleChange = (e: any) => {
  //   setSearchString(e.target.value);
  // };

  return (
    <div>
      <input
        type="text"
        placeholder="Search country"
        value={searchString}
        onChange={handleChange}
      />

    </div>
  )

}

export default SearchBox;
