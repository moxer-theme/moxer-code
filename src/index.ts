import * as path from "path";
import { generateTheme, IColorSet } from "vscode-theme-generator";
import * as Moxer from "./themes/moxer.js";

const themes = [Moxer];

themes.forEach(theme => {
  const colorSet: IColorSet = {
    base: {
      background: theme.ui.background,
      foreground: theme.base.white,
      // Determines boolean, identifier, keyword, storage, and cssClass
      color1: theme.base.red,
      // Determines string, stringEscape, and cssId
      color2: theme.base.green,
      // Determines function, class, classMember, type, and cssTag
      color3: theme.base.yellow,
      // Determines functionCall and number
      color4: theme.base.paleBlue
    },
    terminal: {
      blue: theme.base.blue,
      brightBlue: theme.base.blue,
      white: theme.base.white,
      brightWhite: theme.base.white,
      black: theme.base.black,
      brightBlack: theme.base.black,
      cyan: theme.base.cyan,
      brightCyan: theme.base.cyan,
      green: theme.base.green,
      brightGreen: theme.base.green,
      magenta: theme.base.purple,
      brightMagenta: theme.base.purple,
      red: theme.base.red,
      brightRed: theme.base.red,
      yellow: theme.base.yellow,
      brightYellow: theme.base.yellow
    },
    syntax: {
      comment: theme.ui.shade4,
      cssClass: theme.base.yellow,
      function: theme.ui.yellow,
      class: theme.base.violet,
      classMember: theme.base.red,
      type: theme.base.violet,
      cssTag: theme.base.yellow,
      functionCall: theme.base.paleBlue,
      identifier: theme.base.cyan,
      string: theme.base.green,
      stringEscape: theme.ui.foreground,
      cssId: theme.base.orange,
      // Determines boolean, identifier, keyword, storage, and cssClass
      boolean: theme.base.red,
      storage: theme.ui.foreground
    },
    overrides: {
      "sideBar.background": theme.ui.background,
      "sideBar.foreground": theme.ui.shade5,
      "panel.background": theme.ui.background,
      "panel.border": theme.ui.borders,
      "editor.background": theme.ui.background,
      "editor.foreground": theme.ui.foreground,
      "activityBar.background": theme.ui.background,
      "activityBar.border": theme.ui.borders,
      "activityBar.foreground": theme.ui.foreground,
      "scrollbarSlider.background": theme.ui.shade1,
      "scrollbarSlider.hoverBackground": theme.ui.shade2,
      "scrollbarSlider.activeBackground": theme.ui.shade4,
      "tab.activeBorder": theme.ui.accent,
      "tab.activeModifiedBorder": theme.ui.shade5,
      "tab.unfocusedActiveBorder": theme.ui.shade4,
      "tab.activeForeground": theme.base.white,
      "tab.inactiveForeground": theme.ui.shade5,
      "tab.inactiveBackground": theme.ui.background,
      "tab.unfocusedActiveForeground": theme.ui.foreground,
      "tab.border": theme.ui.background
    }
    // ui: {
    //   // the cursor color
    //   cursor: "",
    //   // used for visible whitespace (see the editor.renderWhitespace VS Code setting)
    //   invisibles: "",
    //   // indentation guidelines in the editor pane
    //   guide: "",
    //   // colors the line your cursor is on, in place of the boundary lines
    //   lineHighlight: "",
    //   // ighlights matches from the find widge
    //   findMatchHighlight: "",
    //   // highlights matches from the find widget
    //   currentFindMatchHighlight: "",
    //   // highlights the selected area for "find in selection"
    //   findRangeHighlight: "",
    //   // background for a selected range of lines
    //   rangeHighlight: "",
    //   // highlights text selected with the cursor
    //   selection: "",
    //   // highlights text which matches the selected text
    //   selectionHighlight: "",
    //   // when the cursor is on a symbol, highlights places that symbol is read
    //   wordHighlight: "",
    //   // when the cursor is on a symbol, highlights places that symbol is written
    //   wordHighlightStrong: "",
    //   // color of hyperlinks when clicked
    //   activeLinkForeground: ""
    // }
  };

  generateTheme(
    theme.name,
    colorSet,
    path.join(__dirname, `../build/${theme.name}.json`)
  );
});
