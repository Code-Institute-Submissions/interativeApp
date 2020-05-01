# Syed Rizvi Memory Game
Memory games are a very good way to sharpen your memory skills. Normally short-term plays a great role in order to play memory games but long-term memory is very much connected to short-term memory. Hence, these games also help to improve long-term memory.

This game is about matching the same cards/tiles. There are different level of difficulty to choose to help you enhance your memory to the next level.

## UX
This game can help children and adults equally to induldge themselves in a fun way to improve their memory key skills. 
* As the game developer, I want to develop an interactive game which could benefit people to improve their memory.
* As the game developer, I want the game to be immersive so that people do not get bored. 
* As the game developer, I want to the game to have different difficulty level so that people could take their skills to next level.
* As the game developer, I want the game to have different difficulty level so that people on different levels still find the game challenging enough.
* As the game developer, I want the game to be visually and audibly pleasant so that players get a good feeling about the game.

The game has nice animations on the cards e.g. when the card is flipped or when the cards match. There are audio effects on card flips and cards match which give better experience to the player.
The game is responsive and can run on a wife range of devices e.g. tvs, smartphones, laptops etc. Below are the DEMO on different screens.

<div align="center"> **A gif demo is below on a large screen:** </div>
<div align="center"> The game is live at: https://irfanrizvidev.github.io/interativeApp/  </div>

![Demo of Memory Game](/assets/images/large-screen-web.gif)
## Features
The game has many features and some of them would be desireable to have as listed below:

### Existing Features
* Game is responsive
* Game has visual and audible effects
* Game has a best time features
* Game records how many tries it took to match all the cards/tiles
* Game shows the performace graph when all the cards are matched
* Game has different levels of difficulty

### Features left to Implement
* Having the best time record for last three attempts would be desireable
* A dedeicated area to store best time and attempts 
* Animated tiles to match for extra difficulty
* Game without having to reload the page to start the game again

## Technologies Used
* [GITPOD IO](https://gitpod.io)
    * GITPOD was used as  the development platform to develop this project.

* [HTML](https://www.wikipedia.com/HTML)
    * HTML 5 is used to make this web project.

* [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
    * CSS is used to style the HTML elements

* [JavaScript](https://www.javascript.com/)
    * JavaScript language is used to created the logic of the game and to make game more interactive.

* [Bootstrap 4](https://getbootstrap.com)
    * Bootstrap 4 is the latest version of Bootstrap and it was used to make the Logo on the Navigation bar and to structure the website.

* [Google Fonts](https://fonts.google.com)
    * Google Fonts were implemented to make the website more attractive. 

* [jQuery](https://jquery.com)
    * JQuery was used for easy manipulation of DOM in javascript.

* [Popper.js](https://cdnjs.com)
    * Popper.js is a dependency of Bootstrap. 

* [Font Awesome](https://fontawesome.com)
    * The tiles were made using the font awesome.

* [d3.js v4](https://d3js.org)
    * d3.js was used to generate dynamic charts of the best time. 

## Testing
The website is tested on Google Chrome for different screen sizes e.g. (S5 mobile, Iphone, Ipad etc.). The website is also tested on Firefox and Internet explorer latest versions.
The game was working fine on Google chrome when tested on Firefox and IE. The front of the cards were shown after flipping them. A fix was implemented by applying the following code on .customcard .front classes.
```
-webkit-transform: rotateX(0deg);
-moz-transform: rotateX(0deg);
-o-transform: rotateX(0deg);
transform: rotateX(0deg);
```

Working fine on Goolge:

![Working fine on Google](/assets/images/works-google.png)

Problem on Firefox and IE:

![Working fine on Google](/assets/images/probelm.png)

The HTML was validated on w3.org and the results were OK as seen below:

![HTML Validated](/assets/images/html.jpg)

The css was also validated on w3.org and the results were ok as seen below:

![CSS Validated](/assets/images/cssvalidated.png)

## Deployment
The project is deployed on Github pages on the following link:

[Live deployed project on Github Pages](https://irfanrizvidev.github.io/interativeApp/)

The project is developed using GITPOD IO. GITPOD allows easy to use GIT integration to commit changes on Github. 

<div align="center">Staging the changes using GIT section on GITPOD</div>

![Gitpod changes staging](/assets/images/stage.png)

<div align="center">The changes are commited after a message as shown below</div>

![COmmit changes](/assets/images/commit.png)

<div align="center">Pushing changes to Github</div>

![Push on GitPOD](/assets/images/push.png)

<div align="center">Click on Settings and Publish project on Github Pages</div>

![GITHUB pages](/assets/images/githubpages.png)

The same would be achieved using the following git commands:
```
git init

git add file name

git commit -m "comment"

orgin master copied from the github pages

git push orgin master

git status

github username entered

github password entered
```
## Credits
Author: Syed Irfan Haider Rizvi
### Media
The sound effects used in the game are from the following website:
https://www.fesliyanstudios.com/sound-effects-search.php?q=sea

### Acknowledgements
I received help from different youtube videos by searching javascript match cards.
I coded the game by myself. I only looked at the videos to get ideas.