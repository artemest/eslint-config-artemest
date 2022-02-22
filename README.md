# Artemest ESLint/Prettier config

[![npm version](https://badge.fury.io/js/eslint-config-artemest.svg)](https://badge.fury.io/js/eslint-config-artemest) ![NPM downloads](https://img.shields.io/npm/dm/eslint-config-artemest) [![GitHub issues](https://img.shields.io/github/issues/artemest/eslint-config-artemest)](https://github.com/artemest/eslint-config-artemest/issues) ![Code Style Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg) [![MIT License](https://img.shields.io/badge/license-MIT-red.svg?style=flat)](https://github.com/artemest/artemest-ui/blob/master/LICENSE) [![Twitter Follow](https://img.shields.io/twitter/follow/artemest?label=Follow%20on%20Twitter)](https://twitter.com/artemest/)

These are settings for ESLint and Prettier used by Artemest.

## What it does

This setup lints your JavaScript code based on practices. Check the [.eslintrc.js](https://github.com/artemest/eslint-config-artemest/blob/main/.eslintrc.js) file to see what is included. Feel free to override the rules that make sense for you.

## Installing

1. In your project folder, run:

```
npm i -D eslint-config-artemest # or yarn install --dev eslint-config-artemest
```

2. You will see several dependencies were installed. Now, create (or update) a `.eslintrc` file with the following content:

```json
{
	"extends": ["artemest"]
}
```

### tsconfig.eslint.json

If you're using Typescript, you should create a new `tsconfig.eslint.json` file in order to lint everything:

```json
{
	"extends": "./tsconfig.json",
	"exclude": ["node_modules"],
	"include": ["**/*.js", "**/*.ts", "**/*.tsx"]
}
```

And in your .eslintrc:

```json
{
	"extends": ["artemest"],
	"parserOptions": {
		"project": "tsconfig.eslint.json"
	}
}
```

3. Copy the [.prettierrc](https://github.com/artemest/eslint-config-artemest/blob/main/.prettierrc) file from this repository into your project folder

---

This repository is inspired by [eslint-config-leozera](https://github.com/leonardofaria/eslint-config-leozera), configurations are extended starting from [@lasalefamine/eslintc](https://github.com/LasaleFamine/eslintc).
