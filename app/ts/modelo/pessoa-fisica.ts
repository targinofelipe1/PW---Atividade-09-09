class PessoaFisica extends Pessoa {
    private _cpf: string;
    
    constructor(nome: string, idade: number, dataNascimento: Date, cpf: string) {
        super(nome, idade, dataNascimento);
        this._nome += '-Física';
        this._cpf = cpf;
    }

    get cpf(): string {
        return this._cpf;
    }

    set cpf(cpf: string) {
        this._cpf = cpf;
    }
}