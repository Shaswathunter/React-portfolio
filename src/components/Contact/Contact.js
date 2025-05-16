import './Contact.css';
import React, { useState } from 'react';

function Contact() {
const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
});
  
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log();
    
    
  };
    return(
        <div className="contact">
            <form className="contact-form" onSubmit={handleSubmit}>
                <h1>Contact Us</h1>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required 
                    value={form.name}
              onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={form.email}
              onChange={handleChange}  />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required value={form.message}
              onChange={handleChange}></textarea>
                </div>
                <button type="submit">Submit</button>
                
            </form>
            <div>
                <div className="form-data">
                   <li> Name : {form.name}</li>
                     <li> Email : {form.email}</li>
                    <li>Message : {form.message}</li>
                </div>
            </div>
        </div>
    )
}
export default Contact;