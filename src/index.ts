import * as fs from 'fs-extra';
import * as path from 'path';
import Moxer from './themes/moxer';
import MoxerBorderline from './themes/moxer-borderline';
import MoxerLight from './themes/moxer-light';

// Tslint:disable-next-line: no-submodule-imports
import {generateTheme, IColorSet} from '@moxer/vscode-theme-generator';

/**
 * Define paths
 */
const buildPath: string = path.join(__dirname, '../build');
const themes: any[] = [Moxer, MoxerBorderline, MoxerLight];

/**
 * Checl if the build folder exist.
 * If not, create it.
 */
if (!fs.existsSync(buildPath)) {
  fs.mkdirSync(buildPath);
}

/**
 * Generate a [theme-name].json for each
 * theme file found inside src/themes
 */
themes.forEach(theme => {
  const colorSet: IColorSet = {
    semanticHighlighting: true,
    base: {
      // Determines the overall background color
      background: theme.ui.background,
      // Determines boolean, identifier, keyword, storage, and cssClass
      color1: theme.base.red,
      // Determines string, stringEscape, and cssId
      color2: theme.base.green,
      // Determines function, class, classMember, type, and cssTag
      color3: theme.base.yellow,
      // Determines functionCall and number
      color4: theme.base.paleblue,
      // Determines the overall text foreground color
      foreground: theme.ui.contrast
    },
    /**
		 * Overrides specific syntax scopes provided
		 * by the theme generator
		 */
    syntax: {
      boolean: theme.base.pink,
      class: theme.base.violet,
      classMember: theme.base.red,
      comment: theme.ui.shade4,
      cssClass: theme.base.yellow,
      cssId: theme.base.orange,
      cssTag: theme.base.yellow,
      function: theme.base.yellow,
      functionCall: theme.base.violet,
      identifier: theme.base.cyan,
      keyword: theme.base.red,
      storage: theme.base.cyan,
      string: theme.base.green,
      stringEscape: theme.ui.foreground,
      type: theme.base.pink,
      punctuation: theme.base.pink,
      variable: theme.ui.foreground,
      number: theme.base.orange
    },
    /**
		 * Define the integrated shell
		 * color palette
		 */
    terminal: {
      black: theme.ui.shade3,
      blue: theme.base.blue,
      brightBlack: theme.ui.shade3,
      brightBlue: theme.base.blue,
      brightCyan: theme.base.cyan,
      brightGreen: theme.base.green,
      brightMagenta: theme.base.purple,
      brightRed: theme.base.red,
      brightWhite: theme.ui.contrast,
      brightYellow: theme.base.yellow,
      cyan: theme.base.cyan,
      green: theme.base.green,
      magenta: theme.base.purple,
      red: theme.base.red,
      white: theme.ui.contrast,
      yellow: theme.base.yellow
    },
    /**
		 * Define workbench colors
		 */
    ui: {
      // Highlights matches from the find widget
      currentFindMatchHighlight: theme.ui.shade5,
      // Set the editor cursor color
      cursor: theme.base.yellow,
      // Ighlights matches from the find widge
      findMatchHighlight: theme.base.pink,
      // Highlights the selected area for "find in selection"
      findRangeHighlight: theme.base.yellow + '30',
      // Set color for invisible characters/whitespaces
      invisibles: theme.ui.shade1,
      // Highlights text which matches the selected text
      selection: theme.ui.shade1,
      // Highlights text inside selected area
      selectionHighlight: theme.base.yellow + '50',
      // When the cursor is on a symbol, highlights places that symbol is read
      wordHighlight: theme.base.pink + '30',
      // When the cursor is on a symbol, highlights places that symbol is written
      wordHighlightStrong: theme.base.green + '30'
    },
    /**
		 * Overrides workbench UI Elements
		 */
    workbench: {
      /**
			 * General elements style
			 */
      focusBorder: theme.ui.background + '00',
      'widget.shadow': theme.ui.background + '00',
      'selection.background': theme.base.paleblue + '50',
      'scrollbar.shadow': theme.ui.background + '00',
      'editorLink.activeForeground': theme.ui.foreground,
      'progressBar.background': theme.base.yellow,
      'debugToolBar.background': theme.ui.background,
      'pickerGroup.foreground': theme.base.yellow,
      'editorMarkerNavigation.background': theme.ui.foreground + '05',
      'tree.indentGuidesStroke': theme.ui.shade1,
      'terminalCursor.foreground': theme.base.yellow,
      'terminalCursor.background': theme.base.black,
      /**
			 * Buttons style
			 */
      'button.background': theme.ui.background,
      'button.hoverBackground': theme.ui.shade2,
      /**
			 * Links style
			 */
      'textLink.foreground': theme.base.cyan,
      'textLink.activeForeground': theme.base.yellow,
      /**
			 * Sidebar style
			 */
      'sideBar.background': theme.ui.background,
      'sideBar.foreground': theme.ui.shade5,
      'sideBar.border': theme.ui.shade2 + '50',
      /**
			 * Sidebar elements style
			 */
      'sideBarTitle.foreground': theme.ui.shade4,
      'sideBarSectionHeader.background': theme.ui.background,
      // "sideBarSectionHeader.foreground": theme.ui.foreground,
      'sideBarSectionHeader.border': theme.ui.background,
      /**
			 * Window panels style (terminal, global search)
			 */
      'panel.background': theme.ui.background,
      'panel.border': theme.ui.borders,
      'panel.dropBackground': theme.ui.shade2,
      /**
			 * Window panels elements style
			 */
      'panelTitle.inactiveForeground': theme.ui.shade4,
      'panelTitle.activeForeground': theme.ui.contrast,
      'panelTitle.activeBorder': theme.base.yellow,
      /**
			 * Code Editor style
			 */
      'editor.background': theme.ui.background,
      'editor.foreground': theme.ui.foreground,
      'editor.lineHighlightBackground': theme.ui.shade1 + '50',
      'editor.lineHighlightBorder': theme.ui.shade1 + '00',
      'editor.findMatchBackground': theme.ui.background + '00',
      'editor.findMatchHighlightBackground': theme.ui.background + '00',
      'editor.findMatchBorder': theme.base.pink,
      'editor.findMatchHighlightBorder': theme.ui.shade6,
      // Editor Indent guides
      'editorIndentGuide.background': theme.ui.shade1,
      'editorIndentGuide.activeBackground': theme.ui.shade3,
      // Editor line number
      'editorLineNumber.foreground': theme.ui.shade3,
      'editorLineNumber.activeForeground': theme.base.yellow,
      // Editor tab groups
      'editorGroupHeader.tabsBackground': theme.ui.background,
      'editorGroup.border': theme.ui.background,
      // Editor gutter
      'editorGutter.modifiedBackground': theme.base.blue + '60',
      'editorGutter.addedBackground': theme.base.green + '60',
      'editorGutter.deletedBackground': theme.base.red + '60',
      /**
			 * Activity bar style
			 */
      'activityBar.background': theme.ui.background,
      'activityBar.border': theme.ui.background,
      'activityBar.foreground': theme.ui.shade5,
      'activityBar.activeBorder': theme.base.pink,
      /**
			 * Activity bar badges style
			 */
      'activityBarBadge.background': theme.base.cyan,
      'activityBarBadge.foreground': theme.ui.background,
      /**
			 * Global badges style
			 */
      'badge.background': theme.base.cyan,
      'badge.foreground': theme.ui.background,
      /**
			 * Extensions badge style
			 */
      'extensionBadge.remoteBackground': theme.ui.shade3,
      'extensionBadge.remoteForeground': theme.ui.foreground,
      /**
			 * Scrollbar style
			 */
      'scrollbarSlider.background': theme.ui.shade4 + '50',
      'scrollbarSlider.hoverBackground': theme.ui.shade2,
      'scrollbarSlider.activeBackground': theme.ui.shade4,
      /**
			 * Tabs style
			 */
      'tab.activeBorder': theme.ui.background,
      'tab.activeBorderTop': theme.base.cyan,
      'tab.inactiveModifiedBorder': theme.ui.shade5,
      'tab.activeModifiedBorder': theme.base.pink,
      'tab.unfocusedActiveBorder': theme.ui.shade4,
      'tab.activeForeground': theme.ui.contrast,
      'tab.activeBackground': theme.ui.background,
      'tab.inactiveForeground': theme.ui.shade4,
      'tab.inactiveBackground': theme.ui.background,
      'tab.unfocusedActiveForeground': theme.ui.foreground,
      'tab.border': theme.ui.background,
      /**
			 * Editor overlay widgets style (find/replace..)
			 */
      'editorWidget.background': theme.ui.shade1,
      'editorWidget.resizeBorder': theme.base.yellow,
      'editorWidget.border': theme.base.yellow,
      /**
			 * Statusbar style
			 */
      'statusBar.noFolderBackground': theme.ui.background,
      'statusBar.border': theme.ui.borders,
      'statusBar.background': theme.ui.background,
      'statusBar.foreground': theme.ui.shade4,
      'statusBar.debuggingBackground': theme.base.purple,
      'statusBar.debuggingForeground': theme.ui.contrast,
      /**
			 * Statusbar items style
			 */
      'statusBarItem.hoverBackground': theme.ui.shade1 + '50',
      'statusBarItem.remoteForeground': theme.base.black,
      'statusBarItem.remoteBackground': theme.base.yellow,
      /**
			 * Matching brackets style
			 */
      'editorBracketMatch.border': theme.base.cyan + '70',
      'editorBracketMatch.background': theme.ui.background,
      /**
			 * Editor Overview Ruler style
			 */
      'editorOverviewRuler.findMatchForeground': theme.base.pink,
      'editorOverviewRuler.border': theme.ui.borders,
      'editorOverviewRuler.errorForeground': theme.base.red,
      'editorOverviewRuler.infoForeground': theme.base.blue,
      'editorOverviewRuler.warningForeground': theme.base.yellow,
      /**
			 * Squigglies style
			 */
      'editorInfo.foreground': theme.base.blue,
      'editorWarning.foreground': theme.base.yellow,
      'editorError.foreground': theme.base.red,
      /**
			 * Popop dialogs style
			 */
      'editorHoverWidget.background': theme.ui.shade1,
      'editorHoverWidget.border': theme.ui.shade1,
      /**
			 * Title bar style
			 */
      'titleBar.activeBackground': theme.ui.background,
      'titleBar.activeForeground': theme.ui.foreground,
      'titleBar.inactiveBackground': theme.ui.background,
      'titleBar.inactiveForeground': theme.ui.shade4,
      'titleBar.border': theme.ui.borders,
      /**
			 * Textfield and inputs style
			 */
      'input.background': theme.ui.background,
      'input.foreground': theme.base.pink,
      'input.placeholderForeground': theme.ui.shade3,
      'input.border': theme.ui.shade1,
      /**
			 * Inputs validation style
			 */
      'inputValidation.errorBorder': theme.base.red + '50',
      'inputValidation.infoBorder': theme.base.blue + '50',
      'inputValidation.warningBorder': theme.base.yellow + '50',
      /**
			 * Dropdown menu style
			 */
      'dropdown.background': theme.ui.shade1,
      'dropdown.border': theme.ui.shade1,
      /**
       * Quick Panel
       */
      'quickInput.background': theme.ui.background,
      'quickInput.foreground': theme.ui.shade4,
      /**
			 * Lists style
			 */
      'list.hoverForeground': theme.ui.foreground,
      'list.hoverBackground': `${theme.ui.background}00`,
      'list.activeSelectionBackground': theme.ui.background + '00',
      'list.activeSelectionForeground': theme.base.cyan,
      'list.inactiveSelectionForeground': theme.base.cyan,
      'list.inactiveSelectionBackground': theme.ui.shade1 + '50',
      'list.focusBackground': theme.ui.shade1,
      'list.focusForeground': theme.ui.contrast,
      'list.highlightForeground': theme.base.cyan,
      'list.dropBackground': theme.ui.shade2,
      /**
			 * Editor suggest widget style
			 */
      'editorSuggestWidget.background': theme.ui.shade1,
      'editorSuggestWidget.foreground': theme.ui.foreground,
      'editorSuggestWidget.highlightForeground': theme.base.cyan,
      'editorSuggestWidget.selectedBackground': theme.ui.shade2,
      'editorSuggestWidget.border': theme.ui.shade1,
      /**
			 * Editor diff editor style
			 */
      'diffEditor.insertedTextBackground': theme.base.cyan + '20',
      'diffEditor.removedTextBackground': theme.base.pink + '20',
      /**
			 * Extensions button style
			 */
      'extensionButton.prominentBackground': theme.base.yellow,
      'extensionButton.prominentHoverBackground': theme.base.yellow,
      'extensionButton.prominentForeground': theme.ui.background,
      /**
			 * Peekview window style
			 */
      'peekViewEditor.background': theme.ui.background,
      'peekViewResult.background': theme.ui.background,
      'peekView.border': theme.ui.shade1,
      'peekViewTitle.background': theme.ui.shade1,
      'peekViewEditorGutter.background': theme.ui.background,
      'peekViewTitleDescription.foreground': theme.ui.foreground,
      'peekViewResult.matchHighlightBackground': theme.base.pink + '50',
      'peekViewEditor.matchHighlightBackground': theme.base.pink + '50',
      'peekViewResult.selectionBackground': theme.ui.shade1,
      /**
			 * GIT decorations style
			 */
      'gitDecoration.deletedResourceForeground': theme.base.red,
      'gitDecoration.conflictingResourceForeground': theme.base.yellow,
      'gitDecoration.modifiedResourceForeground': theme.base.blue,
      'gitDecoration.untrackedResourceForeground': theme.base.green,
      'gitDecoration.ignoredResourceForeground': theme.ui.shade2,
      /**
			 * Breadcrumb style
			 */
      'breadcrumb.background': theme.ui.background,
      'breadcrumb.foreground': theme.ui.shade4,
      'breadcrumb.focusForeground': theme.ui.foreground,
      'breadcrumb.activeSelectionForeground': theme.base.pink,
      'breadcrumbPicker.background': theme.ui.background,
      /**
			 * Custom menus style
			 */
      'menu.background': theme.ui.shade1,
      'menu.foreground': theme.ui.foreground,
      'menu.selectionBackground': theme.ui.shade2,
      'menu.selectionForeground': theme.ui.foreground,
      'menu.selectionBorder': theme.ui.shade1,
      'menu.separatorBackground': theme.ui.shade3,
      /**
			 * Menu Bar style
			 */
      'menubar.selectionBackground': theme.ui.shade1,
      'menubar.selectionForeground': theme.ui.foreground,
      'menubar.selectionBorder': theme.ui.shade1,
      /**
			 * Settings elements style
			 */
      'settings.dropdownForeground': theme.ui.foreground,
      'settings.dropdownBackground': theme.ui.background,
      'settings.numberInputForeground': theme.ui.foreground,
      'settings.numberInputBackground': theme.ui.background,
      'settings.textInputForeground': theme.ui.foreground,
      'settings.textInputBackground': theme.ui.background,
      'settings.headerForeground': theme.base.cyan,
      'settings.modifiedItemIndicator': theme.base.pink,
      'settings.checkboxBackground': theme.ui.background,
      'settings.checkboxForeground': theme.ui.foreground,
      /**
			 * List Filter Widget style
			 */
      'listFilterWidget.background': theme.base.violet,
      'listFilterWidget.outline': theme.base.violet,
      'listFilterWidget.noMatchesOutline': theme.base.violet
    }
    /**
		 * Override all syntax tokens
		 */
    // customTokens: [
    // 	{
    // 		name: 'String',
    // 		scope: [ 'string' ],
    // 		settings: {
    // 			fontStyle: 'normal',
    // 			foreground: '#',
    // 			background: '#'
    // 		}
    // 	}
    // ]
  };

  /**
	 * Call the theme generator for each
	 * theme found in `themes`
	 */
  generateTheme(theme.name, colorSet, path.join(__dirname, `../build/${theme.name}.json`));
});
