class PessoaJuridica extends Pessoa {
    private _cnpj: string;

    constructor(nome: string, idade: number, dataNascimento: Date, cnpj: string) {
        super(nome, idade, dataNascimento);
        this._nome += '-Jurídica';
        this._cnpj = cnpj;
    }

    get cnpj(): string {
        return this._cnpj;
    }

    set cnpj(cnpj: string) {
        this._cnpj = cnpj;
    }
}