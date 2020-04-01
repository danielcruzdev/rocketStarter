function experiencia(ano) {
    if(ano < 1){
        console.log("Iniciante")
    }
    else if(ano => 1 && ano <= 3){
        console.log("Intermediário")
    }
    else if(ano => 3 && ano <= 6){
        console.log("Avançado")
    }
    else {
        console.log("Jedi Master")
    }
}

experiencia(5);
// De 0-1 ano: Iniciante
// De 1-3 ano: Intermediário
// De 3-6 ano: Avançado
// De 7 acima: Jedi Master