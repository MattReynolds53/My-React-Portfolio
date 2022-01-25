import React from "react";
import project1 from '../images/Auckland.jpg';
// import { projects } from "../data";

const styles = {
  cardWidth: {
    width: "18rem",
  },
  cardDisplay: {
    display: "flex",
    flexWrap: "wrap",
  }
};

export default function Projects() {
  return (
  <div style={styles.cardDisplay}>
    <div class="card" style={styles.cardWidth}>
      <img src={project1} class="card-img-top" alt="Project 1"></img>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <div class="card-body">
        <a href="github.com" target="_blank" class="card-link">GitHub Repository</a>
        <a href="google.com" target="_blank" class="card-link">Deployed Application</a>
      </div>
    </div>
  
    <div class="card" style={styles.cardWidth}>
      <img src={project1} class="card-img-top" alt="Project 1"></img>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <div class="card-body">
        <a href="github.com" target="_blank" class="card-link">GitHub Repository</a>
        <a href="google.com" target="_blank" class="card-link">Deployed Application</a>
      </div>
    </div>

    <div class="card" style={styles.cardWidth}>
      <img src={project1} class="card-img-top" alt="Project 1"></img>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <div class="card-body">
        <a href="github.com" target="_blank" class="card-link">GitHub Repository</a>
        <a href="google.com" target="_blank" class="card-link">Deployed Application</a>
      </div>
    </div>

    <div class="card" style={styles.cardWidth}>
      <img src={project1} class="card-img-top" alt="Project 1"></img>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <div class="card-body">
        <a href="github.com" target="_blank" class="card-link">GitHub Repository</a>
        <a href="google.com" target="_blank" class="card-link">Deployed Application</a>
      </div>
    </div>

    <div class="card" style={styles.cardWidth}>
      <img src={project1} class="card-img-top" alt="Project 1"></img>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <div class="card-body">
        <a href="github.com" target="_blank" class="card-link">GitHub Repository</a>
        <a href="google.com" target="_blank" class="card-link">Deployed Application</a>
      </div>
    </div>

    <div class="card" style={styles.cardWidth}>
      <img src={project1} class="card-img-top" alt="Project 1"></img>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <div class="card-body">
        <a href="github.com" target="_blank" class="card-link">GitHub Repository</a>
        <a href="google.com" target="_blank" class="card-link">Deployed Application</a>
      </div>
    </div>
  </div>
    
    
    
  );
}