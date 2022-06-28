import React, { useState } from "react";
import { getCountry } from '../middlewares/getCountries';

function Edit(props) {
  const data = getCountry();
  const [isSelceted, setIsSelected] = useState(false);
  const [country, setCountry] = useState('');
  
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
  
  const countries = data.map(item => item.country)

  let provinces = null;
  data.forEach(item => {
    if (country && item.country === country) {
      provinces = item.provinces
    }
  }) 
  
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
    setValues({
      name:'',
      email:'',
      channel:'',
      address:'',
      postal:'',
      country:'',
      province:'',
    });

    alert('New Information Saved!')
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
      
      <div className="country_province_box">
        <select 
          id={props.data.id} 
          value={values.country}
          name="country"
          onChange={handleChange} 
          className="country_menu" 
          required>
          <option value="">Country</option>
          {countries.map(item => (<option value={values.item} name={item} key={item}>{item}</option>))}
        </select>
        
        <select 
          id={props.data.id}
          value={values.province}
          name="province"
          onChange={handleChange}
          className="province_menu"
          disabled={!isSelceted}
          >
          <option value="">Province, State,...</option> 
          {provinces === null 
            ? <option value=''></option>
            : provinces.map((item, idx) => (<option value={values.item} name={item} key={idx}>{item}</option>))
          }
        </select>  
      </div>
      <div className="cancel_save_btn">   
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
      </div> 
    </form>
  );
}

export default Edit;
