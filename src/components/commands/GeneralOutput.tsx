import { UsageDiv, Wrapper } from "../styles/Output.styled";

const GeneralOutput: React.FC<{
  children: string;
  arg: string[];
  cmd: string;
}> = ({ arg, cmd, children }) => {
  return arg.length > 0 ? (
    <UsageDiv>Usage: {cmd}</UsageDiv>
  ) : (
    <Wrapper>{children}</Wrapper>
  );
};

export default GeneralOutput;
