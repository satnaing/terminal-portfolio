import { useContext } from "react";
import _ from "lodash";
import { UsageDiv } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const Gui: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  /* ===== check current command makes redirect ===== */
  if (rerender && currentCommand[0] === "gui") {
    window.open("https://satnaing.dev/", "_blank");
  }

  return arg.length > 0 ? <UsageDiv>Usage: gui</UsageDiv> : <span></span>;
};

export default Gui;
