import React from 'react'
import './ProjectCard.css'
const ProjectCard = ({ src, link, h3, p }) => {
  return (
    <div className="projectCard">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img className="projectImage" src={src} alt={`${h3} logo`} />
        <h3>{h3}</h3>
        <p>{p}</p>
      </a>
    </div>
  );
 

};

export default ProjectCard