const words = ["Students", "Engineers", "Programmers","Innovators"]
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

  