zhlider = (function (d) {
  let defaultDelay = 3000;
  let sliders = {};

  let addCSSClasses = container => {
    container.querySelectorAll('img').forEach((img, index) => {
      if (index > 0) {
        img.classList.add('hidden');
      }
    });
  }

  // This does the magic
  let changeSlider = (container, isLeft) => {
    let first = container.firstElementChild;
    let last = container.lastElementChild;
    
    first.classList.remove('fade-in-from-right');
    if (isLeft) {
      container.insertBefore(last, first);
      let second = container.children[1];
      let newFirst = container.firstElementChild;
      second.classList.toggle('hidden');
      newFirst.classList.toggle('hidden');
      newFirst.classList.add('fade-in-from-right');
    } else {
      container.appendChild(first);
      container.lastElementChild.classList.toggle('hidden');
      let newFirst = container.firstElementChild
      newFirst.classList.toggle('hidden');
    }
  }

  let isLeftHalf = evt => evt.layerX < evt.target.width / 2;

  let registerEvents = container => {
    container.onclick = (evt) => {
      changeSlider(container, isLeftHalf(evt));
      clearInterval(sliderInterval);
      sliderInterval = setInterval(() => changeSlider(container), defaultDelay);
    }
  };

  let resetInterval = container => {
    sliderInterval = setInterval(() => changeSlider(container), defaultDelay);
  };
  
  return {
      init: id => {
      let container = d.querySelector(`#${ id }`);

      if (container) {
        if (container.children.length < 2) {
          console.error(`At least 2 items are needed.`);
        } else {
          addCSSClasses(container);
          registerEvents(container);
          resetInterval(container);
          sliders[id] = container;
        }
      } else {
        console.error(`No div container with id ${ id } exists.`);
      }
    }
  }
})(document);
