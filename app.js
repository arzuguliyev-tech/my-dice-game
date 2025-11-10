"use strict";

let playButton = document.getElementById("roll-dice");

    playButton.addEventListener('click', ()=>
        {
            let firstRandomNumber = getRandomNumber(),
    secondRandomNumber = getRandomNumber();

let images = document.querySelectorAll('img'),
    title = document.getElementsByTagName('h1');



if(firstRandomNumber > secondRandomNumber)
    {
        title[0].innerHTML = "Player 1 Won"
    }
    else if(secondRandomNumber > firstRandomNumber)
        {
            title[0].innerHTML = "Player 2 Won"
        }
        else
            {
                title[0].innerHTML = "DRAW"
            }


switch(firstRandomNumber)
{
    case 1:
        images[0].setAttribute('src', 'dice1.png');
        break;
    
      case 2:
        images[0].setAttribute('src', 'dice2.png');
        break;

        case 3:
        images[0].setAttribute('src', 'dice3.png');
        break;

        case 4:
        images[0].setAttribute('src', 'dice4.png');
        break;

        case 5:
        images[0].setAttribute('src', 'dice5.png');
        break;

        case 6:
        images[0].setAttribute('src', 'dice6.png');
        break;
}



switch(secondRandomNumber)
{
    case 1:
        images[1].setAttribute('src', 'dice1.png');
        break;
    
      case 2:
        images[1].setAttribute('src', 'dice2.png');
        break;

        case 3:
        images[1].setAttribute('src', 'dice3.png');
        break;

        case 4:
        images[1].setAttribute('src', 'dice4.png');
        break;

        case 5:
        images[1].setAttribute('src', 'dice5.png');
        break;

        case 6:
        images[1].setAttribute('src', 'dice6.png');
        break;
}
        });


function getRandomNumber()
{
    return Math.floor(Math.random() * 6) + 1;
}