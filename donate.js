const userId = document.getElementById('userId');
const firstName =document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');
const addBtn = document.getElementById('addBtn');

const database = firebase.database();
const rootRef = database.ref('users');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    rootRef.child(userId.value).set({
        first_name: firstName.value,
        last_name: lastName.value,
        age: age.value
    });
});