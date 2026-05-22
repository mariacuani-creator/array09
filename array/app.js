let nome = ["Maria","Luiza"]

function busca (){
    let nomeBusca = document.querySelector("#input").value;
    for(let i = 0; i < nome.length; i++){
        if(nomeBusca == nome[i]){
            document.querySelector("#saída").textContent = 
            nomeBusca + " encontrado";
        }
        break
    }
}