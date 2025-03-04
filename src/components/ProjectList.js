import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const projectArray = projects.map((projectObj) => {
    return (
      <ProjectItem key = {projectObj.id} name = {projectObj.name} about = {projectObj.about} technologies={projectObj.technologies}/>
    )
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectArray}</div>
    </div>
  );
}

export default ProjectList;
