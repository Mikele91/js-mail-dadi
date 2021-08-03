
var lista = ["mke_8@hotmail.it", "bolean@live.com", "giovannimuciaccia@libero.com"];

  

var email = prompt( "inserisci la tua e mail").toLowerCase();

console.log(lista.length);   

var accedi = false;

for (var i = 0; i < lista.length; i++) { 
    if(lista[i] == email) {
       accedi = true
    }else{

    
    
    }
}

if (accedi == true){
    alert("benveuto")
}else{
    alert("accesso negato")
}