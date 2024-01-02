let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
let count=0;
const winPatterns=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];
const resetGame=()=>{
  turnO=true;
  count=0;
  enableBoxes();
  msgcontainer.classList.add('hide');
}

boxes.forEach((box) => {
  box.addEventListener("click",()=>{
    if(turnO){
      box.innerText="O";
      turnO=false;
    }
    else{
      box.innerText="X";
      turnO=true;
    }
    
    box.disabled=true;
    count++;
    let isWinner=checkWinner();
    if(count===9&&!winner){
      gamedraw();
    }
  } )
});
const gamedraw=()=>{
  msg.innerText="game was draw";
  msg.msgcontainer.classList.remove("hide");
  disableBoxes();
}
const disableBoxes=()=>{
  for (let box of boxes){
    box.disabled=true;
    
    }
}
const enableBoxes=()=>{
  for (let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
}
const showWinner=(winner)=>{
  msg.innerText=`congratulations the winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableBoxes();
}
const checkWinner=()=>{
  for(pattern of winPatterns){
   let posval1=boxes[pattern[0]].innerText;
   let posval2=boxes[pattern[1]].innerText;
   let posval3=boxes[pattern[2]].innerText;
   if(posval1!=""&&posval2!=""&&posval3!=""){
    if(posval1==posval2&&posval2==posval3){
      console.log("wiiner"+posval1);
      showWinner(posval1);
      return true;

    }}
  }
};
newgamebtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);






  

