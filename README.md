# hordes-loc

Community driven text and localization repository for the browser game Hordes.io. This is a library of strings for all in-game text, user interface labels, game lore, item descriptions, etc.  

This repository is a public submodule of the [hordes.io](https://hordes.io) sourcecode, containing a build script to compile files found in `loc/` into individual language specific `.json` files (here are the [Russian](https://hordes.io/assets/loc/ru.json) and [German](https://hordes.io/assets/loc/de.json) files for an example). Translations for any respective language do not have to be complete, as the build script will substitute the original English text for any strings that have not been translated for the language.

Resources for first timers and GitHub beginners
* [Language codes](http://www.lingoes.net/en/translator/langcode.htm) - Pick language codes from here when introducing a new language. Ignore post-dash text.
* [GitHub video tutorial](https://www.youtube.com/watch?v=0fKg7e37bQE), [GitHub guides](https://guides.github.com/)
* [Tutorial on updating your fork](https://github.com/KirstieJane/STEMMRoleModels/wiki/Syncing-your-fork-to-the-original-repository-via-the-browser) - Updating your repository to match the master's state.

## Contributing

For your first translations, please fork the repository and start editing files that way. If everything looks good, your edits will be merged into the main repository. 

Make sure to read all the comments in the files and take them seriously. Do not translate placeholder texts. Do not translate unique names. If you are unsure, cross-check with other translations to see whether a word is translated or not. For example, words like *party*, *clan* or unique names like *Yggdrasil* will generally not be translated to make sure players can communicate effectively regarding fundamental concepts of the game. Any text which has a `$$` tag before it is also not to be translated.
**Please make sure to add thorough and informative descriptions of your changes in the PR (Pull Request) and commit descriptions, otherwise we will likely ignore or close your PR.**

New languages and translations are always welcome, so feel free to make a PR. Any language types are welcome.
In order to contribute translations, simply add them to the respective files in the `loc/` directory.
Make sure to check the build results (Github Action) after you make a Pull Request to correct any errors that may arise. Join [our Discord](https://discord.gg/hordes) if you need help.

If you want to check the status of any translation, go to [this link](https://github.com/dekdevy/hordes-loc/actions), select the first entry, select "build (16.x)" under the Jobs section, and finally select "Run npm test". This gives us the translation status of all present languages.
```bash
Detecting loc types...
  Found 23 languages
Compiling...
  en → 534/534 100%
  fr → 460/534  86%
  ru → 459/534  85%
  it → 408/534  76%
  de → 405/534  75%
  ...
Exporting...
  en -> en.json
  de -> de.json
  ru -> ru.json
  ...
```
If you want to check which languages are missing in a file, scroll down to the bottom of the "Run npm test" output.
```bash
Finding missing translations...
   classes archer description → [de, tr, es]
```
### Examples
Lets say we want to add a German translation to some of the strings for the Archer class. We navigate to `loc/classes/archer.js`, and find: 

```js
export default {
  // The class name
  name: {
    en: 'Archer',
    ru: 'Лучник'
  },
  // Class description, visible during character creation
  description: {
    en: 'Archers deal high single target damage and bursty...',
    ru: 'Лучники наносят высокий урон по одиночной цели и...'
  }
}
```
All strings are contained in objects that hold translations for any amount of languages. The default language will generally be `en`for English, but any language can be added. In this case, we can see the Archers name being held in the `name: { ... } `object, and the Russian translation is already present, along with the original English text.

To add a translation entry, find your [language code](http://www.lingoes.net/en/translator/langcode.htm) (``en, de, fr...``) and include it with your translation text. For example, to add a German translation for the name "Archer":
```js
  // The class name
  name: {
    en: 'Archer',
    ru: 'Лучник',
    de: 'Jäger'
  }
  ```
We do not have to add a German translation for the `description` string (you can if you want to, of course). It is perfectly fine if the translations are incomplete as the build system will automatically resolve the incomplete translations to English.
Once you finished your translation, scroll down to the bottom of the page to find a button named `Commit changes`. Leave the option below as `Commit directly to the master branch` and click the button.
Now that you're done comitting the translation, go to your fork's main page and click the button `New pull request`, add in a name for your Pull Request and click `Create Pull Request`.
If everything went fine and your translation passed the syntax checks, your translations will be available in future game updates.
