import {
  Cmd,
  HeroContainer,
  Link,
  PreName,
  Seperator,
} from "../styles/HeroSection.styled";

const HeroSection = () => {
  return (
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
          For a list of available commands, type `<Cmd>help</Cmd>` or `
          <Cmd>?</Cmd>`
        </div>
      </div>
      <div className="illu-section">
        <pre>
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
        </pre>
      </div>
    </HeroContainer>
  );
};

export default HeroSection;
