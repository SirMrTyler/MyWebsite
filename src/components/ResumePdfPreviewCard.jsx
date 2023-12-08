import {Document, Page, pdfjs} from "react-pdf";
import pdfFile from "../images/TylerKlein_SoftwareEngineer.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
  ).toString();

function PdfPreviewCard({pageNumber}) {
    
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