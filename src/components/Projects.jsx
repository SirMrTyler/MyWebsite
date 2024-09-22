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
                                title="Top Racing"
                                img={carRental}
                                date="(December 2023)"
                                description="A simulated website where users would rent luxury/sport cars."
                                framework1="React"
                                framework2="SCSS"
                                code="https://github.com/SirMrTyler/top-racing/tree/main"
                                demo="https://top-racing.sirmrtyler.tech"
                                panY="-80%"
                                decal="🏎️"
                            />

                            <ProjectCard
                                title="Mo's Chowder Seating Chart"
                                img={flexPose}
                                date="September 2024"
                                description="A simple seating chart for the Mo's Chowder restaurant."
                                framework1="React"
                                framework2="CSS"
                                code="https://github.com/SirMrTyler/Host-Seating-Chart-Moes"
                                demo="https://host-seating-chart-moes.vercel.app/"
                                panY="-200%"
                                decal="🥣"
                            />

                            <ProjectCard
                                title="Carpentry Cap (Work in Progress)"
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