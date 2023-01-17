import _ from "lodash";
import theme from "../components/styles/themes";

/**
 * Generates html tabs
 * @param {number} num - The number of tabs
 * @returns {string} tabs - Tab string
 */
export const generateTabs = (num = 0): string => {
  let tabs = "\xA0\xA0";
  for (let i = 0; i < num; i++) {
    tabs += "\xA0";
  }
  return tabs;
};

/**
 * Check arg is valid
 * @param {string[]} arg - The arg array
 * @param {string} action - The action to compare | "go" | "set"
 * @param {string[]} options - Option array to compare | "dark" | "1"
 * @returns {boolean} boolean
 */
export const isArgInvalid = (
  arg: string[],
  action: string,
  options: string[]
) => arg[0] !== action || !_.includes(options, arg[1]) || arg.length > 2;

/**
 * Transform current cmd & arg into array
 * then return back the array
 * @param {string[]} history - The history array
 * @returns {string[]} array of cmd string
 */
export const getCurrentCmdArry = (history: string[]) =>
  _.split(history[0].trim(), " ");

/**
 * Check current render makes redirect
 * @param {boolean} rerender - is submitted or not
 * @param {string[]} currentCommand - current submitted command
 * @param {string} command - the command of the function
 * @returns {boolean} redirect - true | false
 */
export const checkRedirect = (
  rerender: boolean,
  currentCommand: string[],
  command: string
): boolean =>
  rerender && // is submitted
  currentCommand[0] === command && // current command starts with ('socials'|'projects')
  currentCommand[1] === "go" && // first arg is 'go'
  currentCommand.length > 1 && // current command has arg
  currentCommand.length < 4 && // if num of arg is valid (not `projects go 1 sth`)
  _.includes([1, 2, 3, 4], parseInt(currentCommand[2])); // arg last part is one of id

/**
 * Check current render makes redirect for theme
 * @param {boolean} rerender - is submitted or not
 * @param {string[]} currentCommand - current submitted command
 * @param {string[]} themes - the command of the function
 * @returns {boolean} redirect - true | false
 */
export const checkThemeSwitch = (
  rerender: boolean,
  currentCommand: string[],
  themes: string[]
): boolean =>
  rerender && // is submitted
  currentCommand[0] === "themes" && // current command starts with 'themes'
  currentCommand[1] === "set" && // first arg is 'set'
  currentCommand.length > 1 && // current command has arg
  currentCommand.length < 4 && // if num of arg is valid (not `themes set light sth`)
  _.includes(themes, currentCommand[2]); // arg last part is one of id

/**
 * Perform advanced tab actions
 * @param {string} inputVal - current input value
 * @param {(value: React.SetStateAction<string>) => void} setInputVal - setInputVal setState
 * @param {(value: React.SetStateAction<string[]>) => void} setHints - setHints setState
 * @param {hintsCmds} hintsCmds - hints command array
 * @returns {string[] | undefined} hints command or setState action(undefined)
 */
export const argTab = (
  inputVal: string,
  setInputVal: (value: React.SetStateAction<string>) => void,
  setHints: (value: React.SetStateAction<string[]>) => void,
  hintsCmds: string[]
): string[] | undefined => {
  // 1) if input is 'themes '
  if (inputVal === "themes ") {
    setInputVal(`themes set`);
    return [];
  }

  // 2) if input is 'themes s'
  else if (
    _.startsWith("themes", _.split(inputVal, " ")[0]) &&
    _.split(inputVal, " ")[1] !== "set" &&
    _.startsWith("set", _.split(inputVal, " ")[1])
  ) {
    setInputVal(`themes set`);
    return [];
  }

  // 3) if input is 'themes set '
  else if (inputVal === "themes set ") {
    setHints(_.keys(theme));
    return [];
  }

  // 4) if input starts with 'themes set ' + theme
  else if (_.startsWith(inputVal, "themes set ")) {
    _.keys(theme).forEach(t => {
      if (_.startsWith(t, _.split(inputVal, " ")[2])) {
        hintsCmds = [...hintsCmds, t];
      }
    });
    return hintsCmds;
  }

  // 5) if input is 'projects' or 'socials'
  else if (inputVal === "projects " || inputVal === "socials ") {
    setInputVal(`${inputVal}go`);
    return [];
  }

  // 6) if input is 'projects g' or 'socials g'
  else if (inputVal === "projects g" || inputVal === "socials g") {
    setInputVal(`${inputVal}o`);
    return [];
  }

  // 7) if input is 'socials go '
  else if (_.startsWith(inputVal, "socials go ")) {
    ["1.Github", "2.Dev.to", "3.Facebook", "4.Instagram"].forEach(t => {
      hintsCmds = [...hintsCmds, t];
    });
    return hintsCmds;
  }

  // 8) if input is 'projects go '
  else if (_.startsWith(inputVal, "projects go ")) {
    [
      "1.Sat Naing's Blog",
      "2.Haru Fashion",
      "3.Haru API",
      "4.AstroPaper Blog Theme",
    ].forEach(t => {
      hintsCmds = [...hintsCmds, t];
    });
    return hintsCmds;
  }
};
