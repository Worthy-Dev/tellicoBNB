import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styled from 'styled-components';

const ContactUs= () => {
  const [state, handleSubmit] = useForm("mgerzlwl");
  if (state.succeeded) {
      return <ThankYouMessage>Your message has been sent!<br></br> We will respond to your email shortly.</ThankYouMessage>;
  }

  return (
    <Contact>
      <div className="contact-form-container">
        <h2>Contact Us</h2> 
        <p>Call to make a reservation or send us a message and we will contact you shortly. </p>
        <a className="phone" href="tel:+1-865-458-8534">865-458-8534</a>

        <div className="contact-form">
            <form onSubmit={handleSubmit}>
            <label htmlfor="full-name">
                Full Name
            </label>
            <input 
            type="text" 
            name="name" 
            id="full-name" 
            required=""
            />

            <label htmlFor="email">
            Email Address
            </label>
            <input
            id="email"
            type="email" 
            name="email"
            />
            <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            />
            <label htmlfor="service">What service are you interested in?</label>
                <select name="service" id="service" required="">
                <option value="Select" selected="" disabled="">-Select a Service-</option>
                <option value="Boarding">Boarding</option>
                <option value="Daycare">Daycare</option>
                <option value="Grooming">Grooming</option>
                </select>

            <label htmlFor="message">
            Message
            </label>
            <textarea
            id="message"
            name="message"
            rows="4"
            />
            <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
            Send
            </button>
        </form>
      </div>
    </div>
  </Contact>
);
}

const Contact = styled.div`
  color: #595b57;
  display: flex;
  justify-content: center;
  align-items: center;

  .contact-form-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2.5rem;

    h2 {
      padding: 1rem;
      font-size: 2.5rem;
    }
    h2, p{
        text-align: center;
    }
    p{
        margin: 0 1rem 1rem;
    }
  }

  .contact-form{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70%;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  label {
    color: #595b57;
    padding: .4rem 0;
    font-size: 1rem;
  }

  input, textarea, select {
    padding: .4rem;
    border-style: solid;
    border-width: 1px;
  }
  
  button {
  margin: 1.5rem 0;
  width: 40%;
  }

  #service {
      padding: .5rem;
      color: #595b57;
  }

  .phone {
    font-size: 1.5rem;
    margin-bottom: 1.8rem;
    text-align: center;
    font-family: "Oswald", sans-serif;
    text-decoration: none;
  }
`;

const ThankYouMessage = styled.p`
  color: #595b57;
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  margin: 8rem 3rem;
  text-align: center;
`

export default ContactUs
