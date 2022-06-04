import _ from "lodash";
import { ProjectsIntro, UsageDiv } from "../styles/Projects.styled";
import { Cmd, CmdDesc, CmdList, HelpWrapper } from "../styles/Help.styled";
import { checkRedirect, generateTabs } from "../../utils/funcs";

const Socials: React.FC<{
  arg: string[];
  history: string[];
  rerender: boolean;
}> = ({ arg, history, rerender }) => {
  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  /* ===== check current command makes redirect ===== */
  if (checkRedirect(arg, rerender, currentCommand, "socials")) {
    socials.forEach(({ id, url }) => {
      id === parseInt(arg[1]) && window.open(url, "_blank");
    });
    return null;
  }

  /* ===== check arg is valid ===== */
  const checkArg = (a: string[]) => {
    if (a[0] !== "go" || !_.includes([1, 2, 3, 4], parseInt(a[1])))
      return (
        <UsageDiv noMargin>
          Usage: socials go &#60;social-no&#62; <br />
          eg: socials go 1
        </UsageDiv>
      );
    return null;
  };

  return arg.length > 0 ? (
    checkArg(arg)
  ) : (
    <HelpWrapper>
      <ProjectsIntro>Here are my social links</ProjectsIntro>
      {socials.map(({ id, title, url, tab }) => (
        <CmdList key={title}>
          <Cmd>{`${id}. ${title}`}</Cmd>
          {generateTabs(tab!)}
          <CmdDesc>- {url}</CmdDesc>
        </CmdList>
      ))}
      <UsageDiv>
        Usage: socials go &#60;social-id&#62; <br />
        eg: socials go 1
      </UsageDiv>
    </HelpWrapper>
  );
};

const socials = [
  {
    id: 1,
    title: "GitHub",
    url: "https://github.com/satnaing",
    tab: 3,
  },
  {
    id: 2,
    title: "Dev.to",
    url: "https://dev.to/satnaing",
    tab: 3,
  },
  {
    id: 3,
    title: "Facebook",
    url: "https://www.facebook.com/satnaing.dev",
    tab: 1,
  },
  {
    id: 4,
    title: "Instagram",
    url: "https://instagram.com/satnaing.dev",
    tab: 0,
  },
];

export default Socials;
