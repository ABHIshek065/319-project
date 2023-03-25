function thanks(){
    let title = document.getElementById('title')
    title.innerText = "Thanks for joining the bootcamp"
    title.style.color = 'teal'
    let btn = document.getElementById('btn')
    btn.style.display ='none'
}

function welcome(){
    let name = document.getElementById('name')  /*where you want to use .value either let or console*/
    document.getElementById('nameInput').innerText = name.value;
    nameInput.style.color = 'teal'
    name.value =''
}