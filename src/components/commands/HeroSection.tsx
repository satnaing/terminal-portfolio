import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/HeroSection.styled";
import { UsageDiv } from "../styles/Output.styled";

const HeroSection: React.FC<{ arg: string[] }> = ({ arg }) => {
  return arg.length > 0 ? (
    <UsageDiv>Usage: about</UsageDiv>
  ) : (
    <HeroContainer>
      <div className="info-section">
        <PreName>
          {`        
    _____       __     _   __      _            
   / ___/____ _/ /_   / | / /___ _(_)___  ____ _
   \\__ \\/ __ \`/ __/  /  |/ / __ \`/ / __ \/ __ \`/
  ___/ / /_/ / /_   / /|  / /_/ / / / / / /_/ / 
 /____/\\__,_/\\___/ /_/ |_/\\__,_/_/_/ /_/\\__, /  
                                       /____/   
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
    ____     __          
   / __/__ _/ /_         
  _\\ \\/ _ \`/ __/         
 /___/\\_,_/\\__/          
    _  __     _          
   / |/ /__ _(_)__  ___ _
  /    / _ \`/ / _ \\/ _ \`/
 /_/|_/\\_,_/_/_//_/\\_, / 
                  /___/  
 
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. (Version 1.0.0)</div>
        <Seperator>----</Seperator>
        <div>
          This project's repo link can be seen{" "}
          <Link href="https://github.com/satnaing/terminal-portfolio">
            here
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                       ,##,,eew,
                     ,##############C
                  a###############@##
                 7####^\`^"7W7^"@####
                 @#@b\`         ^@#@^
                  ##^,,,,   ,,,,^#^
                 ,,@######"#######=
                  .''555"\` '5555b|
                  T"@  ,,,^,mg,@,*
                     %p||\`~~'.#\`
                      ^Wp  ,#T
                     :b''@@b^}
                  ,^  \   \` 'b 3-
              .<\` 'p   ^v   #   b   *.
            {      }   #"GpGb   [
            C      3 * @#######Nl      \`
           '            ^@##b     ($    !
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default HeroSection;
