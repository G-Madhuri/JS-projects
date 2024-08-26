let boxes = document.querySelectorAll('.box');
let resetBtn  = document.querySelector('#reset-btn');
let turnO = true;//playerX/playerO
let newGameBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('.msg');
let count=0;let x=true;
const winPatterns=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];
boxes.forEach((box)=>{
    box.addEventListener('click', ()=>{
        count++
        if(turnO){
            box.innerText='O';
            turnO=false;
        }
        else{
            box.innerText='X';
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
        if(x && count==9){
            msg.innerText=`Game tied`;
            msgContainer.classList.remove('hide');
        }
        

       
    })
});

const showWinner=(win)=>{
    msg.innerText=`Congratulations, Winner is: ${win}`;
    msgContainer.classList.remove('hide');
}

const checkWinner=()=>{
    for(pattern of winPatterns){
        pos1=boxes[pattern[0]].innerText;
        pos2=boxes[pattern[1]].innerText;
        pos3=boxes[pattern[2]].innerText;
        if(pos1!='' && pos2!='' && pos3!=''){
            if(pos1==pos2 && pos2==pos3){
                showWinner(pos1);
                x=false;
            }
        }
    }
}

const disable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText='';
    }
}

const resetGame = ()=>{
    turnO=true;
    enable();
    msgContainer.classList.add('hide');
    count=0;
    x=true;

}
newGameBtn.addEventListener('click',resetGame);
resetBtn.addEventListener('click',resetGame);