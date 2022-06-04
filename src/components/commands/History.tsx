import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";

const History: React.FC<{ index: number; history: string[]; cmd: string }> = ({
  history,
  index,
}) => {
  const currentHistory = _.reverse(_.slice(history, index));
  return (
    <Wrapper>
      {currentHistory.map((cmd) => (
        <div key={_.uniqueId(`${cmd}_`)}>{cmd}</div>
      ))}
    </Wrapper>
  );
};

export default History;
