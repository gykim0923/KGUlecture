const TextElement = document.querySelector('input[name = title]');
const SelectElement =document.querySelector('select[name=piority]');
const ButtonElement = document.querySelector('button[name=save]');
const TableToDo = document.getElementById('table_todo');
const TableToDoing = document.getElementById('table_doing');
const TableToDone = document.getElementById('table_done');
const PRIORITY={
	normal:'일반',
	high: '높음',
	low :'낮음',
}
ButtonElement.addEventListener('click',()=>{
	const contents = TextElement.value;
	const priortiy = SelectElement.value;
	
	addTask(priortiy, contents);
	reset();
	
});
function reset(){
	TextElement.value ='';
	SelectElement.value = 'normal';
}
function addTask(priortiy, contents){
	const date = new Date();
	const tr = document.createElement('tr');
	const tds =
		  ['checkbox','priortiy','contents','date'].map(() =>
			document.createElement('td'));
		const checkBoxElement = document.createElement('input');
		checkBoxElement.type = 'checkbox';
		tds[0].appendChild(checkBoxElement);
		tds[1].innerText = PRIORITY[priortiy];
		tds[2].innerText = conents;
		tds[3].innerText =date.toLocaleDateString();
		tr.appendChild(tds);
		TableTodo.children[1].appendChild(tr);
}