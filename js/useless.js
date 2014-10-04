(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {

    var progress = document.querySelector('.intro--progress'),
        max = parseInt(progress.getAttribute('max')),
        value = parseInt(progress.getAttribute('value')),
        time = (1000 / max) * 5;

    var getRandomInt = function (min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    var loading = function () {
      value += getRandomInt(1, 20);
      console.log(value);
      progress.setAttribute('value', value);

      if (value >= max) {
        clearInterval(animate);
        console.log(window.history);
        if (window.history.length === 1) {
          window.location.href = 'https://github.com/snugug/useless'
        }
        else {
          window.history.forward();
          setInterval( function () {
            window.history.back();
          }, 100);

        }
      }
    };

    var animate = setInterval(function () {
      loading();
    }, time);


  });
})();
