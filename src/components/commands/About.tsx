import { useContext } from "react";
import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";
import { UsageDiv } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const About: React.FC = () => {
  const { arg } = useContext(termContext);
  return arg.length > 0 ? (
    <UsageDiv>Usage: about</UsageDiv>
  ) : (
    <AboutWrapper data-testid="about">
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
