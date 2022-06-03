import _ from "lodash";

const History: React.FC<{ index: number; history: string[]; cmd: string }> = ({
  history,
  index,
}) => {
  const haha = _.slice(history, 0, index + 1);
  return (
    <>
      {haha.map((cmd) => (
        <div key={_.uniqueId(`${cmd}_`)}>{cmd}</div>
      ))}
    </>
  );
};

export default History;
