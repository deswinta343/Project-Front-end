import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import axios from "axios";

import "../styles/contact.css";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

function Contact() {
  const [nama_pengirim, setNama_Pengirim] = useState("");
  const [email_pengirim, setEmail_Pengirim] = useState("");
  const [pesan, setPesan] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (nama_pengirim === "" || email_pengirim === "" || pesan === "") {
      alert("Data Gagal ditambahkan, field tidak boleh ada yang kosong");
    } else {
      try {
        await axios.post('http://localhost:8080/addmessagepembeli', {
          nama_pengirim: nama_pengirim,
          email_pengirim: email_pengirim,
          pesan: pesan,
        });
        window.location.href = 'messagelist';
      } catch (error) {
        console.error("Error submitting form:", error);
        // Handle errors as needed
      }
    }
  };

  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Get In Touch</h6>
              <Form onSubmit={handleSubmit}>
                <FormGroup className="contact__form">
                  <Input
                    placeholder="Your Name"
                    type="text"
                    name="nama_pengirim"
                    value={nama_pengirim}
                    onChange={(e) => setNama_Pengirim(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input
                    placeholder="Your Email"
                    type="text"
                    name="email_pengirim"
                    value={email_pengirim}
                    onChange={(e) => setEmail_Pengirim(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input
                    placeholder="Your Message"
                    type="text"
                    name="pesan"
                    value={pesan}
                    onChange={(e) => setPesan(e.target.value)}
                  />
                </FormGroup>
                <button className=" contact__btn" type="submit">
                  Send Message
                </button>
              </Form>
            </Col>
            <Col lg="5" md="5">
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
