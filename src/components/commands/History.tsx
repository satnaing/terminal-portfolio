import _ from "lodash";

const History: React.FC<{ index: number; history: string[]; cmd: string }> = ({
  history,
  index,
}) => {
  const currentHistory = _.reverse(_.slice(history, index));
  return (
    <>
      {currentHistory.map((cmd) => (
        <div key={_.uniqueId(`${cmd}_`)}>{cmd}</div>
      ))}
    </>
  );
};

export default History;
