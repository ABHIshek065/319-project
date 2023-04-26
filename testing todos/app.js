let btn = document.getElementById("btn");

const users = [];
const options = {weekday: 'long', day: 'numeric', month:'long'}

renderNames = () => {
  let nameContainer = document.getElementById("nameContainer");
  nameContainer.innerHTML = "";
  users.map((user) => {
    let div = document.createElement("div");
    div.classList.add("card");
    let p = document.createElement("p");

    let input = document.createElement("p");

    p.innerText = user.name;
    let dateToFormat = new Date(user.date)
   let fdate = dateToFormat.toLocaleDateString('hi', options)

    input.innerText = fdate;

    nameContainer.appendChild(div);
    div.appendChild(p);
    div.appendChild(input);
  });
};

addUser = () => {
  let name = document.getElementById("name");
  let date = document.getElementById("date");
  let tempUser = {
    name: name.value,
    date: date.value,
  };
  users.push(tempUser);
  //   console.log(users);

  renderNames();
  name.value = "";
};

btn.addEventListener("click", addUser);


