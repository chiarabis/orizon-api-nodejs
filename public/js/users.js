function capitalizeFirstLetter(string) {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

//aggiungi utente
function addUser(user) {
    const userDiv = document.createElement('div');
    userDiv.classList.add('userDiv');
    userDiv.dataset.userId = user.id; 

    updateUserDiv(user, userDiv);
    registeredUsers.appendChild(userDiv);
};

//cancella utente
function deleteUser(userId, userDiv) {
    fetch(`/orizon/api/users/${userId}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        userDiv.remove(data);
    })
    .catch(error => {
        console.error('Error deleting user:', error);
    });
};

//modifica utente
function editUser(user) {
    const firstnameInput = document.getElementById('firstname');
    const lastnameInput = document.getElementById('lastname');
    const emailInput = document.getElementById('email');
    const userIdInput = document.createElement('input');
    userIdInput.type = 'hidden';
    userIdInput.id = 'userId';
    userIdInput.value = user.id;

    firstnameInput.value = user.firstname;
    lastnameInput.value = user.lastname;
    emailInput.value = user.email;

    userForm.appendChild(userIdInput);
    userForm.scrollIntoView();
};


function updateUserDiv(user, userDiv) {
    userDiv.textContent = `ID ${user.id}: ${capitalizeFirstLetter(user.firstname)} ${capitalizeFirstLetter(user.lastname)} - ${user.email}`;

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('iconBtn');
    const deleteImg = document.createElement('img');
    deleteImg.src = './delete.png';
    deleteImg.alt = 'Delete';
    deleteBtn.appendChild(deleteImg);
    deleteBtn.addEventListener('click', function() {
        deleteUser(user.id, userDiv);
    });

    const editBtn = document.createElement('button');
    editBtn.classList.add('iconBtn');
    const editImg = document.createElement('img');
    editImg.src = './edit.png';
    editImg.alt = 'Edit';
    editBtn.appendChild(editImg);
    editBtn.addEventListener('click', function() {
        editUser(user);
    });
        
    userDiv.appendChild(deleteBtn);
    userDiv.appendChild(editBtn);
};


export {addUser, deleteUser, editUser, updateUserDiv};