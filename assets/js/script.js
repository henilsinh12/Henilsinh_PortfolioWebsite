document.addEventListener('DOMContentLoaded', () => {
  console.log('Portfolio Website Loaded Successfully!');
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function(e){
e.preventDefault();
document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior: "smooth"
});
});
});


window.addEventListener("scroll", function(){
let navbar = document.querySelector("nav");
if(window.scrollY > 50){
navbar.style.background = "#111";
}else{
navbar.style.background = "transparent";
}
});
const text = "Web Developer | Programmer";
let index = 0;

function type(){
if(index < text.length){
document.getElementById("typing").innerHTML += text.charAt(index);
index++;
setTimeout(type,100);
}
}
type();




document.querySelectorAll("a").forEach(link => {
link.addEventListener("click", function(e){
const target = this.getAttribute("href");
if(target.includes(".html")){
e.preventDefault();
document.body.style.opacity = "0";
setTimeout(()=>{
window.location = target;
},300);
}
});
});
