import React from 'react';
import "./Contact.css";
// import { BsFillTelephoneFill } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { GoLocation } from "react-icons/go"

const Contact = () => {
  return (
    <div className='contact-section py-5'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <divv className="heading-wrapper">
              <h1 >Contact Me</h1>
            </divv>
          </div>
          <div className='col-md-6'>
            <form>
              <div className='form-field'>
                <label>Enter Your Name *</label>
                <input type="text" />
              </div>
              <div className='form-field'>
                <label>Enter Your email *</label>
                <input type="email" />
              </div>
              <div className='form-field'>
                <label>Enter Your Subject *</label>
                <input type="text" />
              </div>

              <div className='form-field'>
                <label>Enter Your Message *</label>
                <textarea></textarea>
              </div>
              <a href='mailto:aakashsharma200112@gmail.com' className='send-mail'>SEND MAIL</a>
            </form>
          </div>
          <div className='col-md-6'>
            <div className='d-flex flex-column gap-4 '>
              <div className='d-flex contact-way'>
                <div className='icon-box'>
                  <BsTelephone />
                </div>
                <div >
                  <h4>Phone</h4>
                  <span>9315319520</span>
                </div>
              </div>
              <div className='d-flex contact-way'>
                <div className='icon-box'>
                  <FiMail />
                </div>

                <div >
                  <h4>Email</h4>
                  <a href="mailto:aakashsharma200112@gmail.com">aakashsharma200112@gmail.com</a> <br />
                  <a href="mailto:aakaashsharma57@gmail.com">aakaashsharma57@gmail.com</a>
                </div>
              </div>
              <div className='d-flex contact-way'>
                <div className='icon-box'>
                  <GoLocation />
                </div>
                <div>
                  <h4>Address</h4>
                  <span>I - 289 shiv ram park , Nangloi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact