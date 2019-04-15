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
