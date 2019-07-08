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
    ui: {
      cursor: theme.ui.yellow,
      invisibles: theme.ui.shade2
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
      identifier: theme.base.cyan,
      keyword: theme.base.red,
      boolean: theme.base.pink,
      function: theme.ui.yellow,
      class: theme.base.violet,
      classMember: theme.base.red,
      type: theme.base.violet,
      cssTag: theme.base.yellow,
      functionCall: theme.base.paleBlue,
      string: theme.base.green,
      stringEscape: theme.ui.foreground,
      cssId: theme.base.orange,
      storage: theme.ui.foreground
    },
    overrides: {
      focusBorder: theme.ui.foreground,
      "widget.shadow": theme.ui.background + "00",
      "scrollbar.shadow": theme.ui.background + "00",
      "editorLink.activeForeground": theme.ui.foreground,
      "selection.background": theme.base.paleblue + "50",
      "progressBar.background": theme.base.yellow,
      "debugToolBar.background": theme.ui.background,
      "pickerGroup.foreground": theme.base.yellow,

      "button.background": theme.base.cyan,
      "button.hoverBackground": theme.base.yellow,

      "textLink.foreground": theme.base.cyan,
      "textLink.activeForeground": theme.base.yellow,

      "sideBar.background": theme.ui.background,
      "sideBar.foreground": theme.ui.shade4,

      "panel.background": theme.ui.background,
      "panel.border": theme.ui.borders,

      "editor.background": theme.ui.background,
      "editor.foreground": theme.ui.foreground,
      "editor.selectionBackground": theme.base.paleblue + "50",
      "editor.selectionHighlightBackground": theme.base.red + "50",

      "editorIndentGuide.background": theme.ui.shade1,
      "editorIndentGuide.activeBackground": theme.ui.shade3,

      "editorLineNumber.foreground": theme.ui.shade1,
      "editorLineNumber.activeForeground": theme.base.cyan,

      "editorGroupHeader.tabsBackground": theme.ui.background,
      "editorGroup.border": theme.ui.background,

      "editorGutter.modifiedBackground": theme.base.blue + "60",
      "editorGutter.addedBackground": theme.base.green + "60",
      "editorGutter.deletedBackground": theme.base.red + "60",

      "activityBar.background": theme.ui.background,
      "activityBar.border": theme.ui.borders,
      "activityBar.foreground": theme.ui.shade5,

      "scrollbarSlider.background": theme.ui.shade1,
      "scrollbarSlider.hoverBackground": theme.ui.shade2,
      "scrollbarSlider.activeBackground": theme.ui.shade4,

      "tab.activeBorder": theme.base.yellow,
      "tab.activeModifiedBorder": theme.ui.shade5,
      "tab.unfocusedActiveBorder": theme.ui.shade4,
      "tab.activeForeground": theme.base.white,
      "tab.inactiveForeground": theme.ui.shade3,
      "tab.inactiveBackground": theme.ui.background,
      "tab.unfocusedActiveForeground": theme.ui.foreground,
      "tab.border": theme.ui.background,

      "editorWidget.background": theme.ui.shade1,
      "editorWidget.resizeBorder": theme.base.yellow,
      "editorWidget.border": theme.base.yellow
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
