class Matematica{
    static soma(a, b){
        return a + b;
    }
}

console.log(Matematica.soma(1, 2))


class List {
    constructor(){
        this.data = []
    }

    add(data){
        this.data.push(data)
    }
}

class TodoList extends List{
    constructor(){
        super();

        this.usuario = 'Daniel'
    }

    mostraUsuario() {
        console.log(this.usuario)
    }
}

const minhaLista = new TodoList();

