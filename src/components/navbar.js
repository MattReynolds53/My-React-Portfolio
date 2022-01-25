// import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="../App">
          Matt Reynolds
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="./About">
                About Me
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="./Projects">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="./Contact">
                Contact
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="./Resume">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
