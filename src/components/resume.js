import React from "react";
// import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';
import resumePic from "../images/Resume2022.png";
import officialResume from "../files/MatthewReynoldsResume2022.pdf"

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
  text: {
      textDecoration: "none",
  }
};

export default function Resume() {
  return (
    <>
    <div style={styles.button}>
      <div>
        <button type="button" class="btn btn-primary btn-lg">
            <a href={officialResume} download class="text-white" style={styles.text}>Download My Resume!</a>
        </button>
        <br></br>
      </div>
    </div>
    <div style={styles.button}>
      <div>
        <img
          src={resumePic}
          class="card-img-top"
          alt="Official Resume"
          style={styles.resume}
        ></img>
      </div>
    </div>
    </>
  );
}
