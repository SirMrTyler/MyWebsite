import AboutImg from "../images/about-img.webp";
import RoundedText from "../images/text2.svg";
import WorkingEmoji from "../images/working-emoji.png";

function AboutMe() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
              <img src={WorkingEmoji} alt="emoji" className="work-emoji" />
              <img src={AboutImg} alt="mee" className="img-side__main-img" />
              <span>
                <img src={RoundedText} alt="text" />
              </span>
            </div>
            <div className="text-side">
              <h3>About me</h3>
              <h4>
                Software Engineering Intern & Full-Stack Developer based in Oregon
                📍
              </h4>
              <p>
                I am a Computer Science student at Oregon State University (expected 2027)
                with hands-on experience delivering production-minded software in both
                internship and full-time engineering roles. I currently serve as an ML
                Systems Intern at Analog Devices, where I help build machine-learning-driven
                diagnostic workflows for hardware systems, and previously worked as a Full-Stack
                Software Engineer building scalable .NET and React applications.
                <br /><br />
                My technical background spans C#/.NET Core, React, SQL Server, Python,
                REST API development, authentication/authorization, and Agile delivery.
                I focus on writing maintainable code, improving system reliability, and
                collaborating effectively across cross-functional teams to ship measurable
                outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
