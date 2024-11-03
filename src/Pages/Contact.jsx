import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Alert } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { gsap } from 'gsap';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Importing icons
import './Contact.css';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const svgRef = useRef(null); // Reference for the SVG element

  const onSubmit = (data) => {
    const serviceID = 'service_r08mo7i';
    const templateID = 'template_55w3t8k';
    const userID = 'Fvvyvqzh6_jFEUEgB';

    emailjs.send(serviceID, templateID, data, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Form submitted successfully!');
        reset(); // Reset the form after submission
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
        alert('There was an error sending your message. Please try again.');
      });
  };

  useEffect(() => {
    // GSAP animation for the plane and path in SVG
    const tl = gsap.timeline({ repeat: -1, defaults: { ease: "power2.inOut" } });

    tl.fromTo(
      ".plane", // Plane element
      { scale: 0.6 },
      {
        duration: 4,
        scale: 1.2,
        motionPath: {
          path: ".mp",
          align: ".mp",
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
        },
      },
      0
    )
    .to("#svg-stage", { duration: 0.7, opacity: 1 }, 0.25) // Fade in the SVG
    .from(".mp", { duration: 3.8, drawSVG: 0 }, 0.28) // Draw the path
    .to(".mp", { duration: 2, drawSVG: "94% 94%", ease: "power2" }, "-=2") // Animate the path
    .to("#svg-stage", { duration: 0.7, opacity: 0 }, "-=0.9"); // Fade out
  }, []);

  return (
    <div className="flex-row">
      <div className="container mt-5 d-flex flex-column flex-md-row">
        {/* Contact Form */}
        <div className="col-12 col-md-8 mb-4 mb-md-0">
          <div className="p-4 border rounded " 
          style={{
            borderColor:'#2F2B7D',
            background: "linear-gradient(90deg, #3C3898, #05042A)"}}>
            <h3 className="text-white">Contact Me</h3>
            <Form onSubmit={handleSubmit(onSubmit)} className="contact-form">
              {/* Name Field */}
              <Form.Group controlId="formName" className="mb-2">
                <Form.Label className="" style={{color:'#131146',fontWeight:'bold'}}>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  {...register('name', { required: 'Name is required' })}
                  isInvalid={errors.name}
                  className="p-2  rounded text-white"
                  style={{backgroundColor:'rgba(78, 74, 161,0.2)',borderColor:'#2F2B7D'}}
                />
                {errors.name && <Alert variant="danger">{errors.name.message}</Alert>}
              </Form.Group>

              {/* Email Field */}
              <Form.Group controlId="formEmail" className="mb-2">
                <Form.Label className="" style={{color:'#131146',fontWeight:'bold'}}>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
                  })}
                  isInvalid={errors.email}
                  className="p-2  rounded text-white"
                  style={{backgroundColor:'rgba(78, 74, 161,0.2)',borderColor:'#2F2B7D'}}

                />
                {errors.email && <Alert variant="danger">{errors.email.message}</Alert>}
              </Form.Group>

              {/* Phone Number Field */}
              <Form.Group controlId="formPhone" className="mb-2">
                <Form.Label className="" style={{color:'#131146',fontWeight:'bold'}}>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter your phone number"
                  {...register('phone', {
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[0-9]{10,15}$/, // Allows phone numbers with 10-15 digits
                      message: 'Please enter a valid phone number',
                    },
                  })}
                  isInvalid={errors.phone}
                  className="p-2  rounded text-white"
                  style={{backgroundColor:'rgba(78, 74, 161,0.2)',borderColor:'#2F2B7D'}}

                />
                {errors.phone && <Alert variant="danger">{errors.phone.message}</Alert>}
              </Form.Group>

              {/* Message Field */}
              <Form.Group controlId="formMessage" className="mb-2">
                <Form.Label className="" style={{color:'#131146',fontWeight:'bold'}}>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Enter your message"
                  {...register('message', { required: 'Message is required' })}
                  isInvalid={errors.message}
                  className="p-2  rounded text-white"
                  style={{backgroundColor:'rgba(78, 74, 161,0.2)',borderColor:'#2F2B7D'}}

                />
                {errors.message && <Alert variant="danger">{errors.message.message}</Alert>}
              </Form.Group>

              <Button
                className="btn-custom rounded"
                // variant="success"
                type="submit"
                // style={{ backgroundColor: '#558767', color: 'white' }} // Apply custom background color
                // onMouseOver={(e) => e.target.style.backgroundColor = '#31543F'} // Hover color change
                // onMouseOut={(e) => e.target.style.backgroundColor = '#558767'}  // Reset on hover out
              >
                Submit
              </Button>

            </Form>
          </div>
        </div>

        {/* Animated SVG */}
        <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
          <svg
            id="svg-stage"
            ref={svgRef}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-40 -180 1250 1100"
            opacity="0"
            className="svg-animation"
            style={{ marginLeft: '50px', maxWidth: '100%', height: 'auto' }} // Ensure SVG is responsive
          >
            <path
              className="mp"
              fill="none"
              stroke="url(#grad)"
              strokeWidth="4"
              d="M-92 17.713c154.32 237.253 348.7 486.913 585.407 466.93 137.542-17.257 247.733-123.595 279.259-239.307 27.368-100.43-21.323-229.59-140.017-241.76-118.693-12.172-208.268 98.897-231.122 199.803-34.673 151.333 12.324 312.301 125.096 429.074C639.395 749.225 815.268 819.528 995 819"
            />
            <g className="plane">
              <path fill="url(#grad)" opacity="0.3" d="m82.8 35 215.9 94.6L79 92l3.8-57Z" />
              <path fill="url(#grad)" d="m82.8 35 52-23.5 163.9 118.1-216-94.5Z" />
              <path fill="url(#grad)" opacity="0.3" d="m76.8 107.1 214.4 19.6L74.7 131l2.1-23.9Z" />
              <path fill="url(#grad)" d="M298.8 130.4 1.9 103.3l54-45 242.9 72.1Z" />
            </g>
            <defs>
              <linearGradient id="grad" x1="154" x2="160" y1="49" y2="132" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#4E4AA1" />
                <stop offset="1" stopColor="#211E61" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Footer Section */}
      <div className="justify-content-center mt-5  w-100" style={{
        background: "linear-gradient(90deg, #4E4AA1, #211E61)"}}>
        <footer className="footer mt-5  text-center w-100 py-4">
          <p className="text-white mb-2">Copyright © 2024 K.T.T.P. Dilhari Karunarathne</p>
          <p className="text-white mb-4">Phone: +94 776884107</p>
          <div className="d-flex justify-content-center">
            <a href="https://www.linkedin.com/in/prabodhani-karunarathne" className="text-white mx-2">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/PrabodhaniKarunarathne" className="text-white mx-2">
              <FaGithub size={24} />
            </a>
            <a href="mailto:karunarathneprabodhani@gmail.com" className="text-white mx-2">
              <FaEnvelope size={24} />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ContactForm;
