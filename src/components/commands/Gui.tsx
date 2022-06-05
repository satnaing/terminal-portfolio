import _ from "lodash";
import { UsageDiv } from "../styles/Output.styled";

const Gui: React.FC<{
  arg: string[];
  history: string[];
  rerender: boolean;
}> = ({ arg, history, rerender }) => {
  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  /* ===== check current command makes redirect ===== */
  if (rerender && currentCommand[0] === "gui") {
    window.open("https://satnaing.dev/", "_blank");
  }

  return arg.length > 0 ? <UsageDiv>Usage: gui</UsageDiv> : <span></span>;
};

export default Gui;
