console.time(`start`);
console.log(`Strings`);

let Name = `Sohail `;
let surName = `Shaikh`;

console.log(Name + surName);

let html = `<h1> this is heading </h1> `+
            `<p>this is paragraph</p>`;
    html = html.concat(` concatination`);

        console.log(html);

// string functions
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html);
console.log(html[64]);
console.log(html.indexOf(`paragraph`));
console.log(html.lastIndexOf(`paragraph`));
console.log(html.charAt(64));
console.log(html.indexOf(`v`));
console.log(html.endsWith(`concatination`));
console.log(html.endsWith(`concatinatin`));
console.log(html.includes(` `));
console.log(html.substring(1,45));
console.log(html.slice(-23));
console.log(html.split(` `));
console.log(html.replace(`concatination`, `last word`));

//template literals

let str1 = `welcome`;
let str2 = `back`;
let myHtml = `<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>javascript tutorials</title>
        <style>
            .child {
                width: 50px;
                height: 50px;
                margin: 2px;
                padding: 2px;
                border: 2px solid red;
            }

        </style>
    </head>

    <body>
        <h1 id="heading">DOM manupulation</h1>
       <!-- div.container>div#class$.class{class$}*4 -->
       <div class="container">
        <h1 id="heading">welcome to code with harry</h1>
        <div id="child1" class="child">child1</div>
        <div id="child2" class="child">child2</div>
        <div id="child3" class="child">child3</div>
        <div id="child4" class="child">child4</div>
      <form action="none.html">
        <input type="text" name="" id="">
        <input type="button" name="" id="" value="submit">
      </form>
      <a href="google.com">click here</a>
      <a href="youtube.com">click here</a>
      <a href="udemy.com">click here</a>
      <a href="workspace.com">click here</a>
       </div>
        <!-- <img src="none.jpg" alt="image"> -->
        <!-- <script src="pract1.js"></script>
        <script src="pract2.js"></script> -->
        <!-- <script src="pract3.js"></script> -->
        <!-- <script src="pract4.js"></script> -->
        <!-- <script src="pract5.js"></script> -->
        <!-- <script src="pract6.js"></script> -->
        <!-- <script src="pract7.js"></script>
        <script src="pract8.js"></script> -->
        <!-- <script src="pract9.js"></script> -->
        <!-- <script src="pract10.js"></script> -->
        <!-- <script src="pract11.js"></script> -->
        <!-- <script src="pract12.js"></script> -->
        <!-- <script src="pract13.js"></script> -->
        <!-- <script src="pract14.js"></script> -->
        <script src="pract15.js"></script>


        <h1>Hello, ${str1} ${str2}</h1>
        </html>
        `;
document.body.innerHTML = myHtml;

console.log(myHtml);
console.timeEnd(`start`);
