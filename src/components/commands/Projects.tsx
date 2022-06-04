import _ from "lodash";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectTitle,
  UsageDiv,
} from "../styles/Projects.styled";

const Projects: React.FC = () => {
  return (
    <div>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <UsageDiv>
        Usage: projects go &#60;project-no&#62; <br />
        eg: projects go 1
      </UsageDiv>
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Sat Naing's Blog",
    desc: "My personal blog where I can write down my thoughts and experiences.",
  },
  {
    id: 2,
    title: "Haru Fashion",
    desc: "An ecommerce web application where users can browse various products and make purchases.",
  },
  {
    id: 3,
    title: "Haru API",
    desc: "A RESTful API developed for the Haru fashion ecommerce project.",
  },
  {
    id: 4,
    title: "Tip Calculator",
    desc: "A Progressive Web App (PWA) that can calculate the tip amount.",
  },
];

export default Projects;
