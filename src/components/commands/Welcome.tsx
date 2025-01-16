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
                                /$$              /$$$$$$  /$$$$$$
                               |__/             /$$__  $$|_  $$_/
  /$$$$$$   /$$$$$$  /$$$$$$$  /$$  /$$$$$$$   | $$   \ $$  | $$  
 /$$__  $$ /$$__  $$| $$__  $$| $$ /$$_____/   | $$$$$$$$  | $$  
| $$  \  $$| $$$$$$$$| $$  \  $$| $$ |  $$$$$$   | $$__  $$  | $$  
| $$  | $$| $$_____/| $$  | $$| $$  \___   $$   | $$  | $$  | $$  
| $$$$$$$/|  $$$$$$$| $$  | $$| $$ /$$$$$$$//$$| $$  | $$ /$$$$$$
| $$____/   \_______/|__/  |__/|__/|_______/|__/|__/  |__/|______/
| $$                                                             
| $$ Exclusively on Solana.                                                         
|__/                                                              
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
        <div>Welcome to penis.AI terminal. [Version 1.0.1]</div>
        <Seperator>----</Seperator>
        <div>
          Some things are hard, not me. For now....{" "}
          
          
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
⠀⠀⠀⠀⠀⠀⠀⠀$$$$$$$$⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀$$$$⠀$$$$$$⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀$$$⠀⠀⠀⠀⠀⠀⠀$$$⠀⠀⠀⠀⠀
⠀⠀⠀⠀$$$⠀⠀⠀⠀⠀⠀⠀⠀⠀$$$⠀⠀⠀⠀
⠀⠀⠀⠀$$$⠀⠀⠀$$$⠀⠀⠀⠀$$⠀⠀⠀⠀
⠀⠀⠀⠀⠀$$$$$$$$$$$$$$⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀$$$$⠀⠀⠀⠀$$$$⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀$$⠀⠀⠀⠀⠀⠀⠀⠀$$⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀$$⠀⠀⠀⠀⠀⠀⠀⠀$$⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀$$⠀⠀⠀⠀⠀⠀⠀⠀$$⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀$$⠀⠀⠀⠀⠀⠀⠀⠀$$⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀$$⠀⠀⠀⠀⠀⠀⠀⠀$$⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀$$⠀⠀⠀⠀⠀⠀⠀⠀$$⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀$$⠀⠀$$⠀⠀⠀⠀$$⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀$$$$$$⠀⠀⠀⠀$$⠀⠀⠀⠀⠀
⠀⠀⠀$$$$$$$$⠀⠀⠀⠀⠀$$$$⠀⠀⠀
⠀$$$$$$⠀⠀⠀⠀⠀⠀⠀⠀⠀$$$$$$⠀
$$$⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀$$$
$$⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀$$
$$⠀⠀⠀⠀⠀⠀$$$⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀$$
$$$⠀⠀⠀⠀⠀⠀$$⠀⠀⠀⠀⠀⠀⠀⠀⠀$$$
⠀$$$$⠀⠀⠀⠀$$$$$⠀⠀⠀⠀$$$$$
⠀⠀$$$$$$$$$$$$$$$$$$$⠀⠀
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
