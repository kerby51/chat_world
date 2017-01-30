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
}

if (button) {
  button.addEventListener('click', createiFrame);
}

window.addEventListener('message', function(event) {
  var iframeNodes = document.querySelectorAll('iframe');
  iframeNodes.forEach(function(node) {
    node.contentWindow.postMessage(event.data, '*');
  });
});











