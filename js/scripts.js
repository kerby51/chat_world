var button = document.querySelector('#button');
var target = document.querySelector('#main');
var form = document.getElementById('form');
var iframe;
var counter = 0;

function createiFrame() {
  var chatBox = document.createElement('iframe');
  var chatNum = counter;
  counter++;
  chatBox.setAttribute('class', 'ui-widget-content');
  chatBox.setAttribute('id', 'iframe' + chatNum);
  chatBox.setAttribute('draggable', 'true');
  chatBox.setAttribute('src', 'other.html');
  target.appendChild(chatBox);
  $( function() {
    $( '.ui-widget-content' ).draggable();
  }) ;
  chatBox.contentWindow.addEventListener('message', showMessage);

  iframe = document.querySelectorAll('iframe');
  var form = chatBox.document.getElementById("form");
  form.addEventListener('submit', sendMessage, false);
}

function sendMessage(event) {
  event.preventDefault();
  var message = document.querySelector('#message').value;
  // var iframe = iframe.document.getElementById("postMessageButton");
  iframe.parent.postMessage(message, "*");
  return false;
}

function receiveMessage(event) {
  var data = event.data;
  showMessage(data);
}

function showMessage(messageTxt) {
  var messageList = document.getElementById('list');
  var listItem = document.createElement('li');
  listItem.appendChild(document.createTextNode(messageTxt));
  messageList.appendChild(listItem);
}

if (button) {
  button.addEventListener('click', createiFrame);
}





