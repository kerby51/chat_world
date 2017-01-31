var parent = window.parent;

var form = document.querySelector('.form');


//message's innerHTML will be an li appended (and formatted by formatMessage) to the ul #list
window.addEventListener('message', function(event) {
  var list = document.getElementById('list');
  var newMsg = document.createElement('li');
  newMsg.innerHTML += formatMessage(event);
  list.appendChild(newMsg);
});

//form using postMessage to send message to the parent
form.addEventListener('submit', function(event) {
  event.preventDefault();
  var msg = document.getElementById('message').value;
  parent.postMessage(msg, '*');
  form.reset();
  return false;
});

//formatting the message to include a current date/time stamp
function formatMessage(event) {
  var string = new Date().toString();
  var date = string.substring(4, 15).replace(/ /g, '-');
  var time = string.substring(15, 21);
  return date + ': ' + time + ' - ' + event.data;
}


