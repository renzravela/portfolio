import { Container, Form, Button, Spinner } from "react-bootstrap";
import customStyle from "../css/customStyle.module.css";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contacts = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_xpv6oe6",
        "portfolio_template",
        form.current,
        "IWCN7UbCpWh5XTL77"
      )
      .then(
        () => {
          toast.success("Message sent successfully!",{
            className: 'custom_toast',
          });
          setIsLoading(false);
        },
        () => {
          toast.error("Failed to send the message. Please try again.",{
            className: 'custom_toast',
          });
          setIsLoading(false);
        }
      );

    form.current.reset();
  };

  return (
    <section id="contact" className="contact_section">
      <ToastContainer />
      <Container className="contact_form">
        <h3 className={customStyle.title_center}>Get in touch with me</h3>
        <p className={customStyle.subTitle_center}>
          Have a project for me, or just want to say hi? Feel free to email me
          at{" "}
          <span>
            <a className="email_link" href="mailto:renzaerol.ravela@gmail.com">
              renzaerol.ravela@gmail.com
            </a>
          </span>{" "}
          or use the form below.
        </p>
        <Form ref={form} onSubmit={sendEmail}>
          <div className="contacts__">
            <Form.Group
              className="mb-3 w-50"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control
                type="text"
                placeholder="Name"
                name="visitor_name"
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3 w-50"
              controlId="exampleForm.ControlInput2"
            >
              <Form.Control
                type="email"
                placeholder="Email"
                name="visitor_email"
                required
              />
            </Form.Group>
          </div>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Message"
              style={{ resize: "none", height: "200px" }}
              name="visitor_message"
              required
            />
          </Form.Group>
          <Button variant="secondary" type="submit" className="project_btn" disabled={isLoading}>
            {isLoading ? <Spinner animation="border" size="sm" /> : 'Send Message'}
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default Contacts;
