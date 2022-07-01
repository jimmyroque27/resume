import React, { useRef } from 'react';
import '../../App.css';
import emailjs from '@emailjs/browser';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import ViewSection from '../ViewSection';




export const ContactUs = () => {
  const form = useRef();
  const MySwal = withReactContent(Swal)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tp6wwrl', 'template_5vq77h7', form.current, 'Qa98Cs0K9vDYNmNig')
      .then((result) => {
         
   
            MySwal.fire({
       
              position: 'top-end',
              icon: 'success',
              title: 'E-mail Sent... Successful!!!',
              showConfirmButton: false,
              timer: 2500
            })
    
           
      }, (error) => {
          MySwal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.text,
            footer: 'If errors again, screenshot this error message and send to your developer...',
            timer: 2500
          })
   
      });
  };

  return (
    <ViewSection 
    src='/videos/video-3.mp4'
    title='CONTACT'
    caption = 'JIMMY R. SANTOS'
    btn1 = {false}
    btn1name = 'FREELANCE JOB'
    btn1link = '/contactus'
    btn2 = {false}
    btn2name = 'Request for Quotation'
    btn2link = '/contactus'
    listtitle ='Contact Us'
    listall= {[{id:1,title:
         
    <div className="row contactus">
 
          { /* <!-- contact form --> */}
          <form ref={form} onSubmit={sendEmail}>
             
                
                
                  {/* <!-- name --> */}
                  <div className="form-group">
                    <label>Name</label>
                    <input required
                      type="text"
                      name="user_name"
                      className="form-control"
                      id="user_name"
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* <!-- email --> */}
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      name="user_email"
                      className="form-control"
                      id="user_email"
                      placeholder="enter your email"
                    />
                  </div>
                  {/* <!-- contact numbers --> */}
                  <div className="form-group">
                    <label>Phone Nos.</label>
                    <input required
                      type="text"
                      name="user_contact"
                      className="form-control"
                      id="user_contact"
                      placeholder="Enter your phone or mobile number"
                    />
                  </div>

                  {/* <!-- subject --> */}
                  <div className="form-group">
                    <label>Subject</label>
                    <input required
                      type="text"
                      name="subject"
                      className="form-control"
                      id="subject"
                      placeholder="Enter email subject"
                    />
                  </div>

                  <div className="form-group">
                    <label>Message</label>
                    <textarea required
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                    ></textarea>
                  </div>

                 
                
              
                  <div className="float-right">
                    <button type="submit" className="btn btn-primary ">
                      Send
                    </button>
                  </div>
 
          </form>
      
    </div>

    }
       
    ]}
     
     
  />
    
  );
};
export default ContactUs;