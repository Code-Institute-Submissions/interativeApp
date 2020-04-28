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

* [HTML](https://www.wikipedia.com/HTML)

* [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

* [JavaScript](https://www.javascript.com/)

* [Bootstap 4](https://getbootstrap.com)

* [Google Fonts](https://fonts.google.com)

* [jQuery](https://jquery.com)

* [Popper.js](https://cdnjs.com)

* [Font Awesome](https://fontawesome.com)

* [d3.js v4](https://d3js.org)

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

## Credits
Author: Syed Irfan Haider Rizvi
### Media
sounds
https://www.fesliyanstudios.com/sound-effects-search.php?q=sea

### Acknowledgements
I received help from different youtube videos by searching javascript match cards.
I coded the game by myself. I only looked at the videos to get ideas.