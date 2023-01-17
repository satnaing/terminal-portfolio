import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Sat Naing's Blog",
    desc: "My personal blog where I can write down my thoughts and experiences.",
    url: "https://satnaing.dev/blog/",
  },
  {
    id: 2,
    title: "Haru Fashion",
    desc: "An ecommerce web application where users can browse various products and make purchases.",
    url: "https://haru-fashion.vercel.app/",
  },
  {
    id: 3,
    title: "Haru API",
    desc: "A RESTful API developed for the Haru fashion ecommerce project.",
    url: "https://satnaing.github.io/haru-api/",
  },
  {
    id: 4,
    title: "AstroPaper Blog Theme",
    desc: "A minimal, accessible and SEO-friendly Astro blog theme.",
    url: "https://astro-paper.pages.dev/",
  },
];

export default Projects;
