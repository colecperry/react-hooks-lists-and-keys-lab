import React from "react";

function NavBar(props) {
  const links = ["home", "about", "projects"];

  return <nav>{<a key = "home" href ="#home">Home</a>}{<a key = "about" href = "#about">About</a>}{<a key = "projects" href = "#projects">Projects</a>}</nav>;


  return (<nav>
    {linksToDisplay}
  </nav>
  )

}

export default NavBar;
