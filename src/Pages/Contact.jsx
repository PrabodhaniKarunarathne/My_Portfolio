import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Alert } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { gsap } from 'gsap';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const animatedElementRef = useRef(null); // Reference for the animated element

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
    // Animation using GSAP
    gsap.from(animatedElementRef.current, {
      x: 100, // Move from the right
      opacity: 0, // Start invisible
      duration: 1, // Animation duration
      ease: 'power2.out', // Easing function
    });
  }, []);

  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-start align-items-start">
        {/* Form Column */}
        <div className="col-12 col-md-8 mb-4 mb-md-0"> {/* On small screens, full width; on medium+ screens, 8 columns wide */}
          <div className="p-4 border border-success rounded " >
            <h3 className="text-white">Contact Us</h3>
            <Form onSubmit={handleSubmit(onSubmit)}>
              {/* Name field */}
              <Form.Group controlId="formName" className="mb-2">
                <Form.Label className="text-white">Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  {...register('name', { required: 'Name is required' })}
                  isInvalid={errors.name}
                  className="p-2 bg-success bg-opacity-10 border border-success rounded text-white"
                />
                {errors.name && <Alert variant="danger">{errors.name.message}</Alert>}
              </Form.Group>

              {/* Email field */}
              <Form.Group controlId="formEmail" className="mb-2">
                <Form.Label className="text-white">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
                  })}
                  isInvalid={errors.email}
                  className="p-2 bg-success bg-opacity-10 border border-success rounded text-white"
                />
                {errors.email && <Alert variant="danger">{errors.email.message}</Alert>}
              </Form.Group>

              {/* Message field */}
              <Form.Group controlId="formMessage" className="mb-2">
                <Form.Label className="text-white">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Enter your message"
                  {...register('message', { required: 'Message is required' })}
                  isInvalid={errors.message}
                  className="p-2 bg-success bg-opacity-10 border border-success rounded text-white"
                />
                {errors.message && <Alert variant="danger">{errors.message.message}</Alert>}
              </Form.Group>

              <Button variant="success" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>

        {/* Animated Element Column */}
        <div className="col-12 col-md-4 d-flex justify-content-md-center align-items-md-start"> {/* On small screens, full width; on medium+ screens, 4 columns wide */}
          <div
            ref={animatedElementRef}
            className="animated-element"
            style={{ width: '200px', height: '200px', backgroundColor: '#28a745', borderRadius: '15px', marginTop: '50px' }}
          >
            {/* You can put an image or other content here */}
            <h5 className="text-center text-white" style={{ paddingTop: '70px' }}>Animated Box</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
