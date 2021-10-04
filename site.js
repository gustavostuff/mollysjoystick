(function (d) {
	let wordIndex = 1;
	function geWordItem(index) {
		return d.querySelector(`.words-list .title-word:nth-child(${ index }`);
	}

  // change colored words at the top
	setInterval(() => {
		let currentWord = geWordItem(wordIndex);
		currentWord.classList.add('hidden');
		wordIndex = ((wordIndex += 1) > 5) ? 1 : wordIndex;
		let nextWord = geWordItem(wordIndex);
		nextWord.classList.remove('hidden');
	}, 3000);


  // pseudo-carousel logic
  let sliderMicro = d.querySelector('.slider.micro');
  d.querySelector('body').onclick = () => {
    let firstImg = sliderMicro.firstChild;
    sliderMicro.appendChild(firstImg);
  };
})(document);
