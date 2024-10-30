let boxes=document.querySelectorAll('.box');
let msgcontainer=document.querySelector('.msg-container');
let msg=document.querySelector('#Winner');
let newgamebtn=document.querySelector('#newgame');
let resetbtn=document.querySelector('.resetbtn');
let maingame=document.querySelector('.main');
let turn0=true;
// 2D Arrays
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
let count=0;
boxes.forEach((box)=> {
    box.addEventListener('click',()=>{
        if (turn0) {
                box.innerText='0';
                box.style.color='pink';
                turn0=false;          
        } else {
            box.innerText='X';
            box.style.color='black';
            turn0=true;
        }
        chechwinner();
        count++;
        if(count===9)
            {
                msg.innerText=`DRAW! There is no winner in this game`;
                msgcontainer.classList.remove('hide');
                maingame.classList.add('remove');
                // disablboxes();
            }
        box.disabled=true;
        
    });
});
const chechwinner=()=>{
      for (const pattern of winpattern) {
           let valo=boxes[pattern[0]].innerText;
           let val1=boxes[pattern[1]].innerText;
           let val2=boxes[pattern[2]].innerText;
           if(valo!='' && val1!='' && val2!=''){
            if (valo==val1 && val1==val2)
            {
                console.log("woww You'r a winner");
                printwinner(valo);
            }
        } 
      }      
}
const printwinner=(winner)=>{
    msg.innerText=`Congratulations! winner is ${winner}`;
    msgcontainer.classList.remove('hide');
    disablboxes();
    maingame.classList.add('remove');
    disablboxes();
}
const disablboxes=()=>{
    for (const box of boxes) {
        box.disabled=true;
      }
}
const Enableboxes=()=>{
    for (const box of boxes) {
        box.disabled=false;
        box.innerText='';
    }
}
const resetgame=()=>{
    turn0=true;
    Enableboxes();
    msgcontainer.classList.add('hide');
    maingame.classList.remove('remove');
}
newgamebtn.addEventListener('click', resetgame);
resetbtn.addEventListener('click', resetgame);