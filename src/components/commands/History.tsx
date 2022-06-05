import _ from "lodash";
import { UsageDiv, Wrapper } from "../styles/Output.styled";

const History: React.FC<{
  index: number;
  history: string[];
  arg: string[];
}> = ({ history, index, arg }) => {
  const currentHistory = _.reverse(_.slice(history, index));
  return arg.length > 0 ? (
    <UsageDiv>Usage: history</UsageDiv>
  ) : (
    <Wrapper>
      {currentHistory.map((cmd) => (
        <div key={_.uniqueId(`${cmd}_`)}>{cmd}</div>
      ))}
    </Wrapper>
  );
};

export default History;
