var api = "http://localhost:3000/blobs";
var message = document.querySelector('input[type="text"]');

function send() {
  if(message.value == '')
    return;
  return fetch(api, {
    method: 'POST',
    body: message.value
  }).then(response => {
    message.value = '';
    return response.text();
  });
}

async function eras(i) {
  var response = await fetch(api, {
    method: 'DELETE',
    body: i
  });
  return response.text();
}
