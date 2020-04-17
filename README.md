<p align="center"><img width="800px" src="https://raw.githubusercontent.com/moxer-theme/moxer-code/master/assets/cover.png"></p>

<p align="center"><br><strong>Moxer Theme</strong> brings your DX to another level.</p>
<br><br>
<p align="center">
<a href="https://marketplace.visualstudio.com/items?itemName=Equinusocio.moxer-theme&ssr=false#review-details"><img src="https://vsmarketplacebadge.apphb.com/rating-star/Equinusocio.moxer-theme.svg?style=for-the-badge&colorA=F7CA57&colorB=F2AA08"/></a> <a href="https://marketplace.visualstudio.com/items?itemName=Equinusocio.moxer-theme"><img src="https://vsmarketplacebadge.apphb.com/downloads-short/Equinusocio.moxer-theme.svg?style=for-the-badge&colorA=74D56C&colorB=4BC74F&label=DOWNLOADS"/></a> <a href="https://a.paddle.com/v2/click/16413/37697?link=1227"><img src="https://img.shields.io/badge/Supported%20by-VSCode%20Power%20User%20Course%20%E2%86%92-gray.svg?colorA=655BE1&colorB=4F44D6&style=for-the-badge"/></a>
</p>

---

- [Getting started](#Getting-started)
	- [Installation](#Installation)
		- [GitHub Repository Clone](#GitHub-Repository-Clone)
- [Activate theme](#Activate-theme)
- [Override theme colors](#Override-theme-colors)
	- [Color Scheme override](#Color-Scheme-override)
- [Recommended settings for a better experience](#Recommended-settings-for-a-better-experience)

## Getting started

You can install this awesome theme through the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=Equinusocio.moxer-theme).

<p align="center"><img width="800px" src="https://user-images.githubusercontent.com/10454741/79561033-ebf84980-80a8-11ea-869a-2343108a5645.png"></p>

### Installation

Launch *Quick Open*:
  - <img src="https://www.kernel.org/theme/images/logos/favicon.png" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf">Linux</a> `Ctrl+P`
  - <img src="https://developer.apple.com/favicon.ico" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf">macOS</a> `⌘P`
  - <img src="https://www.microsoft.com/favicon.ico" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf">Windows</a> `Ctrl+P`

Paste the following command and press `Enter`:

```sh
ext install moxer
```

#### GitHub Repository Clone

Change to your `.vscode/extensions` [VS Code extensions directory](https://code.visualstudio.com/docs/extensions/install-extension#_side-loading).
Depending on your platform it is located in the following folders:

  - <img src="https://www.kernel.org/theme/images/logos/favicon.png" width=16 height=16/> **Linux** `~/.vscode/extensions`
  - <img src="https://developer.apple.com/favicon.ico" width=16 height=16/> **macOs** `~/.vscode/extensions`
  - <img src="https://www.microsoft.com/favicon.ico" width=16 height=16/> **Windows** `%USERPROFILE%\.vscode\extensions`

Clone the Moxer Theme repository as `equinusocio.moxer-theme`:

```sh
git clone https://github.com/moxer-theme/moxer-code.git equinusocio.moxer-theme
```


## Activate theme

Launch *Quick Open*:

  - <img src="https://www.kernel.org/theme/images/logos/favicon.png" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf">Linux</a> `Ctrl + Shift + P`
  - <img src="https://developer.apple.com/favicon.ico" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf">macOS</a> `⌘ + Shift + P`
  - <img src="https://www.microsoft.com/favicon.ico" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf">Windows</a> `Ctrl + Shift + P`

Type `theme`, choose `Preferences: Color Theme`, and select **Moxer Theme** from the list.

## Override theme colors
You can override the theme UI and schemes colors by adding these theme-specific settings to your configuration. For advanced customisation please check the [relative section on the VS Code documentation](https://code.visualstudio.com/docs/getstarted/themes#_customizing-a-color-theme).

### Color Scheme override

**Basic example**
```js
"editor.tokenColorCustomizations": {
    "[Moxer]": {
        "comments": "#229977"
    }
},
```

**Advanced example**

```js
"editor.tokenColorCustomizations": {
    "[Moxer]": {
        "textMateRules": [
            {
                "scope": [
                    "punctuation.definition.comment",
                    "comment.block",
                    "comment.line",
                    "comment.block.documentation"
                ],
                "settings": {
                    "foreground": "#FF0000"
                }
            }
        ]
    },
},

"workbench.colorCustomizations": {
	"[Moxer]": {
		"sideBar.background": "#ff0000",
	}
},
```

## Recommended settings for a better experience

```js
{
    // Controls the font family. You need Operator Mono Font
    "editor.fontFamily": "Operator Mono Lig",
    // Controls the line height. Use 0 to compute the lineHeight from the fontSize.
    "editor.lineHeight": 30,
    // Enables font ligatures
    "editor.fontLigatures": true,
    // Controls if file decorations should use badges.
   "explorer.decorations.badges": true,
	"explorer.decorations.colors": false
}
```

# Support me

<a href="https://github.com/sponsors/equinusocio">
  <img src="https://user-images.githubusercontent.com/10454741/79366665-e259cf00-7f4c-11ea-8f6f-4143edb1d0d0.png" width="86px">
</a>

---

<p align="center"> <img src="https://equinusocio.gallerycdn.vsassets.io/extensions/equinusocio/moxer-theme/1.2.0/1562674227593/Microsoft.VisualStudio.Services.Icons.Default" width=16 height=16/> Copyright &copy; 2020 Mattia Astorino</p>

<p align="center"><a href="http://www.apache.org/licenses/LICENSE-2.0"><img src="https://img.shields.io/badge/License-Apache_2.0-5E81AC.svg?style=flat-square"/></a></p>
