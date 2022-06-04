import About from "./commands/About";
import Clear from "./commands/Clear";
import Echo from "./commands/Echo";
import Help from "./commands/Help";
import HeroSection from "./commands/HeroSection";
import History from "./commands/History";
import Projects from "./commands/Projects";
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
          about: <About />,
          whoami: <span>visitor</span>,
          echo: <Echo arg={arg} />,
          clear: <Clear clearHistory={clearHistory} />,
          history: <History index={index} cmd={cmd} history={history} />,
          help: <Help />,
          "hero-section": <HeroSection />,
          pwd: "/home/satnaing",
          projects: (
            <Projects arg={arg} history={history} rerender={rerender} />
          ),
        }[cmd]
      }
    </OutputContainer>
  );
};

export default Output;
