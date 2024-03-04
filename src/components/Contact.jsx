import { IconMail, IconPhone, IconWorldSearch } from "@tabler/icons-react";

function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact__content">
            <div className="contact__title">
              <p>contact</p>
              <h3>Thanks for visiting! Reach out below 👇</h3>
            </div>
            <div className="contact__icons">
              <a href="https://linqapp.com/bmcard-a99c6d2df03e4fcbb2080f7330" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                <div className="contact__icon-box">
                  <span>
                    <IconWorldSearch width={30} height={30} />
                  </span>
                  <div className="contact__info">
                    <h3>All Forms of Contact</h3>
                    <p>Click Me! 😊</p>
                  </div>
                </div>
              </a>

              <a href="mailto:sirmrtyler.business@gmail.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                <div className="contact__icon-box">
                  <span>
                    <IconMail width={30} height={30} />
                  </span>
                  <div className="contact__info">
                    <h3>E-Mail</h3>
                    sirmrtyler.business@gmail.com
                  </div>
                </div>
              </a>

              <a href="tel:+14088096158" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                <div className="contact__icon-box">
                  <span>
                    <IconPhone width={30} height={30} />
                  </span>
                  <div className="contact__info">
                    <h3>Phone</h3>
                    +1 (408) 809-6158
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
