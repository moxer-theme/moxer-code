import * as path from "path";
import { generateTheme, IColorSet } from "vscode-theme-generator";
import * as Moxer from "./themes/moxer";

const themes = [Moxer];

themes.forEach(theme => {
  const colors = {
    ui: {
      background: theme.ui.background
    },
    base: {
      white: "#ffffff",
      black: "#000000",
      red: "#FF5370",
      orange: "#F78C6C",
      yellow: "#FFCB6B",
      green: "#C3E88D",
      cyan: "#89DDFF",
      blue: "#82AAFF",
      paleblue: "#B2CCD6",
      purple: "#C792EA",
      brown: "#C17E70",
      pink: "#f07178",
      violet: "#bb80b3"
    }
  };

  const colorSet: IColorSet = {
    base: {
      background: colors.ui.background,
      foreground: colors.base.white,
      // Determines boolean, identifier, keyword, storage, and cssClass
      color1: colors.base.blue,
      // Determines string, stringEscape, and cssId
      color2: colors.base.red,
      // Determines function, class, classMember, type, and cssTag
      color3: colors.base.green,
      // Determines functionCall and number
      color4: colors.base.yellow
    },
    terminal: {
      blue: colors.base.blue,
      brightBlue: colors.base.blue,
      white: colors.base.white,
      brightWhite: colors.base.white,
      black: colors.base.black,
      brightBlack: colors.base.black,
      cyan: colors.base.cyan,
      brightCyan: colors.base.cyan,
      green: colors.base.green,
      brightGreen: colors.base.green,
      magenta: colors.base.purple,
      brightMagenta: colors.base.purple,
      red: colors.base.red,
      brightRed: colors.base.red,
      yellow: colors.base.yellow,
      brightYellow: colors.base.yellow
    }
  };

  generateTheme(
    theme.name,
    colorSet,
    path.join(__dirname, `build/${theme.name}.json`)
  );
});
