let newDiv =  document.createElement('div');
newDiv.setAttribute('id', 'base');
let texto = document.createTextNode('Hello Edit');
newDiv.appendChild(texto);
document.body.appendChild(newDiv);

document.querySelector('#root');
root.appendChild(newDiv);

