import React, { useState } from "react";
import { getCountry } from '../middlewares/getCountries';

function Countries() {
  const [isSelceted, setIsSelected] = useState(false);
  const [country, setCountry] = useState('');
  //const [province, setProvince] = useState([]);
  
  const data = getCountry();

  const countries = data.map(item => 
    <option value={item.country} key={item.id}>
      {item.country}
    </option> 
  )

  const provinces = data.map(item => {
    let provs = null;
    if (country && item.country === country) {
      provs = item.provinces.map((pro, idx) => 
        <option value={pro} key={idx}>
          {pro}
        </option>
        )
      }
    return provs;
  })

  function handleChange(e) {
    setIsSelected(true);
    setCountry(e.target.value);
  } 

  return (
    <div>
      <select 
        id="country" 
        onChange={handleChange} 
        className="country_menu" 
        required>
        <option value="country">Country</option>
        {countries}
      </select>
      
      <select 
        id="province" 
        className="province_menu"
        disabled={!isSelceted}
        required>
        <option value="province">Province, State,...</option> 
        {provinces}
      </select>  
    </div>
  );
}

export default Countries;

