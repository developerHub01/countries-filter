import React from "react";
import Country from "./Country";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const Countries = ({ filterdCountries, handleRemoveCountry }) => {
  return (
    <CountriesWrapper>
      {filterdCountries.map((country) => {
        country = { ...country, id: uuidv4() };
        console.log(country);
        return <Country key={country.id} {...country} handleRemoveCountry={handleRemoveCountry} />;
      })}
    </CountriesWrapper>
  );
};

export default Countries;

const CountriesWrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 1080px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;
