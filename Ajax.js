// console.log(`ajax tutorial `);
// // AJAX is nothing but asynchronous javascript and XML
// // XMLHttpRequest object
// // first XMLHttpRequest

console.log(`start tutorial `);

let getData = document.getElementById("getData");

getData.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
  console.log(`event fired!!`);

  // instantiate an XHR object
  const xhr = new XMLHttpRequest();

  // open object
  xhr.open("GET", `data.txt`, true);

  // what to do on progress
  xhr.onprogress = function () {
    console.log(`loading..!!`);
  };

  // what to do when response is ready
  xhr.onload = function () {
    if (this.status == 200) {
      console.log(this.responseText);
    } else {
      console.error(`something went wrong!!`);
    }
  };

  // send request
  xhr.send();
}
