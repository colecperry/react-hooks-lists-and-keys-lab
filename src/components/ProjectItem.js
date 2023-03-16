import React from "react";
import ProjectList from "./ProjectList";

function ProjectItem({ name, about, technologies }) {

  const technologyToDisplay = technologies.map((technoObj) => {
   return (
   <span key = {technoObj}>{technoObj}</span>
   )
})

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologyToDisplay}
      </div>
    </div>
  );
}

export default ProjectItem;
