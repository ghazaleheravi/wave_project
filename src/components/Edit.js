import React, { useState } from "react";
//import Countries from "./Countries";
import { getCountry } from '../middlewares/getCountries';

function Edit(props) {
  
  const [isSelceted, setIsSelected] = useState(false);
  const [country, setCountry] = useState('');
  const [province, setProvince] = useState([]);
  
  const initalValues = {
    name: props.data.name,
    email:props.data.email,
    channel:'',
    address:'',
    postal:'',
    country:'',
    province:'',
  };
  const [values, setValues] = useState(initalValues);
  
  const data = getCountry();

  const countries = data.map(item => item.country)

  console.log(data);
  let provinces = []
  data.forEach(item => {
    if (country && item.country === country) {
      provinces.push(item.provinces)
    }
  }) 
  console.log(provinces)
 

  function handleChange(e) {
    setIsSelected(true);
    setCountry(e.target.value);
    

    const {name, value} = e.target;
    setValues({
      ...values,
      [name]: value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log({
      name:values.name,
      email:values.email,
      channel:values.channel,
      address:values.address,
      postal:values.postal,
      country:values.country,
      province:values.province,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor={props.data.id} className="nameLabel">Name</label>
      <input 
        id={props.data.id} 
        className="nameInput"
        value={values.name} 
        type="text"
        required
        name="name"
        onChange={handleChange}>
      </input>

      <label htmlFor={props.data.id} className="emailLabel">Email</label>
      <input 
        id={props.data.id} 
        className="emailInput"
        value={values.email} 
        type="email"
        required
        name="email"
        onChange={handleChange}>
      </input>

      <select 
        id={props.data.id} 
        value={values.channel}
        name="channel"
        onChange={handleChange} 
        className="ChannelLabel" 
        required>
        <option value="">Channel</option>
        <option value={values.website} name="website">website</option>
        <option value={values.email} name="email">email</option>
        <option value={values.phone} name="phone">phone</option>
        <option value={values.word} name="word">word-of-mouth</option>
        <option value={values.other} name="other">other</option>
      </select>

      <label htmlFor={props.data.id} className="addressLabel">Address</label>
      <input 
        id={props.data.id} 
        className="addressInput"
        value={values.address} 
        required
        name="address"
        onChange={handleChange}>
      </input>
    
      <label htmlFor={props.data.id} className="postalLabel">Postal</label>
      <input 
        id={props.data.id} 
        className="postalInput"
        value={values.postal} 
        required
        name="postal"
        onChange={handleChange}>
      </input>

       <select 
        id="country" 
        value={values.country}
        name="country"
        onChange={handleChange} 
        className="country_menu" 
        required>
        <option value="">Country</option>
        {countries.map(item => (<option value={values.item} name={item} key={item}>{item}</option>))}
      </select>
      
      <select 
        id="province"
        value={values.province}
        name="province"
        onChange={handleChange}
        className="province_menu"
        disabled={!isSelceted}
        >
        <option value="">Province, State,...</option> 
        {provinces.map((prov, idx) => (<option value={values.prov} name={prov} key={idx}>{prov}</option>))}
      </select>  

      <button 
        type="button"
        className="cancel_btn"
        onClick={() => props.setEditing(false)}
        >Cancel
      </button>  

      <button
        type="submit"
        className="save_btn"
        >Save
      </button>
    </form>
  );
}

export default Edit;

/* const provinces = data.map(item => {
  if (country && item.country === country) {
    return item.provinces.map((prov) => prov)
  }

   {provinces.map((item, idx) => (<option value={values.item} name={item} key={idx}>{item}</option>))}
})*/