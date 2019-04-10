// Your code goes here


//Mouseover XX

const mouseOver = document.querySelector('.btn');

mouseOver.addEventListener('mouseover', function(eventObject){
    mouseOver.style.background = 'red';
});

//Keydown XX

const hide = document.querySelector('.content-section')

window.addEventListener('keydown', function(event){
    hide.style.background = 'black';
});

//Wheel XX
const wheel = document.querySelector('.btn');

wheel.addEventListener('wheel', function(event){
    wheel.style.background = 'green';
});

//Drag/drop

window.addEventListener('dragdrop', function(event){
    console.log('dragdrop!')
});

//Load XX

const color = document.querySelector('.container')

window.addEventListener('load', function(event){
    color.style.background = 'whitesmoke'
});

//Focus XX

window.addEventListener('focus', function(event){
    window.alert('refresh please!')
});

//Resize XX

window.addEventListener('resize', function(event){
    hide.style.background = 'white'
});

//Scroll XX

const scroll = document.querySelector('.btn');

scroll.addEventListener('scroll', function(event){
   scroll.style.background = 'purple'
});

//Select XX

window.addEventListener('select', function(event){
    console.log('select!')
} )

//DoubleClick XX

const dblclick = document.querySelector('.btn');

dblclick.addEventListener('dblclick', function(event){
    dblclick.style.background = 'yellow'
    event.preventDefault
});
