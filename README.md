# Incremental Game Template
> A template project to quickly create incremental games with Typescript.

[![Build Status](https://travis-ci.org/123ishaTest/incremental-game-template.svg?branch=master)](https://travis-ci.org/123ishaTest/incremental-game-template)

[Please visit the actual Docs here](https://123ishatest.github.io/incremental-game-template-website)

## Requirements
- [Nodejs](https://nodejs.org/en/) >= v12.13.0.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Troubleshooting

#### .flat is not a function
If you get the following error
```
Syntax Error: TypeError: [(...variantsValue),(...extensions)].flat is not a function
```
This is caused by not having Nodejs >= v12.13.0. Please update your node version.
