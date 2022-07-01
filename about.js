console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form successfully submitted!!');
}

function giveCompliment(evt) {
	evt.preventDefault();

	alert('Looking Good Today!!')
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
let picture = document.querySelector("img")



picture.addEventListener('mouseover', giveCompliment);