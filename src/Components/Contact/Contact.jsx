import './Contact.css';
import { useState } from 'react';
import mail_icon from '../../assets/mail_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import location_icon from '../../assets/location_icon.svg';

const Contact = () => {
const [formState, setFormState] = useState({
  name: '',
  email: '',
  message: '',
});
const [errorMessage, setErrorMessage] = useState('');

const handleChange = (e) => {
  const { name, value } = e.target;

  if (name === 'email') {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    if (!isValid) {
      setErrorMessage('Your email is invalid.');
    } else {
      setErrorMessage('');
    }
  } else {
    if (!value.length) {
      setErrorMessage(`${name} is required.`);
    } else {
      setErrorMessage('');
    }
  }

  setFormState({ ...formState, [name]: value });
};

    return (
      <div className="contact">
        <div className="contact-title">
          <h1>Let`s Connect</h1>
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <h2>Leave your info</h2>
            <form className="contact-form">
              <label>Your Name:</label>
              <input type="text" name="name" onBlur={handleChange} />
              <br />
              <label>Your Email:</label>
              <input type="email" name="email" onBlur={handleChange} />
              <br />
              <label>Leave a message:</label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                onBlur={handleChange}
              />
              <br />
              {errorMessage && <p>{errorMessage}</p>}
              <button type="submit" className="contact-submit">
                Submit
              </button>
            </form>
          </div>
          <div className="contact-right">
            <h4 className="info-title">My info</h4>
            <div className="info-details">
              <div className="info-detail"></div>
              <img src={mail_icon} alt="" /> <p>ashleighjg@gmail.com</p>
              <div className="info-detail"></div>
              <img src={call_icon} alt="" /> <p>919/919-0000</p>
              <div className="info-detail"></div>
              <img src={location_icon} alt="" /> <p>Durham, North Carolina</p>
            </div>
          </div>
        </div>
      </div>
    );
};
export default Contact;
