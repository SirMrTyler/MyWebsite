import {Document, Page, pdfjs} from "react-pdf";
import Worker from "pdfjs-dist/webpack";

pdfjs.GlobalWorkerOptions.workerSrc = Worker;

function PdfPreviewCard({pageNumber}) {
    const pdfFile = "https://www.dl.dropboxusercontent.com/scl/fi/whys1wtse0hfy28osmcgh/Tyler-Klein-Full-Stack-Software-Engineer.pdf?rlkey=ro97dok0kz85des5mvev2r1dv&dl=0";
    const onDocumentLoadError = (error) => {
        console.error('PDF load error: ', error);
    };

    return (
        <div className="pdf-preview-card">
            <Document file={pdfFile} onLoadError={onDocumentLoadError}>
                <Page pageNumber={pageNumber}/>
            </Document>
        </div>
    );
};

export default PdfPreviewCard;