import _ from "lodash";
import { useEffect, useRef } from "react";
import { commands } from "../App";

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
    <>
      {
        {
          about: <About />,
          whoami: <span>visitor</span>,
          echo: <Echo arg={arg} />,
          clear: <Clear clearHistory={clearHistory} />,
          history: <History index={index} cmd={cmd} history={history} />,
          help: <Help />,
        }[cmd]
      }
    </>
  );
};

const About = () => {
  console.log("about");
  return (
    <div>
      <p>Hi, my name is Sat Naing!</p>
      <p>I'm a full-stack developer</p>
    </div>
  );
};

const Help = () => (
  <>
    {commands.map((cmd) => (
      <div key={cmd.cmd}>
        <span>{cmd.cmd}</span> <span>{cmd.desc}</span>
      </div>
    ))}
  </>
);

const History: React.FC<{ index: number; history: string[]; cmd: string }> = ({
  history,
  index,
}) => {
  const haha = _.slice(history, 0, index + 1);
  return (
    <>
      {haha.map((cmd) => (
        <div key={_.uniqueId(`${cmd}_`)}>{cmd}</div>
      ))}
    </>
  );
};

const Clear: React.FC<{ clearHistory: () => void }> = ({ clearHistory }) => {
  console.log("clear");
  useEffect(() => {
    clearHistory();
  }, []);
  return <></>;
};

const Echo: React.FC<{ arg: string[] | string }> = ({ arg }) => {
  console.log("echo");
  let argStr = _.trim(_.trim(_.join(arg, " "), "'"), '"');
  return (
    <div>
      <span>{argStr}</span>
    </div>
  );
};

export default Output;
