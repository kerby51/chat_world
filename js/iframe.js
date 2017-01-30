var parent = window.parent;

var form = document.getElementById('form');
console.log(form);

window.addEventListener('message', function(event) {
  var list = document.getElementById('list');
  console.log(list);
  var newMsg = document.createElement('li');
  newMsg.appendChild(document.createTextNode(event.data.text));
  list.appendChild(newMsg);
});

form.addEventListener('submit', function(event) {
  event.preventDefault();
  var msg = document.getElementById('message').value;
  parent.postMessage({text: msg, id: 1}, '*');
  return false;
})
