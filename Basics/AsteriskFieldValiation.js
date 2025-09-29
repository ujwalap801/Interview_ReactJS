import React, { useState } from 'react';
import "./styles.css";

function AsteriskFieldValidation() {


  const [formData, setFormData] = useState({ name: '', location: '' });


  const [msg, setMsg] = useState({ name: '', location: '' })
  const [success, setSuccess] = useState('');


  const handleSubmit = (e) => {

    const { name, value } = e.target;
    setFormData((prevFromData)=> ({...prevFromData,[name]:value}))
    }


  const formSubmit = (e) => {
    e.preventDefault();

    let errors = { name: '', location: '' }
    if (formData.name === '') {
      errors.name = "Name is required"
    }

    if (formData.location === '') {
      errors.location = "Location is required"
    }


    setMsg(errors);
    if (!errors.name && !errors.location) {
      setSuccess({ name: formData.name, location: formData.location })

    }

  }


  return (
    <div className="container">
      <h1 className="title">Asterisk Field Validation</h1>

      <form className="form" onSubmit={formSubmit}>
        <div className="input-group">
          <label htmlFor="name" className="label">
            Name <span className="asterisk">*</span>
          </label>
          <input
            id="name"
            className="input"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name} onChange={handleSubmit}
          />

          {msg.name.length > 0 && <p style={{ color: 'red' }}>{msg.name}</p>}
        
        </div>

       

        <div className="input-group">
          <label htmlFor="location" className="label">
            Location <span className="asterisk">*</span>
          </label>
          <input
            value={formData.location}
          onChange={handleSubmit}
            id="location"
            className="input"
            name="location"
            type="text"
            placeholder="Enter your location"
          />

          {msg.location.length > 0 && <p style={{ color: 'red' }}>{msg.location}</p>}
        </div>

   


        <button type="submit" className="submit-button"
        >
          Submit
        </button>
      </form>

{success ?
          <div style={{backgroundColor:'green'}}>
<p>Submitted Successfully</p>
          <p>Name :{success.name}</p>
          <p>Location:{success.location}</p>
          </div> :""}
      

    


    </div>
  );
}

export default AsteriskFieldValidation;