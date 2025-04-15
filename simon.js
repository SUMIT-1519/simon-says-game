let gameSeq=[];
let userSeq=[];

let started=false;
let level = 0 ;
let btns=["yellow","red","purple","green"];
let h2= document.querySelector("h2");
document.addEventListener("keypress",function(){
    if (started==false){
        console.log("Game is Started")
        started=true;
    }

    levelUp();
});


function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
    }
function userFlash(btn){
  btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
        },250)
        }
    


function levelUp(){
    userSeq=[];        //reset user seq in order to add values from start
    level++;
    h2.innerText=`Level ${level}`;

  let randomindex=Math.floor (Math.random()*3);
  let randomcolor=btns[randomindex];
  let randombtn= document.querySelector( `.${randomcolor}`);   
 // console.log(randomindex);
  //console.log(randomcolor);
  //console.log(randombtn);
  gameSeq.push(randomcolor);
  console.log(gameSeq);
    gameFlash(randombtn);

}

function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else {
        h2.innerHTML=`Game Over your score was <br> ${level}</br> <br> press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1)
}
let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started = false ;
    gameSeq=[];
    userSeq=[];
    level=0;
}