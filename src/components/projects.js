import React from "react";
import project1 from '../images/MyTravelAdvisor.png';
import project2 from '../images/albumSearchPageResults.png';
import project3 from '../images/TechBlog2.png';
import project4 from '../images/WeatherDashboardScreenshot.png';
import project5 from '../images/NoteTaker.png';
import project6 from '../images/CodingTeamGenerator.png';
// import { projects } from "../data";

const styles = {
  cardWidth: {
    width: "18rem",
  },
  cardDisplay: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  }
};

export default function Projects() {
  return (
  <div style={styles.cardDisplay}>
    <div class="card" style={styles.cardWidth}>
      <img src={project1} class="card-img-top" alt="Project 1"></img>
      <div class="card-body">
        <h5 class="card-title">My Travel Advisor</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <div class="card-body">
        <p>
        <a href="https://github.com/MattReynolds53/WishTravelP2" class="card-link">GitHub Repository</a>
        </p>
        <p>
        <a href="google.com" target="_blank" class="card-link">Deployed Application</a>
        </p>
      </div>
    </div>
  
    <div class="card" style={styles.cardWidth}>
      <img src={project2} class="card-img-top" alt="Project 1"></img>
      <div class="card-body">
        <h5 class="card-title">MyMusic</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <div class="card-body">
        <p>
        <a href="https://github.com/MattReynolds53/ProjectforHackers" class="card-link">GitHub Repository</a>
        </p>
        <p>
        <a href="google.com" target="_blank" class="card-link">Deployed Application</a>
        </p>
      </div>
    </div>

    <div class="card" style={styles.cardWidth}>
      <img src={project3} class="card-img-top" alt="Project 1"></img>
      <div class="card-body">
        <h5 class="card-title">Tech Blog</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <div class="card-body">
        <p>
        <a href="https://github.com/MattReynolds53/My-Tech-Blog" class="card-link">GitHub Repository</a>
        </p>
        <p>
        <a href="google.com" target="_blank" class="card-link">Deployed Application</a>
        </p>
      </div>
    </div>

    <div class="card" style={styles.cardWidth}>
      <img src={project4} class="card-img-top" alt="Project 1"></img>
      <div class="card-body">
        <h5 class="card-title">Weather Dashboard</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <div class="card-body">
        <p>
        <a href="https://github.com/MattReynolds53/Forecast-Dashboard" class="card-link">GitHub Repository</a>
        </p>
        <p>
        <a href="google.com" target="_blank" class="card-link">Deployed Application</a>
        </p>
      </div>
    </div>

    <div class="card" style={styles.cardWidth}>
      <img src={project5} class="card-img-top" alt="Project 1"></img>
      <div class="card-body">
        <h5 class="card-title">Note Taker</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <div class="card-body">
        <p>
        <a href="https://github.com/MattReynolds53/Everyday-Note-Taker" class="card-link">GitHub Repository</a>
        </p>
        <p>
        <a href="google.com" target="_blank" class="card-link">Deployed Application</a>
        </p>
      </div>
    </div>

    <div class="card" style={styles.cardWidth}>
      <img src={project6} class="card-img-top" alt="Project 1"></img>
      <div class="card-body">
        <h5 class="card-title">Coding Team Generator</h5>
        <p class="card-text">Utilize the command line to efficiently display your coding team with their most relevant information.</p>
      </div>
      <div class="card-body">
        <p>
        <a href="https://github.com/MattReynolds53/Coding-Team-Generator" target="_blank" class="card-link">GitHub Repository</a>
        </p>
        <p>
        <a href="google.com" target="_blank" class="card-link">Deployed Application</a>
        </p>
      </div>
    </div>
  </div>
    
    
    
  );
}