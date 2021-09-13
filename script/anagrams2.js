const bt = document.getElementById('bt');

function alphabetize(a) {
	return a.toLowerCase().split("").sort().join("").trim();
}

bt.addEventListener('click', () => {
	console.log('Rodando Resultados');
	let setElements = new Set(palavras);
	let setIter = setElements.values();
	let objSet = new Set();
	// objSet.add({'abi':'us'})
	let setIterObjSet = objSet.values();


	for (let i = 0; i < 40; i++) {

		// PEGANDO O PRIMEIRO E OS PROXIMOS
		let auxElement = setIter.next().value;

		// ORDENANDO ESSE ELEMENTO
		let element = alphabetize(auxElement);

		
		let obj = new Object();
		obj[`${element}`] = [auxElement];

		if (objSet.size === 0) {
			objSet.add(obj);
		} else {
			let setIterObj = objSet.values();
			let notAdd = true;
			for (let z = 0; z < objSet.size; z++) {
				let aux = setIterObj.next().value;
				if (aux.hasOwnProperty([`${element}`])) {
					aux[`${element}`].push(auxElement);
					notAdd = false;
				}
			}
			if(notAdd === true){
				objSet.add(obj);
			}
		}
	}
	console.log(objSet)
	// for (let i = 0; i < 2; i++) {
	// 	let auxElement = setIter.next().value;
	// 	let element = alphabetize(auxElement);

	// 	console.log(setIterObjSet.hasOwnProperty('abi'))

	// 	// if(objSet.hasOwnProperty(`${element}`)){
	// 	// 	console.log('ja tem po')
	// 	// }else{
	// 	// 	objSet.add({ [`${element}`]: [auxElement] });
	// 	// }
	// }
});