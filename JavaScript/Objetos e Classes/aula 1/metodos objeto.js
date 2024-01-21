//OBJETO

const pessoa = {
    nome: 'angélica',
    idade: 20,

    descrever: function () {
        console.log(`Nome é ${this.nome} e a idade é ${this.idade}`);
        //usar acento grave quando usar this
    }
};

pessoa.descrever();
