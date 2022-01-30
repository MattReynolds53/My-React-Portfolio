import React from "react";
import linkedIn from "../images/linkedin.png";
import resume from "../images/resume.png";
import gitHub from "../images/github.png";

const styles = {
  footer: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
},
links: {
      width: "5%",
      height: "5%",
      borderRadius: "100%",
  }
};

export default function Footer() {
  return (
    <div style={styles.footer}>
      <div class="personalLinks">
        <a href="https://www.linkedin.com/in/matthew-reynolds-1a6575189/">
          <img
            src={linkedIn}
            class="card-img-top"
            alt="LinkedIn"
            style={styles.links}
          ></img>
        </a>

        <a href="https://docs.google.com/document/d/1qeY4cAgpd1MWtgIiQ-C4dHzO66ArziZB/edit?usp=sharing&ouid=106358966844575244644&rtpof=true&sd=true">
          <img
            src={resume}
            class="card-img-top"
            alt="Resume"
            style={styles.links}
          ></img>
        </a>

        <a href="https://github.com/MattReynolds53">
          <img
            src={gitHub}
            class="card-img-top"
            alt="GitHub"
            style={styles.links}
          ></img>
        </a>
      </div>
      {/* <div>
        <p>Southern Methodist University Full-Stack Web Development</p>
      </div> */}
    </div>
  );
}
