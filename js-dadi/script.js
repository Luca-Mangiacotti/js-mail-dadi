//CREO UN ARRAY CHE CONTERRA' I VALORI DEL DADO
const dice = [ 1, 2, 3, 4, 5, 6 ]
//AVVISIAMO L'USER CHE IL COMPUTER GIOCHERA' PER PRIMO
alert('Pronto a giocare?')
alert('Il computer ha il primo turno!')

//IMPOSTIAMO UNA VARIABILE CHE CONTENGA UN NUMERO CASUALE DA 0-5 (INDICE DEL NOSTRO ARRAY DEL DADO)
let rollDice = Math.floor(Math.random() * 5);

//ATTRIBUIAMO AD UNA VARIABILE IL RISULTATO DEL COMPUTER
const pcPick = dice[rollDice]
alert(`Il computer ha ottenuto un: ${pcPick}!`)

//ORA ANDIAMO A DETERMINARE IL LANCIO DELL'USER
alert('Ora è il tuo turno, lancia il dado!')
rollDice = Math.floor(Math.random() * 5);

//ATTRIBUIAMO AD UNA VARIABILE IL RISULTATO DELL'USER
const userPick = dice[rollDice]
alert(`Hai ottenuto un: ${userPick}!`)

//PROCEDIAMO CON IL CONTROLLO DEL VINCITORE
if(pcPick > userPick){

    alert("Oh NOO! HAI PERSO!")
    
    } else if (userPick > pcPick){

    alert("COMPLIMENTI HAI VINTO!")

    } else {

        alert("PATTA.")
}