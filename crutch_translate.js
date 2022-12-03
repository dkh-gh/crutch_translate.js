// https://github.com/dkh-gh/crutch_translate.js

document.addEventListener('DOMContentLoaded', crutch_translate);

function crutch_translate() {
	elems = document.body.querySelectorAll('*');
	for(let i = 0; i < elems.length; i++) {
		if(crutch_translate_dict[elems[i].innerHTML] !== undefined)
			elems[i].innerHTML = crutch_translate_dict[elems[i].innerHTML];
	}
}
