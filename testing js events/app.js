



// let magicStatus = false
// let startBtn =  document.getElementById('startBtn')
// let stopBtn =  document.getElementById('stopBtn')

// function checkMagicStatus(){
//     if(magicStatus == true){
//         startBtn.style.display =  'none'
//         stopBtn.style.display =  'block'
//     }
//     else{
//         startBtn.style.display =  'block'
//         stopBtn.style.display =  'none'
//     }
//     }


// function start(){
//     magicStatus = true
//     let magic = document.getElementById('magic')
//     magic.classList.add('magic')
//     checkMagicStatus()
// }



// function stop(){
//     magicStatus = false
//     let magic = document.getElementById('magic')
//     magic.classList.remove('magic')
//     checkMagicStatus()
// }


let magicStatus = false
let startBtn = document.getElementById('startBtn')
let stopBtn = document.getElementById('stopBtn')

function checkMagicStatus(){
    if(magicStatus==true){
        startBtn.style.display = 'none'
        stopBtn.style.display = 'block'
    }
    else{
        startBtn.style.display = 'block'
        stopBtn.style.display = 'none'
    }
}

function start(){
let magic = document.getElementById('magic')
magic.classList.add('magic')
magicStatus = true
checkMagicStatus()
}


function stop(){
let magic = document.getElementById('magic')
magic.classList.remove('magic')
magicStatus = false
checkMagicStatus()
}