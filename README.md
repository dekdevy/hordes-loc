# hordes-loc
[![Build Status](https://travis-ci.org/dekdevy/hordes-loc.svg?branch=master)](https://travis-ci.org/dekdevy/hordes-loc)

Community driven text and localization repo for the browser game Hordes.io. This is a library of strings for all in-game texts, user interface labels, game-lore, item names & descriptions, etc.  

This repository is a public submodule of the [beta.hordes.io](https://beta.hordes.io) sourcecode, containing a build script to compile files found in `loc/` into individual language specific `.json` files. Translations for any respective language do not have to be complete, as the build script will fall  back to other translations (generally English) for any strings that have not been translated for the language type.

## Usage
Installation. Building requires `Node.js` & `NPM`: [nodejs.org](https://nodejs.org/)
```bash
npm install
```
Building the generator file, then compiling the languages into `dist/`
```bash
npm run generate
```
Resources for first timers and git beginners
* [DeepL Translator](https://www.deepl.com/en/translator) - Our prefered translator
* [Language codes](http://www.lingoes.net/en/translator/langcode.htm) - Pick language codes from here when introducing a new language. Ignore post-dash
* [GitHub video tutorial](https://www.youtube.com/watch?v=0fKg7e37bQE), [GitHub guides](https://guides.github.com/)
* [Tutorial on updating your fork](https://github.com/KirstieJane/STEMMRoleModels/wiki/Syncing-your-fork-to-the-original-repository-via-the-browser) - Bringing your repository up to the master's state

## Contributing

For your first translations, please fork the repo and submit a pull request that way. If everything looks good, you will be added as a contributor.

New languages and translations are always welcome, so feel free to PR. The build system automatically detects new language types, and exports new files for each language type. Any language types are welcome.
In order to contribute translations, simply add them to the respective files in the `loc/` directory.
Make sure to lint your code before committing (`npm run lint`). Join [our Discord](https://discord.gg/E45UzeY) if you need help.

If you want to check the status of any translation, simply run the build script, which informs us about translation status.
```bash
Detecting loc types...
  Found languages en, de
Compiling...
  en -> 8/8 (100%)
  de -> 5/8 (62%)
Exporting...
  en -> en.json
  de -> de.json
```

### Examples
Lets say we want to add a German translation to some of the basic Strings for the Archer class. We navigate to `loc/classes/archer.js`, and find:

```js
export default {
  // The class name
  name: {
    en: 'Archer'
  },
  // Class description, visible during character creation
  description: {
    en: 'Archers deal high single target damage and bursty ...',
  }
}
```
All strings are contained in objects that hold translations for any amount of languages. The default language will generally be `en`for English, but any language can be added. In this case, we can see the Archers name being held in the `name: { ... } `Object, and the English translation is already present.

To add a translation, simply add a [ISO639-2 Language code](http://www.lingoes.net/en/translator/langcode.htm) (``en, de, fr...``) with your translation. For example, to add a German translation for the Archers name:
```js
  // The class name
  name: {
    en: 'Archer',
    de: 'Jäger'
  }
  ```
We do not have to add a German translation for the `descriptions` string. It is perfectly fine if the translations are incomplete, as the build system will automatically resolve the translations to English.
Commit, lint and PR, and the translation will be available in game. 
