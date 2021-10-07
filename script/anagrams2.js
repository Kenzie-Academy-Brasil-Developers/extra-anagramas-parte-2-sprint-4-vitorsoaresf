const bt = document.getElementById('bt');
const bt2 = document.getElementById('bt2');

const textarea1 = document.getElementById('text1');

const result = document.getElementById('result');
const result2 = document.getElementById('result2');



function alphabetize(a) {
	return a.toLowerCase().split("").sort().join("").trim();
}

const getSetsOfFiveAnagrams = (palavras) => {
	let setElements = new Set(palavras);
	let setIter = setElements.values();

	let anagramSets = {};

	for (let i = 0; i < setElements.size; i++) {

		// ELEMENTO ATUAL
		let auxElement = setIter.next().value;
		let element = alphabetize(auxElement);


		if (anagramSets.hasOwnProperty(`${element}`)) {
			anagramSets[`${element}`].push(auxElement);
		} else {
			anagramSets[`${element}`] = [auxElement];
		}
	}
	let arr = [];
	for (let prop in anagramSets) {
		if (anagramSets[prop].length >= 5) {
			arr.push(anagramSets[prop]);
		}
	}
	return arr;
}

const getSetsOfExtra = (palavra) => {
	let setElements = new Set(palavras);
	let setIter = setElements.values();
	let arr = [];
	console.log(palavra)

	for (let i = 0; i < setElements.size; i++) {

		// ELEMENTO ATUAL
		let auxElement = setIter.next().value;
		let element = alphabetize(auxElement);

		if(palavra === element){
			arr.push(auxElement);
		}
	}
	return arr;
}

bt.addEventListener('click', () => {
	let arrResult = getSetsOfFiveAnagrams(palavras);

	arrResult.forEach(element => {
		const p = document.createElement('p');
		p.innerText = JSON.stringify(element);
		result.appendChild(p);
	});

});

bt2.addEventListener('click', () => {
	result2.innerText = '';
	console.log(textarea1.value);
	//let arrWords = textarea1.value.split(' ');
	//console.log(arrWords);
	let arr1 = getSetsOfExtra(alphabetize(textarea1.value));
	//let a = getSetsOfExtra(alphabetize(arrWords[1]));
	arr1.forEach(element => {
		const p = document.createElement('p');
		p.innerText = JSON.stringify(element);
		result2.appendChild(p);
	});

});
