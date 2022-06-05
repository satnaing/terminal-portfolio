import _ from "lodash";
import { UsageDiv, Wrapper } from "../styles/Output.styled";

const Email: React.FC<{
  arg: string[];
  rerender: boolean;
  history: string[];
}> = ({ rerender, history, arg }) => {
  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  if (rerender && currentCommand[0] === "email" && arg.length < 1) {
    // location.href = "mailto:" + "satnaing.dev@gmail.com";
    window.open("mailto:" + "satnaing.dev@gmail.com", "_self");
  }

  return arg.length > 0 ? (
    <UsageDiv>Usage: email</UsageDiv>
  ) : (
    <Wrapper>
      <span>satnaing.dev@gmail.com</span>
    </Wrapper>
  );
};

export default Email;
