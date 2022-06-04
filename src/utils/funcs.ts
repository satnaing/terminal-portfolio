import _ from "lodash";

/**
 * Generates html tabs
 * @param {number} num - The number of tabs
 * @returns {string} tabs - Tab string
 */
export const generateTabs = (num: number = 0): string => {
  let tabs = "\xA0\xA0";
  for (let i = 0; i < num; i++) {
    tabs += "\xA0";
  }
  return tabs;
};

/**
 * Check current render makes redirect
 * @param {string[]} arg - arg of the command
 * @param {boolean} rerender - is submitted or not
 * @param {string[]} currentCommand - current submitted command
 * @param {string} command - the command of the function
 * @returns {boolean} redirect - true | false
 */
export const checkRedirect = (
  arg: string[],
  rerender: boolean,
  currentCommand: string[],
  command: string
): boolean => {
  if (
    arg.length > 0 && // contains arg
    arg[0] === "go" && // first arg is 'go'
    rerender && // is submitted
    currentCommand[0] === command && // current command starts with ('socials'|'projects')
    currentCommand.length > 1 && // current command has arg
    _.includes([1, 2, 3, 4], parseInt(currentCommand[2])) // arg last part is one of id
  ) {
    return true;
  } else {
    return false;
  }
};
