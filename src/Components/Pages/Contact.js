import React from 'react'
import Footer from '../Footer/Footer'
import './Contact.css'

function Contact() {
  return (
    <div className="conbody">
      <div class="contact container">
        <form action="https://formspree.io/f/maykevpe" method="POST">
          <div class="form">
            <div class="form-txt">
              <h1>Contact Us</h1>
              <span>As you might expect of a company that began as a high-end interiors contractor, we pay strict
                attention.</span>
              <h3>USA</h3>
              <p>195 E Parker Square Dr, Parker, CO 801 +43 982-314-0958</p>
              <h3>Los Angeles</h3>
              <p>Palo Alto 12234 || newel Road</p>
            </div>
            <div class="form-details">
              <input type="text" name="name" id="name" placeholder="Name" required />
                <input type="email" name="email" id="email" placeholder="Email" required />
                  <textarea name="message" id="message" cols="52" rows="7" placeholder="Message" required></textarea>
                  <button class="mybtn conbtn">SEND MESSAGE</button>
                  </div>
            </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Contact;