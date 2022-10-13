import { useContext } from "react";
import _ from "lodash";
import { UsageDiv, Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const History: React.FC = () => {
  const { arg, history, index } = useContext(termContext);

  const currentHistory = _.reverse(_.slice(history, index));
  return arg.length > 0 ? (
    <UsageDiv>Usage: history</UsageDiv>
  ) : (
    <Wrapper>
      {currentHistory.map(cmd => (
        <div key={_.uniqueId(`${cmd}_`)}>{cmd}</div>
      ))}
    </Wrapper>
  );
};

export default History;
