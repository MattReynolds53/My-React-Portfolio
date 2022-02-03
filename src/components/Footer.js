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
    width: "2%",
    height: "2%",
    borderRadius: "100%",
    margin: "10px"
  },

};

export default function Footer() {
  return (
    <div>
      <div class="personalLinks" style={styles.footer}>
        <a href="https://www.linkedin.com/in/matthew-reynolds-1a6575189/" style={styles.links}>
          <img
            src={linkedIn}
            class="card-img-top"
            alt="LinkedIn"
            
          ></img>
        </a>

        <a href="https://docs.google.com/document/d/1qeY4cAgpd1MWtgIiQ-C4dHzO66ArziZB/edit?usp=sharing&ouid=106358966844575244644&rtpof=true&sd=true" style={styles.links}>
          <img
            src={resume}
            class="card-img-top"
            alt="Resume"
            
          ></img>
        </a>

        <a href="https://github.com/MattReynolds53" style={styles.links}>
          <img
            src={gitHub}
            class="card-img-top"
            alt="GitHub"
          ></img>
        </a>
      </div>
      {/* <div>
        <p>Southern Methodist University Full-Stack Web Development</p>
      </div> */}
    </div>
  );
}
