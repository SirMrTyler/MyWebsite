import React, { useRef, useState } from "react";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

function GamesCard({
    title,
    img,
    description,
    framework1,
    framework2,
    code,
    demo,
    panY,
    cName,
    decal,
    date,
}) {
    const codeRef = useRef(null);
    const demoRef = useRef(null);
    const [pan, setPan] = useState(false);

    return (
        <>
            <div className={`gamesCard gamesCard_1 ${cName}`}>
                <div className="gamesCard_img">
                    <a target="_blank" href={demo} ref={codeRef} rel="noreferrer">
                        <img 
                            src={img} 
                            alt="games" 
                            style={{
                                transform: pan ? `translateY(${panY})` : "translateY(0%)",
                                transition: "transform 10s ease-in-out",
                            }}
                            onMouseEnter={() => setPan(true)}
                            onMouseLeave={() => setPan(false)}
                        />
                    </a>
                </div>
                <div className="gamesCard_text">
                    <h3>
                        {title}{decal}
                    </h3>
                    <p>{description}</p>
                    
                    <h4><code>Tech Stack</code></h4>
                    <div className="stack">
                        <p>{framework1}</p>
                        <p>{framework2}</p>
                    </div>
                    <div className="links">
                        <a target="_blank" ref={codeRef} href={code} rel="noreferrer">
                            Code <IconBrandGithub/>
                        </a>
                        <a target="_blank" ref={demoRef} href={demo} rel="noreferrer">
                            Demo Site 
                            <IconExternalLink/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GamesCard;