import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  const host = window.location.hostname;
  return (
    <Wrapper>
      <User>visitor</User>@<WebsiteName>${host}</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
