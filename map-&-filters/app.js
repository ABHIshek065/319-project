

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// =============map============
let result = a.map((num)=> {
    return num*num;
    
})
// console.log(result)

let cube = a.map((num)=>{
    return num*num*num
})


// console.log(cube)


// ============fillter==============
let filters   = a.filter((num)=>{
    // return num>5;
    return num%2 ==0;  /*even number */
})
// console.log(filters)


// chaining


let chaining = a.filter((x)=>{
    return x%2 == 0;
}).map((x)=>{
    return x*x;
})

// console.log(chaining)



let users = []

function register(){
    let name = document.getElementById('name')
    let email = document.getElementById('email')

    let tempUser = {
        name: name.value,
        email: email.value,
    }

    let userEmailCount = users.filter((user)=>{
        return user.email == email.value;
    })
    if(userEmailCount.length == 0){
        users.push(tempUser)
    }
    else{
        alert('email id exist')
    }

 
    console.log(users)
}
