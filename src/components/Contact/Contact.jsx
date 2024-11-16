import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/chat.png'
import mail_icon from '../../assets/envelope.png'
import phone_icon from '../../assets/phone.png'
import location_icon from '../../assets/location.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "15ffbcc8-d734-4154-b42e-b78293f79dea");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    };

  return (
    <div className='contact'>

      <div className="contact-col col-left">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Have questions or feedback? We'd love to hear from you!  
          Whether it's about our products, your order, or anything else,  
          we're here to help you shop for the freshest and best Nepali groceries with ease.</p>
        <ul>
        <li><img src={mail_icon} alt="" /> contact@hatbazar.np</li>
        <li><img src={phone_icon} alt="" /> +977-9876543212</li>
        <li><img src={location_icon} alt="" />Baluwatar, Kathmandu, Nepal</li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label for='name'>Your Name</label>
            <input type="text" name='name' placeholder='Enter you full name' required/>
            <label for='phone'>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter you phone number' required/>
            <label for='phone'>Write your message here</label>
            <textarea name="message" rows='10' placeholder='Enter you message' required></textarea>
            <button type='submit' className='btn btn-dark submit hover-btn'>Submit <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
