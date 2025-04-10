import React from 'react';

const projects = [
  { title: "RFID Gate Opener", description: "Opens gate using RFID", link: "#" },
  { title: "Agribot", description: "Smart agriculture robot", link: "#" },
  { title: "Railway System", description: "Automatic railway control", link: "#" },
  { title: "Heatblast Bot", description: "Fire extinguisher robot", link: "#" },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="grid">
        {projects.map((p, index) => (
          <div className="card" key={index}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <a href={p.link}>View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
