import About from "./commands/About";
import Clear from "./commands/Clear";
import Echo from "./commands/Echo";
import Help from "./commands/Help";
import HeroSection from "./commands/HeroSection";
import History from "./commands/History";
import { OutputContainer } from "./styles/Output.styled";

type Props = {
  index: number;
  cmd: string;
  arg: string[] | string;
  history: string[];
  clearHistory: () => void;
};

const Output: React.FC<Props> = ({
  cmd,
  arg,
  clearHistory,
  history,
  index,
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
        }[cmd]
      }
    </OutputContainer>
  );
};

export default Output;
