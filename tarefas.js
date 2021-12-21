/* Exercício 0 */

class Tarefa{
	constructor(nome, categoria, realizada){
		this.nome = nome;
		this.categoria = categoria;
		this.realizada = realizada;
	}
	/* Exercício 1 */
	adicionaNaPagina(containerEl){
		let elementoLista = document.createElement('li');
		elementoLista.classList = 'item-tarefa';
		if(this.realizada){
			elementoLista.classList += ' marcado';
		}
		elementoLista.classList += ' categoria-' + this.categoria;
		elementoLista.innerHTML = this.nome;
		containerEl.appendChild(elementoLista);
	}
}

tarefas = [];
tarefas.push(new Tarefa('Comprar leite', 'compras', false));
tarefas.push(new Tarefa('Escutar chimbinha', 'lazer', true));
tarefas.push(new Tarefa('Estudar Física', 'estudos', false));

/* Exercício 1 */

const listaTarefas = document.querySelector('#lista-tarefas');
listaTarefas.innerHTML = '';

for(let tarefa of tarefas){
	tarefa.adicionaNaPagina(listaTarefas);
}

/* Exerício 2 */
let botaoNovaTarefa = document.querySelector('#incluir-nova-tarefa');
botaoNovaTarefa.addEventListener('click', function(e) {
	criaNovaTarefa();
});

function criaNovaTarefa(){
	let inputNome = document.querySelector('#nova-tarefa-nome');
	let inputCategoria = document.querySelector('#nova-tarefa-categoria');

	/* Para evitar que uma tarefa vazia seja inserida */
	if(inputNome.value === ''){
		return;
	}

	novaTarefa = new Tarefa(inputNome.value, inputCategoria.value, false)

	tarefas.push(novaTarefa);
	novaTarefa.adicionaNaPagina(listaTarefas);
	inputNome.value = '';
	inputNome.focus();
}

/* Opcional 3 */
const filtroCategoria = document.querySelector('#filtro-de-categoria');

filtroCategoria.addEventListener('change', function(e) {
	let tarefasArray = document.querySelectorAll('.item-tarefa');
	/* Remove a classe de todas as tarefas e adiciona apenas quando há uma categoria selecionada */
	for(let tarefa of tarefasArray){
		tarefa.classList.remove('retido-no-filtro'); 
		if(filtroCategoria.value !== '' && !tarefa.classList.contains('categoria-'+filtroCategoria.value)){
			tarefa.classList.add('retido-no-filtro');
		}
	}
});

/* Opcional 4 */
let inputNome = document.querySelector('#nova-tarefa-nome');

inputNome.addEventListener('keyup', function(e) {
	if(e.key === 'Enter'){
		criaNovaTarefa();
	}
});