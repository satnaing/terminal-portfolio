import { useContext } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const Echo: React.FC = () => {
  const { arg } = useContext(termContext);
  let argStr = _.trim(_.trim(_.join(arg, " "), "'"), '"');
  return <Wrapper>{argStr}</Wrapper>;
};

export default Echo;
