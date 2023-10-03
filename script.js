console.log("Welcome to Tic Tac Toe")
let music = new Audio("musicgame.mp3")
let turn1 = new Audio("ting.mp3")
let gameover= new Audio("gameover.wav")
let turn = "X";
let isgameover = false;

//function to change the turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}

//function to check for a win
const checkwin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    let isTie = true;
     wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && 
        (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && 
        (boxtext[e[0]].innerText !== "") 
        ){ 
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won! Reset To Play Again";
            isgameover = true;
            document.querySelector(".imgbox img").style.width = "200px";
            if (isgameover){
                Array.from(boxes).forEach(box =>{
                    box.removeEventListener('click', handleBoxClick);
                });
            }
        } 
     });

// Check for a tie (all boxes are filled and no winner)
  Array.from(boxtext).forEach(box => {
    if (box.innerText === "") {
      isTie = false;
    }
  });

  if (isTie && !isgameover) {
    document.querySelector('.info').innerText = "Game Over! Reset To Play Again";
    isgameover = true;
  }
}; 
// game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(Element =>{
    let boxtext = Element.querySelector('.boxtext');
    Element.addEventListener('click',()=>{
        if(boxtext.innerText ===''&& !isgameover){
            boxtext.innerText = turn;
            turn = changeTurn();
            turn1.play();
            checkwin();
                if (!isgameover){
            document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
        }
    }
 });
});

// add onclick listener to reset button
 reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
       element.innerText = ""
    });
    turn = "X"
    isgameover = false
    document.querySelector(".imgbox img").style.width = "0px";
    document.getElementsByClassName("info")[0].innerText = "Turn for" + turn
 })
