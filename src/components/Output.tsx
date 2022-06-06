import About from "./commands/About";
import Clear from "./commands/Clear";
import Echo from "./commands/Echo";
import EduBg from "./commands/EduBg";
import Email from "./commands/Email";
import GeneralOutput from "./commands/GeneralOutput";
import Gui from "./commands/Gui";
import Help from "./commands/Help";
import HeroSection from "./commands/HeroSection";
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
          whoami: <GeneralOutput cmd="whoami">visitor</GeneralOutput>,
          echo: <Echo />,
          clear: <Clear />,
          history: <History />,
          help: <Help />,
          "hero-section": <HeroSection />,
          pwd: <GeneralOutput cmd="pwd">/home/satnaing</GeneralOutput>,
          projects: <Projects />,
          socials: <Socials />,
          email: <Email />,
          themes: <Themes />,
          gui: <Gui />,
          "edu-bg": <EduBg />,
        }[cmd]
      }
    </OutputContainer>
  );
};

export default Output;
