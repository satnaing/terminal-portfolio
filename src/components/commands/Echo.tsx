import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";

const Echo: React.FC<{ arg: string[] | string }> = ({ arg }) => {
  let argStr = _.trim(_.trim(_.join(arg, " "), "'"), '"');
  return (
    <Wrapper>
      <span>{argStr}</span>
    </Wrapper>
  );
};

export default Echo;
