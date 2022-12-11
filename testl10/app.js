const getform = document.getElementById('form');
// console.log(getform);
const getinputtxt = document.querySelector('#textbox');
const getul = document.getElementById('list-group');

getform.addEventListener('submit',function(e){
	// console.log('i am working');

	addnew();
	e.preventDefault();

});


function addnew(todo){

	var todotxt = getinputtxt.value;
	// console.log(todotxt);

	if(todo){
		todotxt = todo.text;
	}

	const newli = document.createElement('li');
	newli.appendChild(document.createTextNode(todotxt));

	if(todo && todo.isdone){
		newli.classList.add('done');
	}

	getul.appendChild(newli);
	getinputtxt.value = '';

	updatelocalstorage();

	newli.addEventListener('click',function(){
		newli.classList.toggle('done');
		updatelocalstorage();
	});

	newli.addEventListener('contextmenu',function(){
		this.remove();
		updatelocalstorage();
	});

}

function updatelocalstorage(){

	var getalllis = document.querySelectorAll('li');

	const todos = [];

	getalllis.forEach(function(getallli){

		todos.push({
			text: getallli.textContent,
			isdone: getallli.classList.contains('done')
		});

	});

	localStorage.setItem('todos',JSON.stringify(todos));

}

var getlstodos = JSON.parse(localStorage.getItem('todos'));
// console.log(getlstodos);

if(getlstodos){

	getlstodos.forEach(function(getlstodo){
		addnew(getlstodo);
	});

}