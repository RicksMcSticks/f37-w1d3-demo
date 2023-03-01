/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 
let obiwanAttack = 25
let anakinAttack = 35

if (obiwanAttack > anakinAttack) {
    console.log('Obiwan has a better attack than Anakin.')
} else if (anakinAttack > obiwanAttack) {
    console.log('Anakin has a better attack than Obiwan.')
} else {
    console.log('Anakin and Obiwan have the same attack.')
}


let obiwanHealth = 100
let obiwanDefense = 0

//check to see if obiwan can survive an attack from anakin
//if he can, health to be decreased by anakins attack and then his new health logged
//otherwise, obiwan was slain by anakin

if (obiwanHealth > anakinAttack){
    obiwanHealth -= anakinAttack
    console.log('obiwans health is now ' + obiwanHealth)
} else  {
    console.log('Obiwan was slain by Anakin, becoming even more powerful than Anakin can imagine.')
}


obiwanDefense = 30

let coinflip = 'heads'

//if (coinflip !== 'heads'){
  //  console.log('Anakin flees from Obiwan')
//} else {
  //  console.log('the fight continues!')
//}

for(let i = 0; i < 5; i++)
    if (obiwanHealth > anakinAttack - obiwanDefense){
        obiwanHealth -= anakinAttack - obiwanDefense
        console.log('obiwans health is now ' + obiwanHealth)
    } else  {
        console.log('Obiwan was slain by Anakin, becoming even more powerful than Anakin can imagine.')
    }
  
    while(obiwanHealth > 0){
        obiwanHealth -= anakinAttack - obiwanDefense
        console.log(`Obiwans health is now at ${obiwanHealth}`)
        if(obiwanHealth <= 0){
            console.log('obiwan is part of the living force now')
        }
    }