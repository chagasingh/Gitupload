

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

// //console.log(document.getElementById('exampleInputEmail1'))
// var headertitle=document.getElementById('header-title');
// var header = document.getElementById('main-header');
// //console.log(headertitle);
// //headertitle.textContent='hello'
// //headertitle.innerText='b7y'
// header.style.borderBottom='solid 15px orange'
// var maintitle=document.getElementById('main');
// maintitle.style.color='blue'

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// items[0].style.fontWeight='Bold';
// items[1].style.fontWeight='Bold';
// items[2].style.fontWeight='Bold';
// items[3].style.fontWeight='Bold';


// items[2].style.backgroundColor='yellow';
// items[1].style.backgroundColor='green';


// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 5px yellow'

// var item=document.querySelector('.list-group-item');
// item.style.color='red';

// var lastitem=document.querySelector('.list-group-item:last-child');
// lastitem.style.color='blue';

// var seconditem=document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.color='orange';

// var thirdname=document.querySelectorAll('.list-group-item');
// console.log(thirdname);
// thirdname[2].textContent='     ';

// var odd=document.querySelectorAll('li:nth-Child(odd)');
// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='orange'
// }


var itemList=document.querySelector('#items');
//parentNode
console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='pink';

//parent Element or parent Node are about same


// //child node
// console.log(itemList.childNodes);   //not use more because text node 
// console.log(itemList.children);
// itemList.children[2].style.backgroundColor= 'brown' ;


// //first child
// console.log(itemList.child);
// console.log(itemList.firstElementChild);

// //last child
// console.log(itemList.lastElementChild);

// //siblings next and previous

// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

// console.log(itemList.previousSibling);

//create a div
var newDiv=document.createElement('div');
//add class
newDiv.className='hello';

//add id
newDiv.id='hello1';
//add atri.
newDiv.setAttribute('title','hello Div');
//add text node
var newDivText=document.createTextNode('HEllo');
//adding it todiv
newDiv.appendChild(newDivText);
console.log(newDiv);

var container=document.querySelector('header .container');
var h1= document.querySelector('header h1');
container.insertBefore(newDiv,h1);

