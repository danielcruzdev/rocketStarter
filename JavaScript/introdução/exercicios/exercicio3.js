var skills = ["Javascript", "ReactJS", "React Native"];

function temHabilidade(skills) {
    resultado = skills.indexOf('Javascript') 
    if(resultado === 0){
        console.log(true)
    }
    else{
        console.log(false)
    }
}

temHabilidade(skills); // true ou false