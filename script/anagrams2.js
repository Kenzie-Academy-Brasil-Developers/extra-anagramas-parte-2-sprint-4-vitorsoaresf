const bt = document.getElementById('bt');
const result = document.getElementById('result');


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
		if(anagramSets[prop].length >= 5){
			arr.push(anagramSets[prop]);
		}
	  }
	return arr;
}

bt.addEventListener('click', () => {
	console.log('Rodando Resultados');
	let arrResult = getSetsOfFiveAnagrams(palavras);

	arrResult.forEach(element => {
		const p = document.createElement('p');
		p.innerText = JSON.stringify(element);
		result.appendChild(p);
	});
	
});