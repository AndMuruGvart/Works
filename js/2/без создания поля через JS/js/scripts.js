
const cards = document.querySelectorAll('.card');

let length=cards.length;
let count=0;

let hasFlippedCard = false;
 let lockBoard = false;
  let firstCard, secondCard;

  function flipCard() {
   if (lockBoard) return;
   if (this === firstCard) return;
    this.classList.add('flip');

    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
      return;
    }

    secondCard = this;

    Matching();
  }

  function Matching() {
    let isMatch = firstCard.dataset.number === secondCard.dataset.number;
    isMatch ? ResetCards() : unflipCards();
  }

  function ResetCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    count+=2;
    if (count===length)  {CreateButton()};
    reset();
  }

  function unflipCards() {
     lockBoard = true;

    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
      reset();
    }, 1000);
  }


   function reset() {
       [hasFlippedCard, lockBoard] = [false, false];
       [firstCard, secondCard] = [null, null];
  }

     function CreateButton() {
      let div=document.createElement('div');
      let button=document.createElement('button');
      div.classList.add('btn-wrapper');
      button.classList.add('btn');
      button.textContent='Сыграть еще раз';

      document.body.append(div);
      div.append(button);
      button.addEventListener('click', function() {
        location.reload();
      }); 
    }


    // По истечение 1 минуты игра перезапускается
    setTimeout(() => {
      location.reload();
    }, 60000);
      
     // Вызов IIFE для использования алгоритма Фишера-Йетса
     (() => {
      for (let i=0; i<cards.length; i++) {
        cards[i].style.order=i;
      }
      for (let i = cards.length-1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [cards[i].style.order, cards[j].style.order] = [cards[j].style.order, cards[i].style.order];
      }
    })()



cards.forEach(card => card.addEventListener('click', flipCard));
