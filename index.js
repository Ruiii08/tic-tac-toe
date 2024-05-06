console.log("Begining game of tic-tac-toe")
let music = new Audio("music.mp3")
let Aturn = new Audio("ting.mp3")
let gameOver = new Audio("gameover.mp3")
let turn = "X"
let gameComp = false;
const changeTurn = ()=>{
    return turn==="X"?"0":"X"
}
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let win = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ] //innertext of all the three positions for any one of these combinations b/c equal then win
    win.forEach(e => {
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[0]].innerText) &&(boxtext[e[0]].innerText!=="")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Has won the game."
            gameComp = true
            document.querySelector('.img').getElementsByTagName('img')[0].style.width="20vw"
            document.querySelector('.line').style.width="20vw";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
            gameOver.play()   
        }
    })
}

let bx=document.getElementsByClassName("box");
music.play()
music.volume=0.15;
Array.from(bx).forEach(element =>{
    let boxt = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxt.innerText === ''){
            boxt.innerText = turn;
            turn = changeTurn();
            Aturn.play();
            checkWin();
            if(!gameComp){
                document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
            }
        }
    })
    element.addEventListener('touch',()=>{
        if(boxt.innerText === ''){
            boxt.innerText = turn;
            turn = changeTurn();
            Aturn.play();
            checkWin();
            if(!gameComp){
                document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
            }
        }
    })
})

//reset for button
reset.addEventListener('click',()=>{
    let boxt = document.querySelectorAll('.boxtext');
    Array.from(boxt).forEach(element=>{
        element.innerText = ""
    });
    turn = "X"
    gameComp=false;
    document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
    document.querySelector('.img').getElementsByTagName('img')[0].style.width="0vw";
    document.querySelector('.line').style.width="0vw";
})
reset.addEventListener('touch',()=>{
    let boxt = document.querySelectorAll('.boxtext');
    Array.from(boxt).forEach(element=>{
        element.innerText = ""
    });
    turn = "X"
    gameComp=false;
    document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
    document.querySelector('.img').getElementsByTagName('img')[0].style.width="0vw";
    document.querySelector('.line').style.width="0vw";
})