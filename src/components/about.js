import React from "react";

export default function About() {
    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Hi, I'm Reed.
                <br className="hidden lg:inline-block" />I love to build amazing
                apps.
              </h1>
              <p className="mb-8 leading-relaxed">
              Full-Stack Web Developer utilizing a background in Communications, Business, Sales, and Health to couple everyday-life with the wonderful benefits of technology. Recently earned a certificate in Full Stack Development from the SMU Coding Bootcamp, and currently furthering skills in HTML, CSS, Javascript, Node.js, Express.js, MySQL, MongoDB, Node.Js, and MVC Frameworks. Known best as an empathetic, detail-oriented problem-solver who has a desire to make the habits of life more efficient through all forms of technology. I have worked with various teams to develop applications that range from music and artist generators to diverse databases. Through my passion for making life more efficient and productive, I desire to work in a highly collaborative environment that prioritizes attention to detail.  
              </p>
            </div>
          </div>
        </section>
      );
}