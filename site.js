(function (d) {
  let wordIndex = 1;
  let fadeInDelay = 3000;

  function getCurrentWord(index) {
    return d.querySelector(`.words-list .fade-in-word:nth-child(${ index }`);
  }

  function setVisible(element, visible) {
    element.classList.remove(visible ? 'hidden' : 'fade-in-item');
    element.classList.add(visible ? 'fade-in-item' : 'hidden');
  }

  // change colored words at the top
  setInterval(() => {
    getCurrentWord(wordIndex).classList.add('hidden');
    wordIndex = ((wordIndex += 1) > 5) ? 1 : wordIndex;
    getCurrentWord(wordIndex).classList.remove('hidden');
  }, fadeInDelay);

})(document);
