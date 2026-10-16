class Produto {
    id;
    nome;
    ativo;
    // metodo especial construtor
    constructor(id,nome,ativo){
    this.id =id;
    this.nome = nome;
    this.ativo = true;
    }
    }
    // instanciando = contruir um objeto
    const p1 =new Produto(1,'Fone');
    const p2 =new Produto(2,'Mouse');
    
    