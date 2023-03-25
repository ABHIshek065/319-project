function beautiful() {
    let title = document.getElementById("title");
    title.innerText = "thanks for giving feedback";
    // document.getElementById('btn').style.display ='none'
  }
  
  let alertDiv = document.getElementById("alert");
  function mouseOver() {
    alertDiv.style.display = " block";
  }
  
  function mouseOut() {
    alertDiv.style.display = "none";
  }
  
  // ===============================input field=========================
  
  function submitName() {
    let name = document.getElementById("name");
    let value = name.value;
    document.getElementById("userInput").innerText = value;
    // name.value = '' ;
    userInput.style.color = "darkblue";
  }
  
  // ==============================magic=========================
  
  // let magicStatus = false;
  // let btnClick = document.getElementById('btnClick');
  // let btnStop = document.getElementById('btnStop');
  
  // function magic() {
  //   magicStatus = true;
  // let heading = document.getElementById("heading");
  //   heading.classList.add("magic");
  //   if (magicStatus == true){
  //     btnClick.style.display = 'none'
  //     btnStop.style.display = ''
  //   }
  // }
  // function stopMagic() {
  //   magicStatus = false;
  // let heading = document.getElementById("heading");
  //   heading.classList.remove("magic");
  //   if (magicStatus == false){
  //     btnStop.style.display = 'none'
  //     btnClick.style.display = 'block'
  //   }
  // }
  
  
  // ==============second method for clean code===============
  
  let magicStatus = false;
  let btnClick = document.getElementById("btnClick");
  let btnStop = document.getElementById("btnStop");
  
  function checkMagicStatus() {
    if (magicStatus == true) {
      btnClick.style.display = "none";
      btnStop.style.display = "";
    } else {
      btnStop.style.display = "none";
      btnClick.style.display = "block";
    }
  }
  
  function magic() {
    magicStatus = true;
    let heading = document.getElementById("heading");
    heading.classList.add("magic");
    checkMagicStatus()
  }
  function stopMagic() {
    magicStatus = false;
    let heading = document.getElementById("heading");
    heading.classList.remove("magic");
    checkMagicStatus()
  }
  
  