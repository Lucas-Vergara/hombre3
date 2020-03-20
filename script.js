random6 = () => Math.floor(Math.random()*6)+1;

let roll = [];
let dice = document.querySelectorAll(".dice");
let rounds = document.querySelectorAll(".round");
dice[0].style.backgroundImage = "url('images/1.png')";
dice[1].style.backgroundImage = "url('images/1.png')";
let play1 = "";
let play2 = "";
let play3 = "";
let hombre3 = "";
let jugadores = [];

roll = () => {   
    reset();

    for(i=0; i<2; i++){
        roll[i] = random6();
        if(roll[i] == 1) dice[i].style.backgroundImage = "url('images/1.png')"
        if(roll[i] == 2) dice[i].style.backgroundImage = "url('images/2.png')"
        if(roll[i] == 3) dice[i].style.backgroundImage = "url('images/3.png')"
        if(roll[i] == 4) dice[i].style.backgroundImage = "url('images/4.png')"
        if(roll[i] == 5) dice[i].style.backgroundImage = "url('images/5.png')"
        if(roll[i] == 6) dice[i].style.backgroundImage = "url('images/6.png')"
    }

    //rules
    if (roll[0] == roll[1]) play1 = "Regala " + roll[0];
    if (roll[0] == 3 || roll[1] == 3) play2 = "Hombre 3!"  
    if (roll[0] + roll[1] == 3) play2 = "Hombre 3!"
    if (roll[0] + roll[1] == 4) play3 = "minijuego"
    if (roll[0] + roll[1] == 5) play3 = "Toma el de la derecha"
    if (roll[0] + roll[1] == 6) play3 = "Toma el de la izquierda"
    if (roll[0] + roll[1] == 7) play3 = "Todos toman"
    if (roll[0] + roll[1] == 8) play3 = "Minijuego"
    if (roll[0] + roll[1] == 9) play3 = "Frente"
    if (roll[0] + roll[1] == 10) play3 = "Regla"
    if (roll[0] + roll[1] == 11) play3 = "Dedo"
    if (roll[0] + roll[1] == 12) play3 = "no me acuerdo"

    
    let array = []
    if(play1) array.push(play1); if(play2) array.push(play2); if(play3) array.push(play3);

    for(let i=0; i<array.length; i++){
        rounds[i].innerHTML = array[i];
    }
}

reset = () => {
    rounds[0].innerHTML = "";
    rounds[1].innerHTML = "";
    rounds[2].innerHTML = "";
    play1 = "";
    play2 = "";
    play3 = "";
}

dice[0].addEventListener("click", roll);
dice[1].addEventListener("click", roll);