// Your code goes here


//Mouseover X

const mouseOver = document.querySelector('.btn');

mouseOver.addEventListener('mouseover', function(eventObject){
    console.log('mouse over!');
});

//Keydown X

window.addEventListener('keydown', function(event){
    console.log('this is working!')
} )

//Wheel X
const wheel = document.querySelector('.btn');

wheel.addEventListener('wheel', function(event){
    console.log('wheel!')
});

//Drag/drop

const dragDrop = document.querySelector('.btn');

dragDrop.addEventListener('dragdrop', function(event){
    console.log('dragdrop!')
});

//Load

const load = document.querySelector('.btn');

load.addEventListener('load', function(event){
    console.log('load!')
});

//Focus

const focus = document.querySelector('.btn');

focus.addEventListener('focus', function(event){
    console.log('focus!')
});

//Resize

const resize = document.querySelector('.btn');

resize.addEventListener('resize', function(event){
    console.log('resize!')
});

//Scroll X

const scroll = document.querySelector('.btn');

scroll.addEventListener('scroll', function(event){
    console.log('scroll!')
});

//Select X

window.addEventListener('select', function(event){
    console.log('select!')
} )

//DoubleClick X

const dblclick = document.querySelector('.btn');

dblclick.addEventListener('dblclick', function(event){
    console.log('dblclick!')
});
