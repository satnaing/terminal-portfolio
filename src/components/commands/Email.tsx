import _ from "lodash";
import { useEffect } from "react";
import { Wrapper } from "../styles/Output.styled";

const Email: React.FC<{ rerender: boolean; history: string[] }> = ({
  rerender,
  history,
}) => {
  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  if (rerender && currentCommand[0] === "email") {
    // location.href = "mailto:" + "satnaing.dev@gmail.com";
    window.open("mailto:" + "satnaing.dev@gmail.com", "_self");
  }

  console.log("email");
  return (
    <Wrapper>
      <span>satnaing.dev@gmail.com</span>
    </Wrapper>
  );
};

export default Email;
// <{ arg: string[] | string }>
