import About from "./commands/About";
import Clear from "./commands/Clear";
import Echo from "./commands/Echo";
import Education from "./commands/Education";
import Email from "./commands/Email";
import GeneralOutput from "./commands/GeneralOutput";
import Gui from "./commands/Gui";
import Help from "./commands/Help";
import Welcome from "./commands/Welcome";
import History from "./commands/History";
import Projects from "./commands/Projects";
import Socials from "./commands/Socials";
import Themes from "./commands/Themes";
import { OutputContainer } from "./styles/Output.styled";

type Props = {
  cmd: string;
};

const Output: React.FC<Props> = ({ cmd }) => {
  return (
    <OutputContainer>
      {
        {
          about: <About />,
          clear: <Clear />,
          echo: <Echo />,
          education: <Education />,
          email: <Email />,
          gui: <Gui />,
          help: <Help />,
          history: <History />,
          projects: <Projects />,
          pwd: <GeneralOutput cmd="pwd">/home/satnaing</GeneralOutput>,
          socials: <Socials />,
          themes: <Themes />,
          welcome: <Welcome />,
          whoami: <GeneralOutput cmd="whoami">visitor</GeneralOutput>,
        }[cmd]
      }
    </OutputContainer>
  );
};

export default Output;
