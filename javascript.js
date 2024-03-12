const btn = document.querySelector('#button');
const input = document.querySelector('input');
const ul =  document.querySelector('ul');


btn.onclick = function (){
    const inputElement = document.querySelector('#item');
    const inputValue = inputElement.value;
    const li = document.createElement('li');
    inputElement.value = '';
    li.textContent = inputValue;
    const span = document.createElement('span');
    const button = document.createElement('button');
    button.textContent = 'Delete';
    span.append(button)
    li.append(span);
    ul.appendChild(li)
    button.style.color = '#666';
    button.style.backgroundColor = 'beige'
    button.addEventListener('click', () =>{
        li.remove();
    })
    input.focus({focusVisible: true});
}
