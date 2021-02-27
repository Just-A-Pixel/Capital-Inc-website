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
          <div style={{width:'600px'}}> 
            <form className="contact-form" onSubmit={sendEmail} style={{display:'flex', justifyContent:'center',flexDirection:'column', padding: '10px'}}>
                    <input type="hidden" name="contact_number" placeholder="Name" />
        
                    <input type="text" name="user_name" placeholder="Subject"/>
                    {/* <label>Email</label> */}
                    <input type="email" name="user_email" placeholder="Email"/>
                    {/* <label>Message</label> */}
                    <textarea name="message" placeholder="Message"/>
                    <input type="submit" value="Send" />
            </form>
          </div>
        
      );
}

export default Email