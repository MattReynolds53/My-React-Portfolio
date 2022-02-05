import React from "react";
import linkedIn from "../images/linkedin.png";
import gitHub from "../images/github.png";
import SMU from "../images/SMULogo.png";
import Instagram from "../images/Instagram.png";

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
  image: {
      borderRadius: "100%"
  }

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
            style={styles.image}
          ></img>
        </a>

        <a href="https://github.com/MattReynolds53" style={styles.links}>
          <img
            src={gitHub}
            class="card-img-top"
            alt="GitHub"
            style={styles.image}
          ></img>
        </a>

        <a href="https://techbootcamps.smu.edu/coding/" style={styles.links}>
          <img
            src={SMU}
            class="card-img-top"
            alt="GitHub"
            style={styles.image}
          ></img>
        </a>

        <a href="https://www.instagram.com/matt__rey/" style={styles.links}>
          <img
            src={Instagram}
            class="card-img-top"
            alt="GitHub"
            style={styles.image}
          ></img>
        </a>
      </div>
    </div>
  );
}
