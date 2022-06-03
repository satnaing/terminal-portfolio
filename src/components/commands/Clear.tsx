import { useEffect } from "react";

const Clear: React.FC<{ clearHistory: () => void }> = ({ clearHistory }) => {
  console.log("clear");
  useEffect(() => {
    clearHistory();
  }, []);
  return <></>;
};

export default Clear;
