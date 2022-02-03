import React from "react";
// import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';
import officialResume from "../images/ResumeScreenshot.png";

const styles = {
  button: {
    display: "flex",
    justifyContent: "center",
  },
  resume: {
    paddingTop: "25px",
    width: "58vh",
    height: "74vh"
  },
};

export default function Resume() {
  return (
    <>
    <div style={styles.button}>
      <div>
        <button type="button" class="btn btn-success btn-lg">
          Download My Resume!
        </button>
        <br></br>
      </div>
    </div>
    <div style={styles.button}>
      <div>
        <img
          src={officialResume}
          class="card-img-top"
          alt="Official Resume"
          style={styles.resume}
        ></img>
      </div>
    </div>
    </>
  );
}
