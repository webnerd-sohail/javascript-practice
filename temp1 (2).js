console.log('its working');
//event listening

// document.getElementById('heading').addEventListener('click', function(){
//     console.log(`you have clicked the heading`);
//     // location.href = 'https://wwww.google.in/'
// })
// document.getElementById('heading').addEventListener('click', function(e){
//     console.log(e);
    
// })

// document.getElementById('heading').addEventListener('click', function(e){
//     let a;
//     console.log(`you have clicked here`);
//     a = e.target;
//     a = e.target.className;
//     a = e.target.classList;
//     a = e.offsetX;
//     a = e.offsetY;
//     a = e.clientX;

//     console.log(a);
// })

document.getElementById('heading').addEventListener('click', function(){

a = prompt('did you have dinner?');
if(a==='yes'){
    alert(`nahi kiya dinner jhut bol raha`);
}
if(a==='no'){
    alert(`jaa karle aab`);
}


   
})
