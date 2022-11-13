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
    title: "Vocabulaire",
    desc: "My second thesis project. Vocabulaire is a mobile app for learning languages 🗺️. It was built with Ionic Framework + Angular and I tried to follow the best software development practises while developing it, such as TDD.",
    url: "https://github.com/arialdev/vocabulaire/",
  },
  {
    id: 2,
    title: "Awards Predictions (WIP)",
    desc: "An Angular + NodeJS application for voting for your favorites nominees in important ceremonies such as Emmy or Academy Awards.",
    url: "https://github.com/arialdev/awards-predictions",
  },
  {
    id: 3,
    title: "VSCode4Teaching",
    desc: "Visual Studio Code extension that brings the programming exercises of a course directly to the student's editor, so that the teacher of that course can check the progress of the students and help them.",
    url: "https://github.com/codeurjc-students/2019-VSCode4Teaching",
  },
  {
    id: 4,
    title: "AdventJS solutions",
    desc: `I love advent calendars for programmers. My favorite one is AdventJS by @midudev. These are simple exercises, so I prefer to create 'smart' solutions to improve my skills (such as one-liner programs, have a look to 2021 - day 10 🤯).`,
    url: "https://github.com/arialdev/adventjs",
  },
];

export default Projects;
