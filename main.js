
document.addEventListener("DOMContentLoaded", function() {
    // Your code here
    console.log('hi');
// Get references to your elements
const section1 = document.querySelector('.section1');
const s1 = document.getElementById('s1');
const s2 = document.getElementById('s2');
const s3 = document.getElementById('s3');
const s4 = document.getElementById('s4');
const s5 = document.getElementById('s5');
const s6 = document.getElementById('s6');
const s7 = document.getElementById('s7');
const s8 = document.getElementById('s8');
const s9 = document.getElementById('s9');

// Add event listeners for hover
s1.addEventListener('mouseenter', () => {
  section1.style.backgroundImage = "url('img/im2.jpg')";
});

s2.addEventListener('mouseenter', () => {
  section1.style.backgroundImage = "url('img/im.jpg')";
});

s3.addEventListener('mouseenter', () => {
  section1.style.backgroundImage = "url('img/im.jpg')";
});

s4.addEventListener('mouseenter', () => {
  section1.style.backgroundImage = "url('img/im2.jpg')";
});

s5.addEventListener('mouseenter', () => {
  section1.style.backgroundImage = "url('img/im.jpg')";
});

s6.addEventListener('mouseenter', () => {
  section1.style.backgroundImage = "url('img/im2.jpg')";
});

s7.addEventListener('mouseenter', () => {
  section1.style.backgroundImage = "url('img/im2.jpg')";
});

s8.addEventListener('mouseenter', () => {
  section1.style.backgroundImage = "url('img/im.jpg')";
});

s9.addEventListener('mouseenter', () => {
  section1.style.backgroundImage = "url('img/im.jpg')";
});

  });
  
///////////////  flow image  /////////////////////
const observer = new IntersectionObserver((entries)=> {
  entries.forEach((entry)=>{
    console.log(entry);
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    }else{
      entry.target.classList.remove('show');
    }

  });
})

const hiddenElements =document.querySelectorAll('.flow');
hiddenElements.forEach((el)=>observer.observe(el));
const ff1=0;
const ff12=0;

const ff123=0;
const ff1234=5;
console.log('hy')