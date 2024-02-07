import { Container, Form, Button } from "react-bootstrap";
import customStyle from "../css/customStyle.module.css";
import emailjs from "emailjs-com";
import { useRef } from "react";

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "portfolio_template",
        form.current,
        "IWCN7UbCpWh5XTL77"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

      form.current.reset();
  };

  return (
    <section id="contact" className="contact_section">
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
            />
          </Form.Group>
          <Button variant="secondary" type="submit" className="project_btn">
            Send Message
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default Contacts;
