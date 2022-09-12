//const c1 = new Conta('1', 100);
//const c2 = new Conta('2');
//console.log(c1.numero);
//const contaController = new ContaController();
//contaController.adicionarConta(c1);
//contaController.adicionarConta(c2);
//contaController.listar();
//const contaBonificada = new ContaBonificada('10', 100);
//contaBonificada.creditar(10);
//console.log(contaBonificada.getSaldo());
// const repContas = new RepositorioContas();
//
// const c1 = new Conta('1', 100);
// const c2 = new Conta('2');
//
// repContas.adicionar(c1);
// repContas.adicionar(c2);
//
// repContas.getContas().forEach(conta => console.log(conta.numero))
// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c1.saldo = 200;
//
// c1.debitar(50);
// c2.creditar(1000);
// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c2.transferir(c1, 500);
// console.log(c1.saldo)
// console.log(c2.saldo)
const repositorioPessoas = new RepositorioPessoas();
const c1 = new Conta('1', 1025);
const c2 = new Conta('2', 358);
const c3 = new Conta('3', 159);
const c4 = new Conta('4', 3680);
const c5 = new Conta('5', 4500);
const c6 = new Conta('6', 5899);
const cliente1 = new Cliente('Felipe', 22, new Date('10/10/2000'), '71118988426');
const cliente2 = new Cliente('Maria Rita', 21, new Date('26/06/2002'), '48965696336');
const cliente3 = new Cliente('Fernando', 19, new Date('12/05/2003'), '15632698696');
const empresa1 = new Empresa('Intec', 1, new Date('12/02/2009'), '45689696363956');
const empresa2 = new Empresa('Visãotec', 2, new Date('01/05/2022'), '48963569493599');
const empresa3 = new Empresa('pgnet', 3, new Date('26/08/2015'), '55489879544896');
cliente1.acrescentarConta(c1);
cliente2.acrescentarConta(c2);
cliente3.acrescentarConta(c3);
empresa1.acrescentarConta(c4);
empresa2.acrescentarConta(c5);
empresa3.acrescentarConta(c6);
repositorioPessoas.adicionar(cliente1);
repositorioPessoas.adicionar(cliente2);
repositorioPessoas.adicionar(cliente3);
repositorioPessoas.adicionar(empresa1);
repositorioPessoas.adicionar(empresa2);
repositorioPessoas.adicionar(empresa3);
repositorioPessoas.pessoas
    .forEach(pessoa => {
    console.log('Pessoa: ' + pessoa.nome + ' - Saldo Total: ' + pessoa.saldoTotalContas() + ' - Média Saldos: ' + pessoa.mediaSaldoContas());
});
empresa1.removerConta('4');
console.log(empresa2.pesquisarConta('5'));
