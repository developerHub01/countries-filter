import React from "react";

import styled from "styled-components";

const Country = ({
  name: { common: countryName, official: officialName },
  flags: { png: countryFlag }, population, area, handleRemoveCountry
}) => {
  return (
    <CountryWrapper>
      <img src={countryFlag} alt="" />
      <h2>{countryName}</h2>
      <h3>{officialName}</h3>
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <button onClick={()=>handleRemoveCountry(countryName)}>Remove</button>
    </CountryWrapper>
  );
};

export default Country;

const CountryWrapper = styled.div`
  width: 100%;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  border: 2px solid #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  img{
    width: 100%;
  }
  button{
    background: #fff;
    color: #000;
    border: none;
    padding: 8px 20px;
    cursor: pointer;
    font-size: 18px;
  }
`;
