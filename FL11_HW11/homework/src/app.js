let rootNode = document.getElementById('root');

function isChecked(event) {
	let target = event.target;
	if (target.getAttribute('type') === 'checkbox') {
		target.setAttribute('disabled','')
	}	
}