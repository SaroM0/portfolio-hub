import React from "react";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "./PdfPreview.css";

const PdfPreview = ({ pdfUrl, onClose }) => {
  return (
    <div className="pdf-preview-overlay">
      <div className="pdf-preview-container">
        <button className="close-preview-button" onClick={onClose}>
          X
        </button>
        <Viewer fileUrl={pdfUrl} />
      </div>
    </div>
  );
};

export default PdfPreview;
