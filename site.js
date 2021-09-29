(function () {
	let wordIndex = 1;
	function geWordItem(index) {
		return document.querySelector(`.words-list .title-word:nth-child(${ index }`);
	}

	setInterval(function () {
		let currentWord = geWordItem(wordIndex);
		
		currentWord.classList.add('hidden');
		wordIndex++;
		wordIndex = (wordIndex > 5) ? 1 : wordIndex;

		let nextWord = geWordItem(wordIndex);
		nextWord.classList.remove('hidden');
	}, 3000);
})();