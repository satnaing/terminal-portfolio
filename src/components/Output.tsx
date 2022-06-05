import About from "./commands/About";
import Clear from "./commands/Clear";
import Echo from "./commands/Echo";
import Email from "./commands/Email";
import GeneralOutput from "./commands/GeneralOutput";
import Help from "./commands/Help";
import HeroSection from "./commands/HeroSection";
import History from "./commands/History";
import Projects from "./commands/Projects";
import Socials from "./commands/Socials";
import Themes from "./commands/Themes";
import { OutputContainer } from "./styles/Output.styled";

type Props = {
  rerender: boolean;
  index: number;
  cmd: string;
  arg: string[];
  history: string[];
  clearHistory: () => void;
};

const Output: React.FC<Props> = ({
  cmd,
  arg,
  clearHistory,
  history,
  index,
  rerender,
}) => {
  return (
    <OutputContainer>
      {
        {
          about: <About arg={arg} />,
          whoami: (
            <GeneralOutput arg={arg} cmd="whoami">
              visitor
            </GeneralOutput>
          ),
          echo: <Echo arg={arg} />,
          clear: <Clear arg={arg} clearHistory={clearHistory} />,
          history: <History arg={arg} index={index} history={history} />,
          help: <Help arg={arg} />,
          "hero-section": <HeroSection arg={arg} />,
          pwd: (
            <GeneralOutput arg={arg} cmd="pwd">
              /home/satnaing
            </GeneralOutput>
          ),
          projects: (
            <Projects arg={arg} history={history} rerender={rerender} />
          ),
          socials: <Socials arg={arg} history={history} rerender={rerender} />,
          email: <Email arg={arg} history={history} rerender={rerender} />,
          themes: <Themes arg={arg} history={history} rerender={rerender} />,
        }[cmd]
      }
    </OutputContainer>
  );
};

export default Output;
