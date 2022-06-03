import _ from "lodash";

const Echo: React.FC<{ arg: string[] | string }> = ({ arg }) => {
  console.log("echo");
  let argStr = _.trim(_.trim(_.join(arg, " "), "'"), '"');
  return (
    <div>
      <span>{argStr}</span>
    </div>
  );
};

export default Echo;
