[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
[![Build Status](https://travis-ci.org/ducin/quizapp.png?branch=master)](https://travis-ci.org/ducin/quizapp)

Quiz Application
================

Define a json file with questions and answers and display them one at a time.
This project is in early basic stage, but is easily extendable. See [live demo](http://ducin.github.io/quizapp).

Software used
=============

 * yeoman (generator-backbone)
 * grunt, bower, npm
 * backbone
 * bootstrap, modernizr, sass/compass

Automatic tools
===============

 * committing code (`master` branch) along with github pages deployment (`gh-pages` branch): run `. .bashrc` from Unix-based bash console and run `deploy` command, which will ask for `master` branch commit message and will ask for github account credentials to push both commits.
 * all grunt tasks (such as `grunt build`, `grunt test` or `grunt serve`) from [generator-backbone](https://github.com/yeoman/generator-backbone)
 * travis-ci integration (see link at the top)
