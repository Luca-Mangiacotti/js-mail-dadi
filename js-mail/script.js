//CREO UN ARRAY CONTENENTE LA LISTA DELLE MAIL A CUI E' CONSENTITO L'ACCESSO
const accessList = [
    'giovanni@email.com',
    'peppino@email.com',
    'carletto@email.com',
    'aldo@email.com',
    'giacomo@email.com',
    'roberto@email.com',
    'santino@email.com',
    'ugo@email.com',
]

alert('Da qui potrai controllare se la tua e-mail è presente nella lista d\'accesso')

//CREO UNA VARIABILE CHE CONTERRA' LA E-MAIL DELL'USER
let userMail = 0

//CREO UNA VARIABILE PER LA VALIDAZIONE DELLA E-MAIL
let mailVerification = 0

//DEFINISCO UN CICLO CON LA CONDIZIONE CHE NELLA IMMISSIONE SIA PRESENTE IL CARATTERE "@"
//PER ASSICURARMI CHE SIA STATA INSERITA UNA E-MAIL, NEL CASO CONTRARIO VERRA' RICHIESTA 
//NUOVAMENTE LA E-MAIL
do{
    //CHIEDO ALL'USER DI INSERIRE LA SUA E-MAIL
    userMail = prompt('Inserisci la tua e-mail')
    //PROCEDO AL CONTROLLO
    mailVerification = userMail.search("@");
    if ( mailVerification < 0){
        alert('attenzione non è stata inserita una e-mail corretta')
    } 

} while ( mailVerification < 0 )

//UNA VOLTA CHE ABBIAMO OTTENUTO UN INDIRIZZO E-MAIL VALIDO PASSIAMO AL CONTROLLO DELLA LISTA
//CREO UNA VARIABILE PER REGISTRARE O MENO LA PRESENZA DELLA E-MAIL IN LISTA
let mailChecK = false;

//ANDIAMO A SCANNERIZZARE LA LISTA DELLE E-MAIL CON UN CICLO FOR
for( let i = 0 ; i < accessList.length ; i++){

    //CONTROLLIAMO OGNI ELEMENTO DELL'ARRAY TRAMITE [i] SE CORRISPONDA CON LA E-MAIL INSERIRTA DALL'USER
    if(accessList[i] == userMail ) {
        
        //VERIFICATASI LA CORRISPONDENZA DO ALLA MIA VARIABILE DI CONTROLLO IL VALORE 'TRUE'
        mailChecK = true
    }   
}

//SE LA NOSTRA CORRISPONDENZA SI E' VERIFICATA ANDIAMO AD AVVISARE IL NOSTRO USER CHE PUO' ACCEDERE
if (mailChecK == true){
    alert(" ACCESSO CONSENTITO! ")
    //ALTRIMENTI COMUNICHEREMO CHE LA SUA E-MAIL NON E' PRESENTE IN LISTA
} else {
    alert(" ACCESSO NEGATO! ")
}
