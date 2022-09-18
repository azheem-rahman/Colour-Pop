# Colour-Pop
General Assembly Software Engineering Immersive Batch 39 Individual Project 1 using HTML, CSS, JavaScript

Deployed on GitHub Pages: 

## Branches
### Main
Full code of game where player clicks on option coloured circles to input their answers.
### Stretch-goals
Full code of game where player drags and drops option coloured circles to input their answers.

## Game Overview
![Colour Pop Screenshot](/ColourPopScreenshot.png)
A memory game where a player is given 30 seconds to remember the colours and numbers of 10 circles and 30 seconds to fill in their answer

Each correct guess is given 1 point (1 point per colour and 1 point per number) out of a possible total score of 20

## Code Overview
### HTML
Fonts were imported from Google Fonts: Press Start 2P and Yatra One

Page divided into several sections
- contentMiddleTop for game title and welcome message
- contentMiddleUpper for question circles, countdown timer, button, player score
- contentMiddleLower for player answers circles, option circles, number input field

### CSS
Basic CSS styling used

Button styling codes were referenced from: https://codepen.io/DanielWeiner/pen/naybVd?editors=1100 

### JavaScript

Code is divided into 3 parts: Initialisation Stage, Reveal Stage, Start Game Stage

#### Initialisation Stage
A random colour is generated from a possible 6 colours (Hex Codes: #FF6060, #FABED4, #D3D3D3, #CC9E48, #AAFFC3, #FFD580)

A random number is generated from 0-999

Each question circle is given 1 random colour and 1 random number

An array to track player’s answer for colour and an array to track player’s answer for number is created

6 circles, each given the 6 colours mentioned above are placed at bottom of page for player to choose from

Timer set to 30 seconds

Question circles are hidden

Event Listener added to button to execute Reveal Stage when user clicks on button

#### Reveal Stage
When player clicks on REVEAL! button, question circles revealed for 30 seconds

At this stage, player is not able to input their answers

After 30 seconds is up:
- Question circles becomes hidden
- Button text changed to ‘START!’
- Event Listener added to button to execute Start Game Stage when user clicks on button

#### Start Game Stage
When player clicks on START! button, timer countdown starts for another 30 seconds

At this stage, player is able to input their answers:
- Type in and hit Enter to input their numbers
- For Main branch: player clicks on option circles to input their answer
- For Stretch-goals branch: player drags and drops from the option circles to input their answer

After 30 seconds is up:
- Player will not be able to input their answers anymore
- Question circles becomes visible again for player to compare their answers to
- Player score is printed at centre of page

## What is not working as intended
For the Drag and drop feature: Player is supposedly only able to start filling in their answers during Start Game Stage but the drag and drop feature is enabled from the time the page is loaded.

## Possible Future Improvements
- Adding in undo feature when player input their answers
- Adding in restart feature 
- Adding in additional levels: 
  - To allow player to choose different time given to remember/answer
  - To allow player to choose number of circles to guess
