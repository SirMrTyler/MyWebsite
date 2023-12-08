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
                Full-Stack Software Developer based in Coosbay, OR
                📍
              </h4>
              <p>
                As a Junior Full-Stack Developer, I utilize 
                cutting-edge developmental libraries/frameworks to 
                create engaging user experiences by writing clean, 
                optimized, and scalable code. My Front-End skills 
                include an expertise in HTML5, CSS, JavaScript, 
                React, and SCSS used in designing and maintaining 
                responsive websites that offer a smooth front-end 
                user experience. This contributes to my powerful 
                Back-End system knowledge where I implement SQL/T-SQL 
                stored procedures that provide reliable database 
                systems by creating RESTful .NETCore WEB APIs using 
                C# in Microsoft Visual Studio. This seamlessly links 
                my Front-End designs to my Back-End database systems.
                I look forward to the possiblity of growing with your 
                team!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
