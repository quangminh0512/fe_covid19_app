import React from "react";
import { useState } from "react";

const SearchBar = ({ callback }: any) => {
  const [initialVal, setInitialVal] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    callback(initialVal)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={initialVal}
        onChange={(e) => setInitialVal(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
