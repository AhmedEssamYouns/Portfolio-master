import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import resumeLink from "../../Assets/Projects/ahmed_essam_resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row style={{ justifyContent: "center", marginBottom: "20px" }}>
          <Button
            variant="primary"
            href={resumeLink}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "80vh", textAlign: "center" }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Document
              file={resumeLink}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              {Array.from({ length: numPages }, (_, index) => (
                <div
                  key={`page_${index + 1}`}
                  style={{ margin: "10px 0", display: "flex", justifyContent: "center" }} 
                >
                  <Page
                    pageNumber={index + 1}
                    scale={width > 786 ? 1.5 : 0.6}
                  />
                </div>
              ))}
            </Document>
          </div>
        </Row>

        <Row style={{ justifyContent: "center", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={resumeLink}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
