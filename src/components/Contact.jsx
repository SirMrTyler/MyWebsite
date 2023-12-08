import { IconMail, IconMapSearch, IconPhone } from "@tabler/icons-react";

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
              <div className="contact__icon-box">
                <span>
                  <IconMapSearch width={30} height={30} />
                </span>
                <div className="contact__info">
                  <h3>Location</h3>
                  <p>Coosbay, Oregon</p>
                </div>
              </div>

              <div className="contact__icon-box">
                <span>
                  <IconMail width={30} height={30} />
                </span>
                <div className="contact__info">
                  <h3>E-Mail</h3>
                  <a href="mailto:sirmrtyler.business@gmail.com">
                  sirmrtyler.business@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact__icon-box">
                <span>
                  <IconPhone width={30} height={30} />
                </span>
                <div className="contact__info">
                  <h3>Phone</h3>
                  <a href="tel:+14088096158">
                  +1 (408) 809-6158
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
