# Mithril / Typescript Example Project

This is an extended example project using [Mithril](https://mithril.js.org/), TypeScript, Browser-Sync and Bootstrap SASS.

## Installation:

    npm install

## Serve this project locally and recompile .ts sources on save:

    npm start

Then go to http://localhost:3000 in your browser. This will serve the files in the `public` directory, defaulting to the `index.html` file.

The file `public/js/app.js` is rebuilt whenever the ts sources are recompiled.

While this npm script is running, edits made to src/*.ts files will be recompiled automatically so you can simply refresh your browser to see the updated app.

## Build a minified bundle

    npm run build

Will output a minified `app.js` file in `public/js`



## Develop

    npm run dev

### Windows 10

At Windows 10 Ubuntu bash: Will start browser-sync environment and watchify.


Ruby and Sass needed. If not already installed, then:

    https://rubyinstaller.org/

Follow installation instructions for ruby and at windows console run:

    gem install sass



#### PHPStorm Watcher

Watcher for SCSS:

    File > Settings > File Watchers

Create SCSS watcher with following options:


Scope: > Pattern:

    file:mithril-ts-example-extended/src/scss/style.scss

Program:

    [drive]:\[path-to-your-ruby-and-sass-directory]\bin\scss.bat

Arguments:

    --no-cache --update $FileName$:../../public/css/$FileNameWithoutExtension$.css

Output path to refresh:

    ../../public/css/$FileNameWithoutExtension$.css:../../public/css/$FileNameWithoutExtension$.css.map

Other options:

    $FileDir$


### developing command

    npm run dev