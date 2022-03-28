const api = "http://localhost:3000/blobs",
  ul = document.querySelector("ul"),
  message = document.querySelector('input[type="text"]');

window.onload = function(){reload();}
function reload() {
  //fetch('http://localhost:3000/blobs').then(x => x.text()).then(y=>ul.replaceChildren(y))
  fetch('http://localhost:3000/blobs')
    .then(x => x.json())
    .then(y => y.map((v,i) =>{
        c = document.createElement("button");
        c.innerText = '-';
        c.onclick = function() {
          eras(i).then(d=> console.log(d))
        };
        p = document.createElement("p");
        p.innerText = v;
        li = document.createElement("li");
        li.appendChild(c);
        li.appendChild(p);
        return li;
      })
    ).then(z => {
        ul.replaceChildren();
        z.map(v => {ul.appendChild(v)})
    })
}

function send() {
  if(message.value == '')
    return;
  return fetch(api, {
    method: 'POST',
    body: message.value
  }).then(response => {
    reload()
    message.value = '';
    return response.text();
  });
}

async function eras(i) {
  var response = await fetch(api, {
    method: 'DELETE',
    body: i
  });
  reload();
  return response.text();
}
