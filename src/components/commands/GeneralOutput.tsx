import { useContext } from "react";
import { UsageDiv, Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const GeneralOutput: React.FC<{
  children: string;
  cmd: string;
}> = ({ cmd, children }) => {
  const { arg } = useContext(termContext);
  return arg.length > 0 ? (
    <UsageDiv>Usage: {cmd}</UsageDiv>
  ) : (
    <Wrapper data-testid={`valid-cmd-${cmd}`}>{children}</Wrapper>
  );
};

export default GeneralOutput;
