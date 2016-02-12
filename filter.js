var Manager, manager;

Manager = function(elements) {
  this.elements = elements;

  this.refresh = function() {
    this.elements.hide();
    this.elements.filter(this.filter).show();
  };

  this.cancel = function() {
    // ...
    this.elements.show();
  };

  this.filter = function(index, element) {
    var data, chosen_attribute;
    data = element.dataset;
    // This is where you should implement your filters
    chosen_attribute = 'ok'
    return data.some_attribute === chosen_attribute;
  };
};

manager = function() {
  // elements = ...
  return new Manager(elements);
};

filter_button.on('click', function(e) {
  manager().refresh();
  return false;
});

cancel_button.on('click', function(e) {
  manager().cancel();
  return false;
});