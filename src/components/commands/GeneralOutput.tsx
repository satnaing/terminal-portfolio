import { Wrapper } from "../styles/Output.styled";

type Props = {
  children: string;
};

const GeneralOutput: React.FC<Props> = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);
export default GeneralOutput;
