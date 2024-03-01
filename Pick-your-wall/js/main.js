document.querySelector("#blue").onclick = blueClick
document.querySelector("#green").onclick = greenClick
document.querySelector("#purple").onclick = purpClick

function blueClick(){
    document.querySelector("body").style.backgroundColor='rgba(0,254,255)'
    document.querySelector("body").style.color='white'
}

function greenClick(){
    document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
    document.querySelector('purple').style.color = 'white'
}

function purpClick(){
    document.querySelector("body").style.backgroundColor = 'rgba(241,63,247,1)'
    document.querySelector("body").style.color = "white"
}
