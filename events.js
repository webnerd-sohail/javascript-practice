console.log(`hello world`);

let elem = document.getElementById(`child1`);
console.log(elem);

elem.addEventListener('click', function(e)
{
    let vari;
    // vari = e.target;
    // vari = e.target.className;
    let x = e.clientX;
    let y = e.clientY;
    console.log(`clicked`);
    // console.log(`class name is ${vari}`);
    console.log(`cordinates are (x,y) =(${x},${y})`);
    ;
   let html = `cordinates are (x,y) =(${x},${y})`
   vari = document.querySelector(`div`);
   vari.innerHTML= html;
})





