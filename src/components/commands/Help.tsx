import {
  Cmd,
  CmdDesc,
  CmdList,
  HelpWrapper,
  KeyContainer,
} from "../styles/Help.styled";
import { commands } from "../Terminal";
import _ from "lodash";

const Help = () => {
  const generateTabs = (num: number = 0) => {
    let tabs = "\xA0\xA0";
    for (let i = 0; i < num; i++) {
      tabs += "\xA0";
    }
    return tabs;
  };
  return (
    <HelpWrapper>
      {commands.map(({ cmd, desc, tab }) => (
        <CmdList key={cmd}>
          <Cmd>{cmd}</Cmd>
          {generateTabs(tab!)}
          <CmdDesc>- {desc}</CmdDesc>
        </CmdList>
      ))}
      <KeyContainer>
        <div>Tab or Ctrl + i&nbsp; =&gt; autocompletes the command</div>
        <div>Up Arrow {generateTabs(5)} =&gt; go back to previous command</div>
        <div>Ctrl + l {generateTabs(5)} =&gt; clear the terminal</div>
      </KeyContainer>
    </HelpWrapper>
  );
};

export default Help;
