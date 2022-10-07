import React, { useState, useEffect } from "react";
import "../Styles/AddContact.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const AddContact = (props) => {

  const initialValues = { name: "", email: "", phone: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const add = (e) => {

   
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

   
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      props.addContactHandler(formValues);
      navigate('/');
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phone) {
      errors.phone = "Mobile Number is required!";
    } else if (values.phone.length < 10) {
      errors.phone = "Mobile Number must be 10 digit!";
    } else if (values.phone.length > 10) {
      errors.phone = "Mobile Number can not more than 10 digit!";
    }
    return errors;
  };

  return (
    <div className="ui main">
      <h4 id="add-contact-text">Add Contact</h4>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            value={formValues.name}
            onChange={handleChange}
          />
          <p className="error-massage">{formErrors.name}</p>

          <label htmlFor="phone">Mobile No.</label>
          <input
            id="phone"
            type="text"
            name="phone"
            placeholder="Mobile No."
            value={formValues.phone}
            onChange={handleChange}
          />
          <p className="error-massage">{formErrors.phone}</p>

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            placeholder="email"
            value={formValues.email}
            onChange={handleChange}
          />
          <p className="error-massage">{formErrors.email}</p>
        </div>

        <button id="add-button" className="ui  button ">
          <i id="add-icon" className="icon user"></i>
          Add
        </button>
      </form>
      <Link to="/">
        <button id="contactList-button" className="ui  button ">
          <i id="contactList-icon" className="address card icon"></i>
          ContactList
        </button>
      </Link>
    </div>
  );
};

export default AddContact;
