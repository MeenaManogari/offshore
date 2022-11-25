import React, { useState, useEffect } from "react";
import "./Contactform.css";
const Contactform = () => {
  const initialValues = {
    fullname: "",
    phone: "",
    inquiries: "",
    aboutus: "",
    country: "",
    email: "",
    channel: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [Errors, setErrors] = useState({});
  const [Submitting, setSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formValues));
    setSubmitting(true);
  };
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fullname) {
      errors.fullname = "Name required";
    } else if (values.fullname.length < 3) {
      errors.fullname = "Name must have more than 3 characters";
    }
    if (!values.aboutus) {
      errors.aboutus = "select any option";
    }
    if (!values.phone) {
      errors.phone = "Number required";
    } else if (values.phone.length < 10) {
      errors.phone = "need 10 characters";
    } else if (values.phone.length > 10) {
      errors.phone = "more than 10 characters used";
    }
    if (!values.email) {
      errors.email = "Name required";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }
    if (!values.inquiries) {
      errors.inquiries = "select any pagename";
    }

    if (!values.country) {
      errors.country = "select your country";
    }

    if (!values.channel) {
      errors.channel = "select state";
    }

    if (!values.vehicle) {
      errors.vehicle = "Required";
    }
    return errors;
  };
  useEffect(() => {
    if (Object.keys(Errors).length === 0 && Submitting) {
      console.log(formValues);
    }
  }, [Errors]);
  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <div className="formhead">
          <h2>
            Leave us your contact and we will get back to you the soonest!
          </h2>
        </div>

        <hr />

        <div className="form_columns">
          <div className="form_columnone">
            <div className="form_content">
              <label>
                Full Name <span>*</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                id="inputs"
                name="fullname"
                value={formValues.fullname}
                onChange={handleChange}
              />
              {Errors.fullname}
            </div>
            <div className="form_content">
              {" "}
              <label>
                Phone Number <span>*</span>
              </label>
              <input
                type="text"
                placeholder="Phone Number"
                id="inputs"
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
              />
              {Errors.phone}
            </div>
            <div className="form_content">
              {" "}
              <label>
                Your inquiries <span>*</span>
              </label>
              <select
                id="inputs"
                name="phone"
                value={formValues.inquiries}
                onChange={handleChange}
              >
                <option value="0">Please Select</option>
                <option value="1">Company Formation</option>
                <option value="2">Nominee</option>
                <option value="3">Change Agent</option>
                <option value="4">Company Renewal</option>
                <option value="5">Account Opening Consultancy</option>
                <option value="6">Accounting & Audit</option>
                <option value="7">Merchant Account Online</option>
                <option value="8">Shelf Company</option>
                <option value="9">Servivced Office</option>
                <option value="10">Trademark Registration Service</option>
                <option value="11">Trust & Foundation Service</option>
                <option value="12">Business Licensing</option>
                <option value="13">Company Strike Off</option>
                <option value="14">Others</option>
              </select>
              {Errors.inquiries}
            </div>
            <div className="form_content">
              {" "}
              <label>
                How did you know about us <span>*</span>
              </label>
              <select
                id="inputs"
                name="aboutus"
                value={formValues.aboutus}
                onChange={handleChange}
              >
                <option value="0">Please Select</option>
                <optgroup label="SocialMedia">
                  <option value="15">Facebook</option>
                  <option value="16">Youtube</option>
                  <option value="17">Linkedin</option>
                  <option value="18">Twitter</option>
                </optgroup>
                <optgroup label="Mass Media">
                  <option value="19">Newspaper</option>
                  <option value="20">Television</option>
                </optgroup>
                <optgroup label="Internet">
                  <option value="21">Google search</option>
                  <option value="22">Display ads</option>
                </optgroup>
                <option value="23">Referral</option>
                <option value="others">Others</option>
              </select>
              {Errors.aboutus}
            </div>
            <div className="form_content">
              {" "}
              <label>
                Your Country <span>*</span>
              </label>
              <select
                id="inputs"
                name="country"
                value={formValues.country}
                onChange={handleChange}
              >
                <option value="0">Please Select</option>
                <option value="1">Afghanistan</option>
                <option value="2">Aland Islands</option>
                <option value="3">Albania</option>
                <option value="4">Algeria</option>
                <option value="5">American Samoa</option>
                <option value="6">Andorra</option>
                <option value="7">Angola</option>
                <option value="8">Anguilla</option>
                <option value="9">Antigua and Barbuda</option>
                <option value="10">Argentina</option>
                <option value="11">Armenia</option>
                <option value="12">Aruba</option>
                <option value="13">Australia</option>
                <option value="14">Austria</option>
                <option value="15">Azerbaijan</option>
                <option value="16">Bahrain</option>
                <option value="17">Bangladesh</option>
                <option value="18">Barbodas</option>
                <option value="19">Belarus</option>
                <option value="20">Belgium</option>
                <option value="21">Belize</option>
                <option value="22">Benin</option>
                <option value="23">Bermuda</option>
                <option value="24">Bhutan</option>
                <option value="25">Bolivia</option>
                <option value="26">Bosnia and Herzegovina</option>
                <option value="27">Botswana</option>
                <option value="28">Bouvet Island</option>
                <option value="29">Brazil</option>
                <option value="30">British Virgin Islands</option>
              </select>
              {Errors.country}
            </div>
          </div>
          <div className="form_columntwo">
            <div className="form_content">
              <label>
                Email Address <span>*</span>
              </label>
              <input
                type="email"
                placeholder="Email Address"
                id="inputs"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
              {Errors.email}
            </div>
            <div className="form_content">
              <label>
                Communication Channel <span>*</span>
              </label>
              <select
                id="inputs"
                name="channel"
                value={formValues.channel}
                onChange={handleChange}
              >
                <option value="0">Please Select</option>
                <option value="1">Skype ID</option>
                <option value="2">Signal Number</option>
                <option value="3">WhatsApp Number</option>
                <option value="4">Viber</option>
                <option value="5">WeChat</option>
                <option value="6">Telegram</option>
              </select>
              {Errors.channel}
            </div>
            <div className="form_content">
              <label>Additional Request(s)</label>
              <textarea
                maxLength="3000"
                cols="30"
                rows="10"
                placeholder="Additional Request(s)"
                id="texts"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="formsubmit">
          <button type="submit">Submit</button>
        </div>
        {Object.keys(Errors).length === 0 && Submitting && (
          <span className="success-msg">Applied successfully</span>
        )}
      </form>
    </>
  );
};
export default Contactform;
