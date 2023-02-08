import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l5bxlxr', 'template_wdit4qy', formRef.current, 'PReBdvctBl7ZGOidT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="flex justify-center pb-10 mt-[4rem] md:mt-0" id="contact">
        <div className="md:w-[80%] md-full flex flex-col items-center">
            <h1 className="text-center text-5xl font-bold">Contact Us</h1>
            <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-5 md:w-[50%] w-full justify-center mt-16">
                <input type="text" name="user_name" className="p-4 border-2 border-black" placeholder="Name" />
                <input type="email" name="user_email" className="p-4 border-2 border-black" placeholder="Email" />
                <select name="user_subject" className="p-4 border-2 border-black bg-white text-gray-500">
                    <option disabled>-- Select Service --</option>
                    <option value="Photo Shoot">Photo shoot</option>
                    <option value="Home Service Booking">Home Service Booking</option>
                    <option value="Photoshoot Acquisation">Photoshoot Skill Acquisation</option>
                    <option value="Join Team">Join Team</option>
                </select>
                  <textarea placeholder="Message" name="message" className="border-2 border-black p-4" id="" cols="30" rows="5"></textarea>
                  <button className="bg-black p-4 text-white font-bold active:bg-gray-800">SUBMIT</button>
            </form>
        </div>
    </div>
  )
}

export default Contact