let users = []

function renderUsers(){
let userContainer = document.getElementById('student')
userContainer.innerHTML = ''
users.map((user)=>{
    let div = document.createElement('div')
    let userName = document.createElement('p')
    let userEmail = document.createElement('p')

    userName.innerText = user.name
    userEmail.innerText = user.email

    div.classList.add('user')
    userContainer.appendChild(div)
    div.appendChild(userName)
    div.appendChild(userEmail)
})
}

function  successAlert(){
    let alert = document.getElementById("alert")
    alert.classList.add('alert')
    alert.innerText = 'User added successfully'
 setTimeout(()=>{
alert.classList.remove('alert')
alert.innerText = ''
 },2000)
}
function  dangerAlert(){
    let alert = document.getElementById("alert")
    alert.classList.add('danger')
    alert.innerText = 'user email id already exist'
 setTimeout(()=>{
alert.classList.remove('danger')
alert.innerText = ''
 },2000)
}



function Register(){
let name = document.getElementById('name')
let email = document.getElementById('email')

let tempUser = {
    name: name.value,
    email: email.value,
}

let userCount = users.filter((user)=>{
    return user.email == email.value
})
if(userCount.length == 0){
    users.push(tempUser)
    successAlert()
}
else{
    dangerAlert()
}


renderUsers()
name.value = ''
email.value = ''
}