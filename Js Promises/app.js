


// function uploadRecording() {
//   setTimeout(() => {
//     console.log("upload recordings");
//   }, 2000);
// }

// function notify() {
//   console.log("Email sent");
// }

// // uploadRecording();

// promis

// let test = new Promise ((resolve, reject)=>{
//     setTimeout(() => {
//         console.log("upload recordings");
//         resolve()
//       }, 2000);
// }).then(()=>{
//     notify();
// })


function GenrateNew(){
    
}


fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });
