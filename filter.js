var Refresh = (function () {
  var elements = document.getElementById('colorful-animals-list').children,
      length   = elements.length,
      select   = document.getElementById('color-select');

  select.addEventListener('change', function(event) {
    Refresh();
    event.preventDefault();
  });

  return function () {
    var selected_color = select.value;
    for (var i = 0; i < length; i++) {
      elements[i].style.display =
        (!selected_color || elements[i].dataset.color === selected_color) ? '' : 'none';
    }
  };
})();