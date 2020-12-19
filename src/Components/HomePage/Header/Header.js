import React from "react";


import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand text-white" href="/">
            Emdadul Tareque
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
          <div class="collapse navbar-collapse topbar" id="navbarNav">
            <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link mr-3 text-white" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link mr-3 text-white" href="/projects">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link mr-3 text-white" href="/blogs">
                  Blogs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link mr-3 text-white" href="/Contact">
                  Contact Me
                </a>
              </li>
              <a
                href="https://drive.google.com/file/d/1nPGnnjpa-EOFuvvVS5jh0aaSncC8q-la/view?usp=sharing"
                target="blank"
              >
                <button className="btn btn-outline-secondary text-white ">
                  Resume
                </button>
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
