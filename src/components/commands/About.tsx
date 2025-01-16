import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        <HighlightSpan>Penis.AI</HighlightSpan>
      </p>
      <p>
        Penis.AI Terminal<HighlightAlt> is a decentralized platform build on Solana,</HighlightAlt> designed to integrate advanced AI functionalities with the speed and efficiency of blockchain technology.
      </p>
      <p>
      It’s hard, it’s fast, and it doesn’t apologize for delivering exactly what you didn’t know you needed. <br>
      </br>
      Because in a world full of soft ideas, someone had to go all in.






<br />
      </p>
    </AboutWrapper>
  );
};

export default About;
