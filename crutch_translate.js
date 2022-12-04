// https://github.com/dkh-gh/crutch_translate.js

window.addEventListener('load', crutch_translate);

var crunch_translate_list = [];

function crutch_translate() {
	elems = document.body.querySelectorAll('*');
	for(let i = 0; i < elems.length; i++) {
		crunch_translate_list.push(elems[i].innerHTML);
		if(crutch_translate_dict[elems[i].innerHTML] !== undefined)
			elems[i].innerHTML = crutch_translate_dict[elems[i].innerHTML];
	}
}

document.addEventListener('click', function() {
	window.setTimeout(crutch_translate, 10);
});