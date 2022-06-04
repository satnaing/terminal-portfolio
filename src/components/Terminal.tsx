import React, { useCallback, useEffect, useRef, useState } from "react";
import _ from "lodash";
import Output from "./Output";
import TermInfo from "./TermInfo";
import {
  CmdNotFound,
  Empty,
  Form,
  Input,
  MobileBr,
  MobileSpan,
  Wrapper,
} from "./styles/Terminal.styled";

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
  { cmd: "pwd", desc: "print current working directory", tab: 10 },
];

const Terminal = () => {
  const containerRef = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [inputVal, setInputVal] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>(["hero-section"]);
  const [rerender, setRerender] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setRerender(false);
      setInputVal(e.target.value);
    },
    [inputVal]
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCmdHistory([inputVal, ...cmdHistory]);
    setInputVal("");
    setRerender(true);
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
      <Form onSubmit={handleSubmit}>
        <label htmlFor="terminal-input">
          <TermInfo /> <MobileBr />
          <MobileSpan>&#62;</MobileSpan>
        </label>
        <Input
          title="terminal-input"
          type="text"
          id="terminal-input"
          autoComplete="off"
          autoFocus
          ref={inputRef}
          value={inputVal}
          onChange={handleChange}
        />
      </Form>

      {cmdHistory.map((cmdH, index) => {
        const commandArray = _.split(_.trim(cmdH), " ");
        const validCommand = _.find(commands, { cmd: commandArray[0] });
        return (
          <div key={_.uniqueId(`${cmdH}_`)}>
            <div>
              <TermInfo />
              <MobileBr />
              <MobileSpan>&#62;</MobileSpan>
              <span>{cmdH}</span>
            </div>
            {validCommand ? (
              <Output
                index={index}
                cmd={commandArray[0]}
                arg={_.drop(commandArray)}
                clearHistory={clearHistory}
                history={cmdHistory}
                rerender={rerender}
              />
            ) : cmdH === "" ? (
              <Empty />
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
