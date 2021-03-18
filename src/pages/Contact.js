import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import { Input, TextArea, Submit } from "../components/Form/Input";
import { FaArrowRight } from "react-icons/fa";
import { GiEnvelope, GiPhone, GiWoodenSign } from "react-icons/gi";
const Contact = () => {
  return (
    <div>
      <Banner title="Contact" />
      <section className="page__contact">
        <div className="container">
          <div className="page__contact__grid">
            <div className="page__contact__grid__items">
              <h3>Contact Information</h3>
              <p>Any questions or comments? Send us a message.</p>
              <div className="contact__info">
                <div className="contact__info__item">
                  <h4>Email</h4>
                  <ul>
                    <li>
                      <GiEnvelope />
                      support@ulticlean.net
                    </li>
                    <li>
                      <GiEnvelope />
                      info@ulticlean.net
                    </li>
                  </ul>
                </div>

                <div className="contact__info__item">
                  <h4>Phone</h4>
                  <ul>
                    <li>
                      <GiPhone /> +(029) 123 1234
                    </li>
                    <li>
                      <GiPhone /> +(029) 325 3215
                    </li>
                  </ul>
                </div>

                <div className="contact__info__item">
                  <h4>Address</h4>
                  <ul>
                    <li>
                      <GiWoodenSign /> 43 Panama Street Rd, CA 9022109, USA{" "}
                    </li>
                  </ul>
                </div>

                <div className="contact__info__item">
                  <Link path="/">
                    View on Map <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
            <div className="page__contact__grid__items">
              <div className="wrapper">
                <h3>Get in touch</h3>
                <p>
                  Fill up the form and we will get back to you within 24 hours
                </p>
                <form action="">
                  <Input label="Fullname" type="text" />
                  <Input label="Email" type="email" />

                  <TextArea label="Message" />
                  <Submit text="Send Message" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
