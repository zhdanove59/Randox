import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './index.css'

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_urwg10g', 'template_nsseepm', form.current, {
        publicKey: 'mA7xGxExlQC_cSSDL',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
    <div className="sectionContact">
        <h1 className='colored-word contact'>Contact</h1>
    <form  className='form' ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input className='champ'type="text" name="from_name" />
      <label>Email</label>
      <input className='champ'type="email" name="from_email" />
      <label>Message</label>
      <textarea className='champ champMsg' name="message" />
      <input className='btnSend' type="submit" value="Send" />
    </form>
    </div>
    </>

    
  );
};

