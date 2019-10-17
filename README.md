# Happy Little Palette Picker: A Bob-Ross-Inspired Palette Generator

## By Alyssa Lundgren and Ann Cerveny

## Description

Happy Little Palette Picker is a color-generator application that implements both front-end and back-end functionality to allow users to generate random palettes, lock colors to generate a custom palette, and create folders to store palettes.  This project served as an introduction to utilizing back-end technologies in which, via PostgresSQL, Express.js, Node.js, and Knex, we were able to create and run a server as well as seed and migrate a database, while also allowing for the addition and subtraction of palettes and/or folders pending user input. Using React, we developed a modular front-end application that highlights a re-useable components structure and conditional rendering to keep our code base manageable in size. Happy Little Palette Picker is thoroughly tested using Enzyme and Jest test libraries to avoid any "Happy Little Accidents". We hope you enjoy using it as much as we enjoyed making it!

## Technologies Used:
* React
* PostgresSQL
* Express.js
* Node.js
* Knex
* Jest 
* Enzyme

## Learning Objectives:
* Introduction to server-side testing
* Enhance familiarity with CRUD endpoints and HTTP network requests
* Using CORS to join the front-end and back-end functionalities
* Learn to manuever and utilize development environments
* Solidify professional work-flow habits

## Installation

### Begin by cloning down the repository onto your local machine

`git clone [remote-address] [what you want to name the repo]`

For full functionality, be sure to additionally download the companion repository, [PalettePicker-BE](https://github.com/lundgrea/PalettePicker-BE), and review the installation instructions.

### Install the library dependencies by running

`npm install`

### In the project directory, run:

#### `npm start` to launch in browser

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `npm test` to view test coverage

Launches the test runner in the interactive watch mode.

## Screenshots

Homepage

![](https://github.com/lundgrea/PalettePicker-FE/blob/master/src/assets/HappyLittleHomepage.png)

Homepage w/ Locked Colors

![](https://github.com/lundgrea/PalettePicker-FE/blob/master/src/assets/HappyLittleLockOptions.png)

Homepage w/ Selected Folder

![](https://github.com/lundgrea/PalettePicker-FE/blob/master/src/assets/HappyLittlePalettesPerFolderPage.png)

Save Palette Options

![](https://github.com/lundgrea/PalettePicker-FE/blob/master/src/assets/HappyLittleSavePaletteForm.png)

Add Palette Name

![](https://github.com/lundgrea/PalettePicker-FE/blob/master/src/assets/HappyLittleAddPaletteDemo.png)

Display Added Palette

![](https://github.com/lundgrea/PalettePicker-FE/blob/master/src/assets/HappyLittleCompleteScreen.png)


