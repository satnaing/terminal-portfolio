import { commands } from "../Terminal";

const Help = () => (
  <>
    {commands.map((cmd) => (
      <div key={cmd.cmd}>
        <span>{cmd.cmd}</span> <span>{cmd.desc}</span>
      </div>
    ))}
  </>
);

export default Help;
