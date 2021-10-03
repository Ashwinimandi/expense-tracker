const form=document.getElementById('my-form');
const btn = document.querySelector('.btn');
const ul = document.querySelector('.items');

    const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }

  
}
/*localStorage.setItem('name','bob');
console.log(localStorage.getItem('name'));
localStorage.removeItem('name');
sessionStorage.setItem('name','Ashwini');
console.log(sessionStorage.getItem('name'));
sessionStorage.removeItem('name');
document.cookie='name=ashwini; expires='+ new Date(2020,0,6).toUTCString();
console.log(document.cookie)*/

//localStorage.setItem('name',nameInput.value);
//localStorage.setItem('email',emailInput.value);