import {Document, Page, pdfjs} from "react-pdf";
import Worker from "pdfjs-dist/webpack";

pdfjs.GlobalWorkerOptions.workerSrc = Worker;

function PdfPreviewCard() {
    const pdfFile = "https://www.dl.dropboxusercontent.com/scl/fi/h0ajp3g6xqda8vp33mdgi/Tyler-Klein-Software-Engineer.pdf?rlkey=ni8uhpr5crm1oebxckwwmbwl5&dl=1";
    const onDocumentLoadError = (error) => {
        console.error('PDF load error: ', error);
    };

    return (
        <div className="pdf-preview-card">
            <Document file={pdfFile} onLoadError={onDocumentLoadError}>
                <Page pageNumber={1}/>
            </Document>
        </div>
    );
};

export default PdfPreviewCard;