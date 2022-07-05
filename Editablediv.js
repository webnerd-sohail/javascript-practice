console.log(`exercise2`);
let container = document.querySelector(`#top`);
let before_child1 = document.getElementById(`child1`);

console.log(before_child1);
console.log(container);
// creating element

let divElement = document.createElement(`div`);
divElement.setAttribute(`id`, `element-1`)
divElement.setAttribute(`style`, `border:2px solid red; width: 10rem; height: 10rem; margin:auto; padding:35px;`)
console.log(divElement);
// adding text to that division
let value = localStorage.getItem(`text`);
let text;
if(value==null)
{
    text = document.createTextNode(`this is textNode, , click here to edit`);
    
}else
{
    text = document.createTextNode(value);

}

// inserting element before child1
divElement.appendChild(text);
container.insertBefore(divElement,before_child1);

// edit the created element
divElement.addEventListener(`click`, function(e) {
    let numberOfTextarea = document.getElementsByClassName(`form-control`).length;
    if(numberOfTextarea==0)
    {

        let html = divElement.innerHTML;`<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>`;
        divElement.innerHTML =`<textarea class="form-control" id="exampleFormControlTextarea1" rows="3">${html}</textarea>`; 
    }
    //save edited div ka content in local localStorage
    let textarea = document.getElementById(`exampleFormControlTextarea1`);
    textarea.addEventListener(`blur`, function()
    {
        divElement.innerHTML = textarea.value;
        localStorage.setItem(`text`, textarea.value);
    })
    
    localStorage.setItem(`text`, textarea.value);
});


