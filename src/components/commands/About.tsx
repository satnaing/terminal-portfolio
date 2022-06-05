import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";
import { UsageDiv } from "../styles/Output.styled";

const About: React.FC<{ arg: string[] }> = ({ arg }) => {
  return arg.length > 0 ? (
    <UsageDiv>Usage: about</UsageDiv>
  ) : (
    <AboutWrapper>
      <p>
        Hi, my name is <HighlightSpan>Sat Naing</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a full-stack developer</HighlightAlt> based in Yangon,
        Myanmar.
      </p>
      <p>
        I am passionate about writing codes and <br />
        developing web applications to solve real-life challenges.
      </p>
    </AboutWrapper>
  );
};

export default About;
