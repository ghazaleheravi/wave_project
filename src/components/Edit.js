import React, { useState } from "react";
import Countries from "./Countries";

function Edit(props) {
  
  const initalValues = {
    name:'',
    email:'',
    channel:'',
    address:'',
    postal:'',
    country:'',
    province:'',
  };

  const [values, setValues] = useState(initalValues);

  function handleChange(e) {
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
      province:values.province
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

      <Countries setValues={setValues} values={values} />

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