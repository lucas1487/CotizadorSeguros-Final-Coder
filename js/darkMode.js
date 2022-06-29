let darkMode = localStorage.getItem("dark-mode");
const btn = document.getElementById("btn");
const sun= document.getElementById('id-sun')
sun.addEventListener('click', claro)

function claro(){
  darkMode= document.getElementById('page')
  darkMode.classList.remove('dark-mode');
    document.getElementById('id-moon').classList.remove('active');
    this.classList.add('active');
    localStorage.setItem("dark-mode", "disabled");
  }
// modo oscuro
  let moon= document.getElementById('id-moon')
  moon.addEventListener('click', oscuro)


   function oscuro(){
    darkMode= document.getElementById('page')
    darkMode.classList.add('dark-mode');

    document.getElementById('id-sun').classList.remove('active');
    localStorage.setItem("dark-mode", "enabled");
  }

  
  if (darkMode === "enabled") {
    oscuro(); 
  }
  