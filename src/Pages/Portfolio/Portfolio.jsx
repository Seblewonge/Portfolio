
// import React from "react";
// import Amazone from "../../assets/Amazon.png";
// import Evangadi from "../../assets/Enangadi-forum.jpg";
// import Netflix from "../../assets/netflix.png";
// import ProjectCard from "../../common/ProjectCard";
// import './port.css'
// // import "./portfolio.css";

// const Portfolio = () => {
//   return (
//     <section id="projects" className="portfolio-container">
//       <h1 className="sectionTitle">Projects</h1>
//       <div className="projectsContainer">
//         <ProjectCard
//           src={Netflix}
//           link="https://seblewonge.github.io/Netflix-Clone/"
//           h3="Netflix"
//           p="Streaming platform that provides movies"
//         />
//         <ProjectCard
//           src={Amazone}
//           link="https://amazone-project-me.netlify.app/"
//           h3="Amazone"
//           p="Global e-commerce"
//         />
//         <ProjectCard
//           src={Evangadi}
//           link="https://github.com/Seblewonge/Evangadi_forum"
//           h3="Evangadi Forum"
//           p="Evangadi Forum platform to facilitate question  and answer interactions among users"
//         />
//       </div>
//     </section>
//   );
// };

// export default Portfolio;

import React from "react";
import Amazone from "../../assets/Amazon.png";
import Evangadi from "../../assets/Enangadi-forum.jpg";
import Netflix from "../../assets/netflix.png";
import ProjectCard from "../../common/ProjectCard";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section id="projects" className="container">
      <h1 className="sectionTitle">Projects</h1>
      <div className="projectsContainer">
        <ProjectCard
          src={Netflix}
          link="https://seblewonge.github.io/Netflix-Clone/"
          h3="Netflix"
          p="Streaming platform that provides movies"
        />
        <ProjectCard
          src={Amazone}
          link="https://courageous-alpaca-5e5967.netlify.app/"
          h3="Amazone"
          p="Global e-commerce"
        />
        <ProjectCard
          src={Evangadi}
          link="https://github.com/Seblewonge/Evangadi_forum"
          h3="Evangadi Forum"
          p="Evangadi Forum platform to facilitate question and answer interactions among users"
        />
      </div>
    </section>
  );
};

export default Portfolio;
