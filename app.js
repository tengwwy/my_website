let boxes = document.querySelectorAll('.selection')
let winElem = document.querySelector('.winStatement')

let markers = ['X', 'O']
let turn = 0
let activeGame = true


function checkWin(){
    box1 = document.querySelector('.box1')
    box2 = document.querySelector('.box2')
    box3 = document.querySelector('.box3')
    box4 = document.querySelector('.box4')
    box5 = document.querySelector('.box5')
    box6 = document.querySelector('.box6')
    box7 = document.querySelector('.box7')
    box8 = document.querySelector('.box8')
    box9 = document.querySelector('.box9')

    if(
        box1.innerText == markers[turn] && box2.innerText == markers[turn] && box3.innerText == markers[turn]
        || box1.innerText == markers[turn] && box4.innerText == markers[turn] && box7.innerText == markers[turn]
        || box1.innerText == markers[turn] && box5.innerText == markers[turn] && box9.innerText == markers[turn]
        || box2.innerText == markers[turn] && box5.innerText == markers[turn] && box8.innerText == markers[turn]
        || box3.innerText == markers[turn] && box6.innerText == markers[turn] && box9.innerText == markers[turn]
        || box3.innerText == markers[turn] && box5.innerText == markers[turn] && box7.innerText == markers[turn]
        || box4.innerText == markers[turn] && box5.innerText == markers[turn] && box6.innerText == markers[turn]
        || box7.innerText == markers[turn] && box8.innerText == markers[turn] && box9.innerText == markers[turn]
    ){
        return true
    }else{
        return false
    }
}


boxes.forEach((box)=>{
    box.addEventListener('click', (event)=>{
        if(event.target.innerText == '' && activeGame){
            event.target.innerText = markers[turn]
            if(checkWin() == true){
                activeGame = false
                winElem.innerText = `Congrats! ${markers[turn]} Wins!!!`
            }
            turn = 1 - turn
        }
    })
})

