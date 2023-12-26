import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { FaEarthOceania } from "react-icons/fa6";
import { toast } from "react-toastify";

const Contact = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const dataSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      toast.success("Your Data has been send");
    }
  };
  const validate = () => {
    let result = true;
    if (userName === "" || userName === null) {
      result = false;
      toast.warning("Enter Your Email....");
    }
    if (userEmail === "" || userEmail === null) {
      result = false;
      toast.warning("Enter Your Name....");
    }
  };

  return (
    <Container>
      <div className="contact-box pt-5">
        <div className="row akBox p-4">
          <div className="text-center mb-5">
            <h4 className="display-5 fw-bold">Contact Us</h4>
            <p className="text-muted fs-5"></p>
          </div>
          <div className="col-md-4">
            <div className="bg-ak_primary p-4 rounded-2">
              <div>
                <h5>Let's get in touch</h5>
                <p className="mb-3 text-white mb-2">
                  Feel free to send us a message, we will respond as
                </p>
              </div>
              <ul className="list-unstyled d-flex gap-2 align-items-center">
                <li className="fs-3">
                  <FaLocationDot />
                </li>
                <li>
                  <Link
                    className=" text-decoration-none  text-white fs-5 text-capitalize"
                    to=""
                  >
                    Laxmi Plaza, Putali Sadak Kathmandu, Nepal
                  </Link>
                </li>
              </ul>
              <ul className="list-unstyled d-flex gap-2 align-items-center">
                <li className="fs-3">
                  <FaPhoneAlt />
                </li>
                <li>
                  <Link
                    className=" text-decoration-none  text-white fs-5 text-capitalize"
                    to="tel:+977-1-4430196"
                  >
                    +977-1-4430196
                  </Link>
                </li>
              </ul>
              <ul className="list-unstyled d-flex gap-2 align-items-center">
                <li className="fs-3">
                  <SiMinutemailer />
                </li>
                <li>
                  <Link
                    className=" text-decoration-none  text-white fs-5 text-capitalize"
                    to="mailto:info@aakashlabs.com"
                  >
                    info@aakashlabs.com
                  </Link>
                </li>
              </ul>
              <ul className="list-unstyled d-flex gap-2 align-items-center">
                <li className="fs-3">
                  <FaEarthOceania />
                </li>
                <li>
                  <Link
                    className=" text-decoration-none  text-white fs-5"
                    to="https://aakashlabs.com/"
                  >
                    aakashlabs.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-8">
            <Form onSubmit={dataSubmit} method="post">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      className="ak_form-control"
                      type="email"
                      placeholder="Enter Your Full Name"
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </Form.Group>
                </div>
                <div className="col-md-6 mb-3">
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      className="ak_form-control"
                      type="text"
                      placeholder="Enter Your Email"
                      onChange={(e) => setUserEmail(e.target.value)}
                    />
                  </Form.Group>
                </div>
                <div className="col-md-6 mb-3">
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      className="ak_form-control"
                      type="text"
                      placeholder="Enter Your Mobile Number"
                    />
                  </Form.Group>
                </div>
                <div className="col-md-6 mb-3">
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      className="ak_form-control"
                      type="text"
                      placeholder="Enter Your Mobile Number"
                    />
                  </Form.Group>
                </div>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="text-ak_primary fw-bold">
                    Message
                  </Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </div>
              <Button className="bg-ak_primary btn" type="submit">
                Send Message
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
