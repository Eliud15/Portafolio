/* if(scrollY>=200){
    var skills=document.querySelector(".container-skill")
    skills.classList.add("anim")
} */
window.addEventListener('scroll', (e)=>{
    if(window.scrollY>300){
        var skills=document.querySelector(".container-skill")
        skills.classList.add("anim")
    }
    if(window.scrollY>=900){
        var proyectos=document.querySelector(".container-proyecto")
        proyectos.classList.add("anim-proyecto")
       
    }
})

    
  