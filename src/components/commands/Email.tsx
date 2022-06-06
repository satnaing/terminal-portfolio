import { useContext } from "react";
import _ from "lodash";
import { UsageDiv, Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const Email: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

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
