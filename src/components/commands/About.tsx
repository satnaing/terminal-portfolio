import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";
import { Cmd } from "../styles/Help.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is Álvaro Rivas, also known as{" "}
        <HighlightSpan>Arialdev</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a full-stack software engineer</HighlightAlt> based in
        Madrid, Spain.
      </p>
      <p>
        I am passionate about writing codes and <br />
        developing web applications to solve real-life challenges.
      </p>
      <p>
        You can find me on Twitter <HighlightSpan>@arialdev</HighlightSpan> or
        in any of my other
        <br />
        social media. For seeing them all type the command <Cmd>socials</Cmd>.
      </p>
    </AboutWrapper>
  );
};

export default About;
