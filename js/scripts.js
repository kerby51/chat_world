var button = document.getElementById('button');
var target = document.getElementById('main');
var counter = 1;

//ability to create a draggable iframe with a class, unique id, & src of 'other.html', called on button click
function createiFrame() {
  var chatBox = document.createElement('iframe');
  var chatNum = counter;
  counter++;
  chatBox.setAttribute('class', 'ui-widget-content');
  chatBox.setAttribute('id', 'IFrame ' + chatNum);
  chatBox.setAttribute('draggable', 'true');
  chatBox.setAttribute('src', 'other.html');
  target.appendChild(chatBox);
  $( function() {
    $( '.ui-widget-content' ).draggable();
  }) ;
}

//when button "+" is clicked, createiFrame function is called
if (button) {
  button.addEventListener('click', createiFrame);
}

//parent using postMessage to send message to all iframes
window.addEventListener('message', function(event) {
  var iframeNodes = document.querySelectorAll('iframe');
  iframeNodes.forEach(function(node) {
    node.contentWindow.postMessage(event.data, '*');
  });
});











