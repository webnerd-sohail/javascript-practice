let a = document;
a = document.body;
a = document.all;
a = document.links;
let  str = `google`;
let href;



    Array.from(a).forEach(function(element){
        
       href = element.href;
        if(href.includes(str))
        {
            console.log(href);

        }
        
    })

