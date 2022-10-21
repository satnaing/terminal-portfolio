import { useContext } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const Echo: React.FC = () => {
  const { arg } = useContext(termContext);

  let outputStr = _.join(arg, " ");
  outputStr = _.trim(outputStr, "'"); // remove trailing single quotes ''
  outputStr = _.trim(outputStr, '"'); // remove trailing double quotes ""
  outputStr = _.trim(outputStr, "`"); // remove trailing backtick ``

  return <Wrapper>{outputStr}</Wrapper>;
};

export default Echo;
