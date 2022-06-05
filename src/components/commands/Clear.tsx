import { useEffect } from "react";
import { UsageDiv } from "../styles/Output.styled";

const Clear: React.FC<{ arg: string[]; clearHistory: () => void }> = ({
  arg,
  clearHistory,
}) => {
  useEffect(() => {
    if (arg.length < 1) clearHistory();
  }, []);
  return arg.length > 0 ? <UsageDiv>Usage: clear</UsageDiv> : <></>;
};

export default Clear;
