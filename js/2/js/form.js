(function () {
    function CreateForm(container) {
        let form=document.createElement('form');
        let input=document.createElement('input');
        let buttonWrapper=document.createElement('div');
        let button=document.createElement('button');
    
        form.classList.add('input-group', 'mb-1');
        input.classList.add('form-control');
        input.placeholder='Введите четное число карточек в игре от 2 до 10';
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn', 'btn-primary');
        button.textContent='Готово';
    
        container.append(form);
        buttonWrapper.append(button);
        form.append(input); 
        form.append(buttonWrapper);

        return {
            form,
            input,
            button
        };
    }

    function constructForm(count, container) {
                
          let counter=1;      
        for (i=0; i<count; i++) {
            for (j=0; j<(count/2); j++) {
                let div1=document.createElement('div');
                div1.classList.add('card', `card${count}`);
                div1.dataset.number=counter;
                let div12=document.createElement('div');
                div12.classList.add('front');
                let span1=document.createElement('span');
                span1.classList.add('text', `text${count}`);
                span1.textContent=counter;
                let img1=document.createElement('img');
                img1.classList.add('back');
                img1.src='/img/800px-Atlas_deck_ace_of_diamonds.svg.png';
                img1.alt='Back card';
                div12.append(span1);
                div1.append(div12);
                div1.append(img1);
                container.append(div1);

                let div2=document.createElement('div');
                div2.classList.add('card', `card${count}`);
                div2.dataset.number=counter;
                let div22=document.createElement('div');
                div22.classList.add('front');
                let span2=document.createElement('span');
                span2.classList.add('text', `text${count}`);
                span2.textContent=counter;
                let img2=document.createElement('img');
                img2.classList.add('back');
                img2.src='/img/800px-Atlas_deck_ace_of_diamonds.svg.png';
                img2.alt='Back card';
                div22.append(span2);
                div2.append(div22);
                div2.append(img2);
                container.append(div2);
                ++counter;
            }
        }
    }

function FormInput(container, area) {
    formInp=CreateForm(container);
    formInp.form.addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('form-number').innerHTML='';
        if ((formInp.input.value%2==0) && (formInp.input.value>=2) && (formInp.input.value<=10))
            constructForm(formInp.input.value, area);
            else constructForm(4, area);

  const cards = document.querySelectorAll('.card');

  let length=cards.length;
  let count=0;
  
  let hasFlippedCard1 = false;
  let hasFlippedCard2 = false;

  let lockBoard = false;
  let firstCard, secondCard, thirdCard=null;
  
  function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    if (this === secondCard) return;
    if (this === thirdCard) return;
    this.classList.add('flip');

    if (!hasFlippedCard1) {
      hasFlippedCard1 = true;
      firstCard = this;
      return;
    }

    if (!hasFlippedCard2) {
      hasFlippedCard2 = true;
      secondCard = this;
      if (count===(length-2))  {CreateButton()};
      return;
    }

    thirdCard=this;

        
    Matching();

    
      if (thirdCard!==null) {firstCard=thirdCard;  hasFlippedCard1 = true; thirdCard=null; return};

    

  }

  function Matching() {
    let isMatch = firstCard.dataset.number === secondCard.dataset.number;
    isMatch ? ResetCards() : unflipCards();
  }

  function ResetCards() {
    count+=2;
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    console.log(count);
    
    reset();
  }

  function unflipCards() {
      lockBoard = true;



        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        reset();


  }


    function reset() {
        [hasFlippedCard1,hasFlippedCard2, lockBoard] = [false, false,false];
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
    }, 1060000);
      
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
            

        })

    }

    window.FormInput=FormInput;

}) () 

