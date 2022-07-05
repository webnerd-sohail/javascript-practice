console.log(`excerise !!!`);

// creating element
let divElement = document.createElement(`div`);
divElement.setAttribute(`id`, `Elem`);
divElement.setAttribute(`class`, `Elem`);
divElement.setAttribute(
  `style`,
  `border:2px solid black; width:200px; margin:auto; padding : 20px`
);

let val = localStorage.getItem(`text`);
let text;
if (val == null) {
  text = document.createTextNode(`this is editable element, click to edit`);
} else {
  text = document.createTextNode(val);
}
//added text to division
divElement.appendChild(text);

let container = document.querySelector(`.container`);
let first = document.getElementById(`first`);

// inserting element before first
container.insertBefore(divElement, first);
// console.log(divElement);

//adding eventlistner to division

divElement.addEventListener(`click`, function () {
  let noTexts = document.getElementsByClassName(`textarea`).length;
  if (noTexts == 0) {
    let html = Elem.innerHTML;
    divElement.innerHTML = `<textarea class="textarea" id="textarea" rows="3">${html}</textarea>`;

    // let html = `<textarea class="textarea" rows="3"></textarea>`;
    // divElement.innerHTML = html ;
  }

  let textarea = document.getElementById(`textarea`);
  textarea.addEventListener(`blur`, function () {
    Elem.innerHTML = textarea.value;
    localStorage.setItem(`text`, textarea.value);
  });
});
