import React from "react";
import headshot from "../images/portfolio_headshot.jpg";

const styles = {
  headshot: {
    display: "block",
    margin: "0 auto",
    width: "20%",
    height: "20%",
    borderRadius: "5%",
  },
  body: {
    paddingTop: "5%",
    lineHeight: "50px",
    fontSize: "20px"
  },
  page: {
    minHeight: "79vh"
  }
};

export default function About() {
  return (
    <>
      <div style={styles.page}>
        <div>
          <img src={headshot} alt="Headshot" style={styles.headshot}></img>
        </div>
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <p className="mb-8 leading-relaxed" style={styles.body}>
                Full-Stack Web Developer utilizing a background in
                Communications, Business, Sales, and Health to couple
                everyday-life with the wonderful benefits of technology.
                Recently earned a certificate in Full Stack Development from the
                SMU Coding Bootcamp, and currently furthering skills in HTML,
                CSS, Javascript, Node.js, Express.js, MySQL, MongoDB, Node.Js,
                and MVC Frameworks. Known best as an empathetic, detail-oriented
                problem-solver who has a desire to make the habits of life more
                efficient through all forms of technology. I have worked with
                various teams to develop applications that range from music and
                artist generators to diverse databases. Through my passion for
                making life more efficient and productive, I desire to work in a
                highly collaborative environment that prioritizes attention to
                detail.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
