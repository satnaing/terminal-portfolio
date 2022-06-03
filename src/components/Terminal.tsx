import React, { useCallback, useEffect, useRef, useState } from "react";
import _ from "lodash";
import Output from "./Output";
import { CmdNotFound, Wrapper } from "./styles/Terminal.styled";
import TermInfo from "./TermInfo";

type Command = {
  cmd: string;
  desc?: string;
}[];

export const commands: Command = [
  { cmd: "whoami", desc: "about current user" },
  { cmd: "about", desc: "about Sat Naing" },
  { cmd: "projects", desc: "view projects that I've coded" },
  { cmd: "edu-bg", desc: "my education background" },
  { cmd: "email", desc: "send an email to me" },
  { cmd: "clear", desc: "clear the terminal" },
  { cmd: "help", desc: "check available commands" },
  { cmd: "echo", desc: "print out anything" },
  { cmd: "history", desc: "view command history" },
  { cmd: "hero-section", desc: "display hero section" },
  { cmd: "socials", desc: "check out my social accounts" },
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
    setCmdHistory([...cmdHistory, inputVal]);
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
    </Wrapper>
  );
};

export default Terminal;
