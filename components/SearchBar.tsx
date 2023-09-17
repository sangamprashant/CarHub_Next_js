"use client"
import React, { useState } from "react";
import { SearchManufacture } from ".";

const SearchBar = () => {
    const [manufacturer, setManufacture] = useState("")
  const handelSearch = () => {};
  return (
    <form action="POST" className="searchbar" onSubmit={handelSearch}>
        <div className="searchbar__item">
            <SearchManufacture
            manufacturer={manufacturer}
            setManufacture={setManufacture}
            />
        </div>
    </form>
  );
};

export default SearchBar;
