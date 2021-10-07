function saveToLocalStorage(event){
  event.preventDefault();
  const name = event.target.username.value;
  const email = event.target.emailId.value;
  
  let obj = {
      name : name,
      email : email,
  };

     axios.post("https://crudcrud.com/api/a8a9439832244a32a80ec53b4d893f11/axiomdata",obj)
     .then((response) => {
         showNewUserOnScreen(response.data);
     })
     .catch((err) => {
         console.log(err);
     })
    }
window.addEventListener("DOMContentLoaded", () => {
 axios.get("https://crudcrud.com/api/a8a9439832244a32a80ec53b4d893f11/axiomdata")
     .then((response) => {
         for(var i=0;i<response.data.length;i++){
             showNewUserOnScreen(response.data[i]);
         }
     })
     .catch((err) => {
         console.log(err);
     })
 })
function showNewUserOnScreen(user){
document.getElementById('mail').value = '';
document.getElementById('usrname').value = '';
//document.getElementById('phonenumber').value ='';
// console.log(localStorage.getItem(user.emailId))
if(localStorage.getItem(user.email) !== null){
 removeUserFromScreen(user.email)
}

const parentNode = document.getElementById('listOfUsers');
const childHTML = `<li id=${user.email}> ${user.name} - ${user.email}
                     <button onclick=deleteUser('${user.email}')> Delete User </button>
                     <button onclick=editUserDetails('${user.email}','${user.name}')>Edit User </button>
                  </li>`

parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

//Edit User

function editUserDetails(email, name){

document.getElementById('mail').value = email;
document.getElementById('usrname').value = name;
//document.getElementById('phonenumber').value =phonenumber;

deleteUser(email)
}

// deleteUser('abc@gmail.com')

function deleteUser(email){
console.log(email)
localStorage.removeItem(email);
removeUserFromScreen(email);

}

function removeUserFromScreen(emailId){
const parentNode = document.getElementById('listOfUsers');
const childNodeToBeDeleted = document.getElementById(emailId);
if(childNodeToBeDeleted) {
 parentNode.removeChild(childNodeToBeDeleted)
}
}
