# javascript-filter

#### The problem: 

Given a list of colorful animals, filter them by color:


  * Blue Bird
  * Blue Cat
  * Red Rabbit
  * Green Chicken
  * Red Dog
  * Red Cow
  * Green Pig


#### The algorithm:

```javascript

var elements = document.getElementById('colorful-animals-list').children,
    length   = elements.length,
    select   = document.getElementById('color-select');

Refresh = function () {
  var selected_color = select.value;
  for (var i = 0; i < length; i++) {
    elements[i].style.display =
      (!selected_color || elements[i].dataset.color === selected_color) ? '' : 'none';
  }
};

select.addEventListener('change', function(event) {
  Refresh();
  event.preventDefault();
});

```


This is the HTML code I used for the list:

```html
<ul id="colorful-animals-list">
  <li data-color="blue" >Blue Bird</li>
  <li data-color="blue" >Blue Cat</li>
  <li data-color="red"  >Red Rabbit</li>
  <li data-color="green">Green Chicken</li>
  <li data-color="red"  >Red Dog</li>
  <li data-color="red"  >Red Cow</li>
  <li data-color="green">Green Pig</li>
</ul>
```


Check out the demo: http://nicanor.github.io/2015/12/24/vanilla-javascript-filter.html.