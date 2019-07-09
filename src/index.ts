import * as path from "path";
import { generateTheme, IColorSet } from "vscode-theme-generator";
import * as Moxer from "./themes/moxer.js";

const themes = [Moxer];

themes.forEach(theme => {
	const colorSet: IColorSet = {
		base: {
			// Determines the overall background color
			background: theme.ui.background,
			// Determines the overall text foreground color
			foreground: theme.base.white,
			// Determines boolean, identifier, keyword, storage, and cssClass
			color1: theme.base.red,
			// Determines string, stringEscape, and cssId
			color2: theme.base.green,
			// Determines function, class, classMember, type, and cssTag
			color3: theme.base.yellow,
			// Determines functionCall and number
			color4: theme.base.paleblue
		},
		/**
		 * Define the integrated shell
		 * color palette
		 */
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
		ui: {
			// set the editor cursor color
			cursor: theme.base.yellow,
			// set color for invisible characters/whitespaces
			invisibles: theme.ui.shade1,
			// highlights text which matches the selected text
			selection: theme.ui.shade1,
			// highlights text inside selected area
			selectionHighlight: theme.base.yellow + "50",
			// ighlights matches from the find widge
			findMatchHighlight: theme.base.pink,
			// highlights matches from the find widget
			currentFindMatchHighlight: theme.ui.shade5,
			// highlights the selected area for "find in selection"
			findRangeHighlight: theme.base.yellow + "30",
			// when the cursor is on a symbol, highlights places that symbol is read
			wordHighlight: theme.base.pink + "30",
			// when the cursor is on a symbol, highlights places that symbol is written
			wordHighlightStrong: theme.base.green + "30"
		},
		/**
		 * Overrides specific syntax scopes provided
		 * by the theme generator
		 */
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
			/**
			 * General elements style
			 */
			focusBorder: theme.ui.background + "00",
			"widget.shadow": theme.ui.background + "00",
			"selection.background": theme.base.paleblue + "50",
			"scrollbar.shadow": theme.ui.background + "00",
			"editorLink.activeForeground": theme.ui.foreground,
			"progressBar.background": theme.base.yellow,
			"debugToolBar.background": theme.ui.background,
			"pickerGroup.foreground": theme.base.yellow,
			/**
			 * Buttons style
			 */
			"button.background": theme.ui.background,
			"button.hoverBackground": theme.ui.shade2,
			/**
			 * Links style
			 */
			"textLink.foreground": theme.base.cyan,
			"textLink.activeForeground": theme.base.yellow,
			/**
			 * Sidebar style
			 */
			"sideBar.background": theme.ui.background,
			"sideBar.foreground": theme.ui.shade4,
			/**
			 * Sidebar elements style
			 */
			"sideBarTitle.foreground": theme.ui.foreground,
			"sideBarSectionHeader.background": theme.ui.background,
			"sideBarSectionHeader.border": theme.ui.borders,
			/**
			 * Window panels style (terminal, global search)
			 */
			"panel.background": theme.ui.background,
			"panel.border": theme.ui.borders,
			/**
			 * Code Editor style
			 */
			"editor.background": theme.ui.background,
			"editor.foreground": theme.ui.foreground,
			"editor.lineHighlightBackground": theme.ui.background,
			"editor.lineHighlightBorder": theme.ui.background,

			"editorIndentGuide.background": theme.ui.shade1,
			"editorIndentGuide.activeBackground": theme.ui.shade3,

			"editorLineNumber.foreground": theme.ui.shade3,
			"editorLineNumber.activeForeground": theme.base.yellow,

			"editorGroupHeader.tabsBackground": theme.ui.background,
			"editorGroup.border": theme.ui.background,

			"editorGutter.modifiedBackground": theme.base.blue + "60",
			"editorGutter.addedBackground": theme.base.green + "60",
			"editorGutter.deletedBackground": theme.base.red + "60",
			/**
			 * Activity bar style
			 */
			"activityBar.background": theme.ui.background,
			"activityBar.border": theme.ui.borders,
			"activityBar.foreground": theme.ui.shade5,
			/**
			 * Activity bar badges style
			 */
			"activityBarBadge.background": theme.base.cyan,
			"activityBarBadge.foreground": theme.ui.background,
			/**
			 * Scrollbar style
			 */
			"scrollbarSlider.background": theme.ui.shade1,
			"scrollbarSlider.hoverBackground": theme.ui.shade2,
			"scrollbarSlider.activeBackground": theme.ui.shade4,
			/**
			 * Tabs style
			 */
			"tab.activeBorder": theme.base.yellow,
			"tab.activeModifiedBorder": theme.ui.shade5,
			"tab.unfocusedActiveBorder": theme.ui.shade4,
			"tab.activeForeground": theme.base.white,
			"tab.inactiveForeground": theme.ui.shade4,
			"tab.inactiveBackground": theme.ui.background,
			"tab.unfocusedActiveForeground": theme.ui.foreground,
			"tab.border": theme.ui.background,
			/**
			 * Editor overlay widgets style (find/replace..)
			 */
			"editorWidget.background": theme.ui.shade1,
			"editorWidget.resizeBorder": theme.base.yellow,
			"editorWidget.border": theme.base.yellow,
			/**
			 * Statusbar style
			 */
			"statusBar.noFolderBackground": theme.ui.background,
			"statusBar.border": theme.ui.borders,
			"statusBar.background": theme.ui.background,
			"statusBar.foreground": theme.ui.shade4,
			"statusBar.debuggingBackground": theme.base.purple,
			"statusBar.debuggingForeground": theme.base.white,
			/**
			 * Statusbar items style
			 */
			"statusBarItem.hoverBackground": theme.ui.shade1,
			"statusBarItem.remoteForeground": theme.base.black,
			"statusBarItem.remoteBackground": theme.base.yellow,
			/**
			 * Matching brackets style
			 */
			"editorBracketMatch.border": theme.base.cyan + "70",
			"editorBracketMatch.background": theme.ui.background,
			/**
			 * Editor Overview Ruler style
			 */
			"editorOverviewRuler.findMatchForeground": theme.base.yellow,
			"editorOverviewRuler.border": theme.ui.borders,
			"editorOverviewRuler.errorForeground": theme.base.red,
			"editorOverviewRuler.infoForeground": theme.base.blue,
			"editorOverviewRuler.warningForeground": theme.base.yellow,
			/**
			 * Squigglies style
			 */
			"editorInfo.foreground": theme.base.blue,
			"editorWarning.foreground": theme.base.yellow,
			"editorError.foreground": theme.base.red,
			/**
			 * Popop dialogs style
			 */
			"editorHoverWidget.background": theme.ui.shade1,
			"editorHoverWidget.border": theme.ui.shade1,
			/**
			 * Title bar style
			 */
			"titleBar.activeBackground": theme.ui.background,
			"titleBar.activeForeground": theme.ui.foreground,
			"titleBar.inactiveBackground": theme.ui.background,
			"titleBar.inactiveForeground": theme.ui.shade4,
			"titleBar.border": theme.ui.borders,
			/**
			 * Textfield and inputs style
			 */
			"input.background": theme.ui.shade3,
			"input.foreground": theme.ui.foreground,
			"input.placeholderForeground": theme.ui.shade6,
			"input.border": theme.ui.shade3,
			/**
			 * Inputs validation style
			 */
			"inputValidation.errorBorder": theme.base.red + "50",
			"inputValidation.infoBorder": theme.base.blue + "50",
			"inputValidation.warningBorder": theme.base.yellow + "50"
		}
	};

	generateTheme(
		theme.name,
		colorSet,
		path.join(__dirname, `../build/${theme.name}.json`)
	);
});
