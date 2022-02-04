import React from "react";
// import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';
import officialResume from "../images/Resume2022.png";

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
        <button type="button" class="btn btn-success btn-lg">
            <a href="/images/Resume2022.png" download class="text-white" style={styles.text}>Download My Resume!</a>
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
