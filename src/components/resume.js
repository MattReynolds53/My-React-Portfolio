import React from "react";
// import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';
import officialResume from "../images/ResumeScreenshot.png"

const styles = {
    button: {
        display: "flex",
        justifyContent: "center"
    },
    resume: {
        display: "flex",
        justifyContent: "center",
        width: "50%",
        height: "50%"
    }
}

export default function Resume() {
    return (
        <>
        <div style={styles.button}>
            <button type="button" class="btn btn-success btn-lg">Download My Resume!</button><br></br>
        </div>
        <div style={styles.resume}>
            <img src={officialResume} class="card-img-top" alt="Official Resume"></img>
        </div>
        </>
    )
}