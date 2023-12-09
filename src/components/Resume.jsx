import React from "react";
import PdfPreviewCard from "./ResumePdfPreviewCard";

function Resume() {
    const downloadBtnAnimation = () => {
        console.log("Downloading resume...");
        const resumeSelector = document.querySelector('.resume__info');
        resumeSelector.style.transform = "translateY(-1rem)";
        requestAnimationFrame(() => {
            setTimeout(() => {
                resumeSelector.style.transform = "translateY(0rem)";
            }, 250);
        });
    };
    const downloadResume = () => {
        const link = document.createElement('a');
        downloadBtnAnimation();
        link.href = "https://www.dl.dropboxusercontent.com/scl/fi/h0ajp3g6xqda8vp33mdgi/Tyler-Klein-Software-Engineer.pdf?rlkey=ni8uhpr5crm1oebxckwwmbwl5&dl=1";
        link.download = "TylerKlein_FullStackSoftwareEngineer.pdf";
        link.click();
    };

    return (
        <>
            <section id="resume" className="resume projCard projCard_1">
                <div className="container">
                    <div className="resume__content">
                        <div className="resume__title">
                            <p>resume</p>
                            <h3>Here's a classic resume of boring-ness 📝</h3>
                        </div>
                        <div className="pdf-preview-container">
                            <PdfPreviewCard pageNumber={1}/>
                            <PdfPreviewCard pageNumber={2}/>
                        </div>
                        <div className="download__button">
                            <div className="resume__icon-box">
                                <div onClick={downloadResume} className="resume__info">
                                    <p>DOWNLOAD</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Resume;