import React, { useCallback, useEffect, useRef, useState } from "react";
import _ from "lodash";
import Output from "./Output";
import { CmdNotFound, Wrapper } from "./styles/Terminal.styled";
import TermInfo from "./TermInfo";

type Command = {
  cmd: string;
  desc?: string;
  tab?: number;
}[];

export const commands: Command = [
  { cmd: "whoami", desc: "about current user", tab: 7 },
  { cmd: "about", desc: "about Sat Naing", tab: 8 },
  { cmd: "projects", desc: "view projects that I've coded", tab: 5 },
  { cmd: "edu-bg", desc: "my education background", tab: 7 },
  { cmd: "email", desc: "send an email to me", tab: 8 },
  { cmd: "clear", desc: "clear the terminal", tab: 8 },
  { cmd: "help", desc: "check available commands", tab: 9 },
  { cmd: "echo", desc: "print out anything", tab: 9 },
  { cmd: "history", desc: "view command history", tab: 6 },
  { cmd: "hero-section", desc: "display hero section", tab: 1 },
  { cmd: "socials", desc: "check out my social accounts", tab: 6 },
];

const Terminal = () => {
  const containerRef = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [inputVal, setInputVal] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputVal(e.target.value);
    },
    [inputVal]
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCmdHistory([inputVal, ...cmdHistory]);
    setInputVal("");
  };

  const clearHistory = () => {
    setCmdHistory([]);
  };

  // focus on input when terminal is clicked
  const handleDivClick = () => {
    inputRef.current && inputRef.current.focus();
  };
  useEffect(() => {
    document.addEventListener("click", handleDivClick);
    return () => {
      document.removeEventListener("click", handleDivClick);
    };
  }, [containerRef]);

  return (
    <Wrapper ref={containerRef}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="terminal-input">
          <TermInfo />
        </label>
        <input
          title="terminal-input"
          type="text"
          id="terminal-input"
          autoComplete="off"
          autoFocus
          ref={inputRef}
          value={inputVal}
          onChange={handleChange}
        />
      </form>

      {cmdHistory.map((cmdH, index) => {
        const commandArray = _.split(cmdH, " ");
        const validCommand = _.find(commands, { cmd: commandArray[0] });
        return (
          <div key={_.uniqueId(`${cmdH}_`)}>
            <div>
              <TermInfo />
              <span>{cmdH}</span>
            </div>
            {validCommand ? (
              <Output
                index={index}
                cmd={commandArray[0]}
                arg={_.drop(commandArray)}
                clearHistory={clearHistory}
                history={cmdHistory}
              />
            ) : (
              <CmdNotFound>command not found: {cmdH}</CmdNotFound>
            )}
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Terminal;
