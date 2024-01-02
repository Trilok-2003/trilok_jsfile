let userScore=0;
let comScore=0;

const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let myscore=document.querySelector("#urscore");
let comscore=document.querySelector("#comscore");
const comchoice  =()=>{
    const options=["rock","scissors","paper"];
     const randidx=Math.floor(Math.random()*3);
     return options[randidx];

};
const draw=()=>{
    msg.innerText="it is a draw paly again";
    msg.style.backgroundColor="white";
    msg.style.color="black"
}
const showWinner=(userwin,userId,compchoice)=>{
    if (userwin){
        userScore++;
        myscore.innerText=userScore;
        msg.innerText=`Your ${userId} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        comScore++;
        comscore.innerText=comScore;
        msg.innerText=`compuer ${compchoice} beats urs ${userId}`;
        msg.style.backgroundColor="red";

        
    }
}
const playGmae =(userId)=>{
     const compchoice=comchoice();
   if (userId===compchoice){
    draw();
   }else{
    let userwin=true;
    if(userId==="rock"){
        userwin=compchoice==="paper" ? false :true;
    }else if(userId==="paper"){
        userwin=compchoice==="scissors" ? false :true;
    }
    else{
        userwin=compchoice==="rock" ? false :true;
    }
    showWinner(userwin,userId,compchoice);
   }


};
choices.forEach((choice)=> {
     choice.addEventListener("click",()=>{
        let  userId=choice.getAttribute("id");
        playGmae(userId);

     });
    
});