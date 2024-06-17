import React from "react";
import Title from "../../componets/common/Title";
import styles from "../../styles/layout/contact/contact.module.css";
import emailjs from "@emailjs/browser";
function Contact() {
  function swaminaryan(e) {
    e.preventDefault();
    const form = e.target;
    emailjs
      .sendForm("service_cbwfygj", "template_cs45z6c", form, {
        publicKey: "w0kBNrSy9KzncFz7a",
      })
      .then(
        () => {
         alert("SUCCESS!");
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  }
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div>
          <Title title="CONTACT US" />
          <form onSubmit={swaminaryan}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name:"
            />
            <input
              type="number"
              name="number"
              id="number"
              placeholder="Enter Your Number:"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email Address:"
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="2"
              placeholder="Send Me a Message:"
            ></textarea>
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
