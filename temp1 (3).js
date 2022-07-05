console.log(`hello`);
// let n = document.getElementById('submit');
// n.addEventListener('click', a);
// n.addEventListener('dblclick', b);
// function a(e){
    
   
//     e.preventDefault();
//     console.log(`thank you for submission` ,e );

// }

// function b(e){
//     alert(`likhe kuch nahi aur chale submit karne`);
//     console.log('double clicked' , e);
//     e.preventDefault();
// }

// mouse enter and mouse leave event
// document.querySelector('.list').addEventListener('mouseenter' , function(){
//     console.log('mouse entered');
// })
// document.querySelector('.btn').addEventListener('mouseleave' , function(){
//     console.log('mouse leaved');
// })
// document.querySelector('.container').addEventListener('mousemove' , function(){
//     console.log('hello');
// })
document.querySelector('.container').addEventListener('mousemove' , function(e){
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY+e.offsetX}, ${e.offsetX-e.offsetY} )`
})
