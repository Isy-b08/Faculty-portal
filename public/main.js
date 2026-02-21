const words = ["Students", "Engineers", "Developers","Innovators"]
let index= 0;
const wordElement=
  document.getElementById("changingword");
  setInterval(() => {
   wordElement.style.opacity=0;
    
   setTimeout(() => {
    index=(index + 1) % words.length;
    wordElement.textContent=words[index];
    wordElement.style.opacity=1
   }, 200); 
  }, 2000);

  function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
  }
  document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    const menuIcon = document.getElementById('menu-icon');  
    if (!nav.contains(event.target) && !menuIcon.contains(event.target)) {
      nav.classList.remove('active');
    }
  })