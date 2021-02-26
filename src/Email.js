import React from 'react';
import emailjs from 'emailjs-com';

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
          <div style={{display:'flex', alignItems:'column'}}> 
            <form className="contact-form" onSubmit={sendEmail}>
                    <input type="hidden" name="contact_number" placeholder="Name" />
                    <label>Name</label>
                    <input type="text" name="user_name" placeholder="Subject"/>
                    <label>Email</label>
                    <input type="email" name="user_email" placeholder="Email"/>
                    <label>Message</label>
                    <textarea name="message" placeholder="Message"/>
                    <input type="submit" value="Send" />
            </form>
          </div>
        
      );
}

export default Email