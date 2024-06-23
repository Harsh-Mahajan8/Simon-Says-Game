let gameSeq =[];
let userSeq =[];
let level = 0;

play = document.querySelector('.start h1');
h2 = document.querySelector(".heading h2");
score = document.querySelector('.score');
body = document.querySelector('body');

play.addEventListener('click',function(){
    gameSeq = [];
    level = 0;
    score.innerText = '';
    setTimeout(function(){
        alert("Game has started");
        gameA();
        }
    ,130);
    play.style.display = 'none';
    setTimeout(game,2000) ;
})

btnClr = ['red','green','yellow','purple'];

function game(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    randIdx = Math.floor(Math.random()*4);
    randClr = btnClr[randIdx];
    console.log(randClr);
    randBtn = document.querySelector(`.${randClr}`);
    gameSeq.push(randClr);
    console.log(gameSeq);
    flash(randBtn);
    gameCick();
}

function checkBtn(idx){
    if(gameSeq[idx] === userSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(game,1000);
        }
        console.log("same value");
    }else{
        h2.innerText = "Game Over!!!!! Try agin";
       score.innerText = `Your Score is ${gameSeq.length}`;
       play.style.display = "block"; 
       play.innerText = "Try Again";
       redFlash();
    }
    }

    function redFlash(){
        body.classList.add('redFlash');
        setTimeout(function(){
            body.classList.remove('redFlash');
        },400);
    }

function flash(btn){
    btn.classList.add("flash");
    setTimeout(() => btn.classList.remove("flash"), 200);
} 

function btnPress(){
    flash(this);
    userSeq.push(this.id);
    console.log(userSeq);
    checkBtn(userSeq.length - 1);
}

let btns = document.querySelectorAll('.btn');
    for(btn of btns){
        btn.addEventListener('click',btnPress);
    }

