import creativeAgency from "../../images/Projects/creative-agency.jpg";
import volunteerNetwork from "../../images/Projects/volunteer-network.png";
import travelGuru from "../../images/Projects/travel-guru.png";
import emaJhon from "../../images/Projects/ema-jhon.png";
import school from "../../images/Projects/E-School.png";
import hotGadget from "../../images/Projects/hot-gadget.png";

import React from "react";
import Projects from "./Projects";
import Header from "../HomePage/Header/Header";

const ProjectData = () => {
    
  const projects = [
    {
      name: "Creative Agency",
      img: creativeAgency,
      des:
        "A full-stack agency app using React, Node.js, Mongodb, Bootstrap, Heroku",
      git: "https://github.com/Emdadul-Tareque/creative-agency-client",
      live: "https://creative-agencyy.web.app/",
    },
    {
      name: "Volunteer Network",
      img: volunteerNetwork,
      des:
        "A full-stack agency app using React, Node.js, Mongodb, Bootstrap, Heroku",
      git: "https://github.com/Emdadul-Tareque/Volunteer-Network-Client",
      live: "https://volunteer-network-tareque.web.app/",
    },
    {
      name: "Travel Guru",
      img: travelGuru,
      des:
        "Travel Guru is a travel management web app using React, Bootstrap,HTML, CSS, Netlify",
      git: "https://github.com/Emdadul-Tareque/Travel-Guru",
      live: "https://clever-gates-0abe7a.netlify.app/",
    },
    {
      name: "Ema Jhon",
      img: emaJhon,
      des:
        "This is an online Product ordering site app using React, Node.js, Mongodb, Bootstrap, netlify",
      git: "https://github.com/Emdadul-Tareque/ema-jhon-simple",
      live: "https://upbeat-sinoussi-362908.netlify.app/",
    },
    {
      name: "E-School",
      img: school,
      des: "This is an online learning platform app using html, css, bootstrap",
      git: "https://github.com/Emdadul-Tareque/E-School",
      live: "https://emdadul-tareque.github.io/E-School/index.html",
    },
    {
      name: "Hot Gadget",
      img: hotGadget,
      des: "This is an online Gadget ordering site using HTML, CSS, Bootstrap",
      git: "https://github.com/Emdadul-Tareque/Hot-Gaget",
      live: "https://emdadul-tareque.github.io/Hot-Gaget/",
    },
  ];
  return (
    <div className="section">
      <Header></Header>
      <div className="container" >
        <h1 className="text-center font-details-b pb-4">Projects</h1>
        <div className="row " >
          {projects.map((project) => (
            <Projects project={project}></Projects>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectData;
