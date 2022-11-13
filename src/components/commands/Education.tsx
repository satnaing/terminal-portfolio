import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "Computer Science Engineering",
    desc: "Rey Juan Carlos University | 2017 ~ 2022",
  },
  {
    title: "JavaScript: The Advanced Concepts (2022 Update)",
    desc: "Zero to Mastery Academy | 2022",
  },
  {
    title: "Software Engineering",
    desc: "Rey Juan Carlos University | 2017 - 2021",
  },
  {
    title: "C1 Advanced English Certificate",
    desc: "Cambridge University | 2018",
  },
];

export default Education;
