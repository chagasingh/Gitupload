

//console.dir(document);

//console.log(document.domain);
//console.log(document.title);
//document.title="GET A CALL"
//console.log(document.head);
//console.log(document.all);
//console.log(document.forms);
//console.log(document.links);
//console.log(document.images);

//get element by id

//console.log(document.getElementById('exampleInputEmail1'))
var headertitle=document.getElementById('header-title');
var header = document.getElementById('main-header');
//console.log(headertitle);
//headertitle.textContent='hello'
//headertitle.innerText='b7y'
header.style.borderBottom='solid 10px orange'
var maintitle=document.getElementById('main');
maintitle.style.color='blue'

var items = document.getElementsByClassName('list-group-item');
console.log(items);
items[0].style.fontWeight='Bold';
items[1].style.fontWeight='Bold';
items[2].style.fontWeight='Bold';
items[3].style.fontWeight='Bold';


items[2].style.backgroundColor='yellow';