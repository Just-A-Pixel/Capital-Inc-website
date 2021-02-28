import React from 'react';
import emailjs from 'emailjs-com';
import './Email.css'
const Email = ()=> {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_6ksgk2h', 'template_10whqri', e.target, 'user_SCNzzxd2RqjGc3vbVL7Y4')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }
    
      return (
          <>
          <h1 className="section-title" id='contact'>
             Contact Us
        </h1>
        <br/>
         <div class="outer-form">
            <form className="contact-form" onSubmit={sendEmail} style={{display:'flex', justifyContent:'center',flexDirection:'column', width:'600px'}}>
                    <label>Full Name</label><br/>
                    <input className="text-input" type="text" name="user_name" />
                    <label>Email</label><br/>
                    <input className="text-input" type="email" name="user_email" />
                    <label >Message</label><br/>
                    <input className="text-input" name="message" /><br/>
                    <input className="btn" type="submit" value="Send Message" />
            </form>
          </div>
          </>
        
      );
}

export default Email