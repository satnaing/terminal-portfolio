import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`             
              _       _     _            
             (_)     | |   | |           
    __ _ _ __ _  __ _| | __| | _____   __
   / _  |  __| |/ _  | |/ _  |/ _ \\ \\ / /
  | (_| | |  | | (_| | | (_| |  __/\\ V / 
   \\__,_|_|  |_|\\__,_|_|\\__,_|\\___| \\_/  
         `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`             
         _      _    _         
 __ _ _ _(_)__ _| |__| |_____ __
/ _\` | '_| / _\` | / _\` / -_\\ V /
\\__,_|_| |_\\__,_|_\\__,_\\___|\\_/ 
         `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. (Version 1.3.1)</div>
        <Seperator>----</Seperator>
        <div>
          This project's source code can be found in this project's{" "}
          <Link href="https://github.com/arialdev/terminal-portfolio">
            GitHub repo
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
                                 &#BBBB####&           
                               &#BBBBBB####BB&         
                              &#G5JJ??JY5GBBBG&        
                             &GY!~~^^^~~~!!7?PG&       
                             &P!~~~~~~~~~~!!!?P&       
                             #Y????7!~!!!7777YG        
                            &Y7?Y5PPJ7J5PP55JJG&       
                            &?!!7???7~JYYYYJ??J#       
                            &7~~!!!!~~7?7!!!!7P        
                             5!?5JY5JY5YJ?!775&        
                             #555JY55PGGPGJJY          
                             #GB57?JYYJ?YPGPG          
                          #G5PBPBPPPGGPPBBPBP5#        
                      &#G5Y5GGB?75GBBB#BPYPBPY?5B&     
                   #B5JJYPGBBPB7~~!7?JJ?JPBG5Y?JYJ5P#& 
                 &5YYY5PGGGGPPG?!!!!77?YGBBP5YJJ5?!!7?Y
                 5YY55GBBBBPG5PPY??Y555GGPP55YYJY5?!?JP
                #YY5Y5GGBBPPBPB##BGBG5GGP5B#BGPY?YYJ5PG
                GYY5YPGBGPPGGG#BBGPGBGBP55G&BGGGGPPG5PP
                PY55PGBGP5PBBBGGGG5GBGP5PBBBGPPPGBGP5P5
               #JY55GBGP55P#BGGGGGGBG55B#BGPP55PPGGP5GP
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
