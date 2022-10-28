// start homepage css typing
var i = 0;
var txt = ' . . . .'; /* The text */
var speed = 300; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {

    let txtNameTag=document.getElementById("txtName");
    txtNameTag.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    if(i===txt.length){
        i=0;
        txtNameTag.innerHTML="";
    }
  }
}
typeWriter();

// start contact page
let contactEmailTag=document.getElementById('contactEmail');
contactEmailTag.addEventListener('click',()=> navigator.clipboard.writeText('sithu.gma@gmail.com'));

//start About Page
let boxTag=document.querySelectorAll('.box');
boxTag.forEach((j)=>{
  j.addEventListener('hover', () => {
    console.log( j);
    j.classList.add('selected');
    setTimeout(()=>{
      j.classList.remove('selected');

    },2000);
  
})
})