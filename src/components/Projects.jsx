import ProjectCard from "./ProjectCard";
import carRental from "../images/car-rental-full.jpg";
import flexPose from "../images/flexPose.jpg";
import carpentry from "../images/carpentry.jpg";

function Projects() {
    return (
        <>
            <section id="projects" className="project">
                <div className="container">
                    <div className="project-content">
                        <p>projects</p>
                        <h3>Designs crafted to mirror your industry's nuances 🧩</h3>
                        <div className="projects-grid">
                            <ProjectCard
                                title="Wild Whips Rental"
                                img={carRental}
                                date="(December 2023)"
                                description="A simulated website where users would rent luxury/sport cars."
                                framework1="React"
                                framework2="SCSS"
                                code="some-website.com"
                                demo="some-demo-website.com"
                                panY="-80%"
                                decal="🏎️"
                            />

                            <ProjectCard
                                title="Sir-Mr-Tyler Fitness"
                                img={flexPose}
                                date="(December 2023)"
                                description="An individualized fitness website for a personal trainer to showcase their services."
                                framework1="React"
                                framework2="Tailwind CSS"
                                code="some-website.com"
                                demo="some-demo-website.com"
                                panY="-200%"
                                decal="🔥"
                            />

                            <ProjectCard
                                title="Carpentry Cap"
                                img={carpentry}
                                date="(December 2023)"
                                description="A simulated website where a carpenter would showcase their products/services."
                                framework1="React"
                                framework2="SCSS"
                                code="some-website.com"
                                demo="some-demo-website.com"
                                panY="-120%"
                                decal="🔨"
                            />
                        </div>
                    </div>
                </div>       
            </section>
        </>
    );
}

export default Projects;