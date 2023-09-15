import React, { useEffect, useState } from "react";
import useFetch from "../CustomHook/useFetch";
import Countries from "./Countries";

const url = "https://restcountries.com/v3.1/all";

const CountryApp = () => {
  const [countries, setCountries] = useState([]);
  const [filterdCountries, setFilterdCountries] = useState([]);
  const { data, isLoading, getError } = useFetch(url);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (data) {
      setCountries((prev) => data);
      setFilterdCountries((prev) => data);
    }
  }, [data]);
  const handleRemoveCountry = (countryName) => {
    setCountries((prev) =>
      prev.filter((country) => country.name.common !== countryName)
    );
  };
  const handleSearch = (e) => {
    setSearchText((prev) => e.target.value);
  };

  useEffect(() => {
    setFilterdCountries((prev) => {
      return countries.filter((country) =>
        country.name.common.toLowerCase().startsWith(searchText.toLowerCase())
      );
    });
  }, [searchText]);
  return (
    <section>
      {isLoading && <p>Data is loading</p>}
      {getError && <p>{getError.message}</p>}
      <input
        type="text"
        placeholder="search"
        onChange={handleSearch}
        value={searchText}
      />
      {countries && (
        <Countries
        filterdCountries={filterdCountries}
          handleRemoveCountry={handleRemoveCountry}
        />
      )}
    </section>
  );
};

export default CountryApp;
