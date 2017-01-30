var button = document.querySelector('#button');
var target = document.querySelector('#main');
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
  console.log('working');
}

function sendMessage() {
  var iFrame = document.getElementById('iframe0');
  console.log(iFrame);
  var message = document.querySelector('#message').value;
  console.log(message);
   // console.log(contentWindow);
  iFrame.contentWindow.postMessage(message, 'other.html');
}

button.addEventListener('click', createiFrame);
