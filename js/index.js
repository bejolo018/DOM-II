// Your code goes here


//Mouseover XX

const mouseOver = document.querySelector('.btn');

mouseOver.addEventListener('mouseover', function(eventObject){
    mouseOver.style.background = 'red';
});

//Keydown X

// window.addEventListener('keydown', function(event){
//     window.style.color = 'green';
// });

//Wheel XX
const wheel = document.querySelector('.btn');

wheel.addEventListener('wheel', function(event){
    wheel.style.background = 'green';
});

// //Drag/drop

// dragDrop.addEventListener('dragdrop', function(event){
//     console.log('dragdrop!')
// });

//Load X

window.addEventListener('load', function(event){
    console.log('load!')
});

//Focus X

window.addEventListener('focus', function(event){
    console.log('focus!')
});

//Resize X

// window.addEventListener('resize', function(event){
//     window.style.background = 'blue';
// });

//Scroll X

const scroll = document.querySelector('.container-home');

scroll.addEventListener('scroll', function(event){
    scroll.style.background = 'purple';
});

//Select X

window.addEventListener('select', function(event){
    console.log('select!')
} )

//DoubleClick XX

const dblclick = document.querySelector('.btn');

dblclick.addEventListener('dblclick', function(event){
    dblclick.style.background = 'yellow'
});
