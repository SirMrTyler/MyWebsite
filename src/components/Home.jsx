import "../dist/styles.css";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import * as skills from "../images/skills";
// import "../images/html5.svg";
// import "../images/css.svg";
// import "../images/sass.svg";
// import "../images/js.svg";
// import "../images/jquery.svg";
// import "../images/react.svg";
// import "../images/dotNetCore.svg";
// import "../images/cSharp.svg";
// import "../images/sql.svg";
// import "../images/unreal.svg";
// import "../images/cPlus.svg";
// import "../images/blender.svg";

const skillsIcons = [
    { img: skills.html5, id: 1, },
    { img: skills.css3, id: 2, },
    { img: skills.sass, id: 3, },
    { img: skills.js, id: 4, },
    { img: skills.jquery, id: 5, },
    { img: skills.react, id: 6, },
    { img: skills.dotNetCore, id: 7, },
    { img: skills.cSharp, id: 8, },
    { img: skills.sql, id: 9, },
    { img: skills.unreal, id: 10, },
    { img: skills.cPlus, id: 11, },
    { img: skills.blender, id: 12, },
    { img: skills.git, id: 13, },
]

const skillUrls = [
    { url: "https://www.w3schools.com/html/", id: 1, },
    { url: "https://www.w3schools.com/css/", id: 2, },
    { url: "https://sass-lang.com/", id: 3, },
    { url: "https://www.w3schools.com/js/", id: 4, },
    { url: "https://jquery.com/", id: 5, },
    { url: "https://reactjs.org/", id: 6, },
    { url: "https://dotnet.microsoft.com/", id: 7, },
    { url: "https://docs.microsoft.com/en-us/dotnet/csharp/", id: 8, },
    { url: "https://www.microsoft.com/en-us/sql-server/sql-server-2019", id: 9, },
    { url: "https://www.unrealengine.com/en-US/learn", id: 10, },
    { url: "https://www.cplusplus.com/", id: 11, },
    { url: "https://www.blender.org/support/tutorials/", id: 12, },
    { url: "https://git-scm.com/", id: 13, },
]

const assignClick = (id) => {
    const url = skillUrls.find((url) => url.id === id);
    window.open(url.url, "_blank");

}

function Home() {
    return (
        <>
            <section id='home' className="home">
                <div className="container">
                    <div className='content'>
                        <div className='home-main'>
                        <div className='home-text'>
                            <h1>Full-Stack Software Developer 💪</h1>
                            <p>
                                Hi, I'm Tyler Klein. A passionate full-stack software developer based in Coosbay, Oregon. 📍 
                            </p>
                            <span>
                                <a
                                    aria-label="linkedin"
                                    rel="noreferrer"
                                    target="_blank"
                                    href="https://www.linkedin.com/in/tyler-a-klein/"
                                >
                                    <IconBrandLinkedin width={32} height={32}/>
                                </a>
                                <a
                                    aria-label="github"
                                    rel="noreferrer"
                                    target="_blank"
                                    href="https://github.com/SirMrTyler"
                                >
                                    <IconBrandGithub width={32} height={32}/>
                                </a>
                            </span>
                        </div>
                        <div className='home-img'></div>
                        </div>

                        <div className="skills">
                            <p>Tech Stack</p>
                            <div className="logos">
                                <ul>
                                    {/* TODO Add padding to top of bottom row of icons */}
                                    {skillsIcons.map((icon) => (
                                        <li key={icon.id}>
                                            <img id={icon.id} onClick={() => assignClick(icon.id)} src={icon.img} alt="skill-icon" />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;