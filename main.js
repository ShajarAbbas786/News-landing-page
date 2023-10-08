const links=document.querySelector(".nav-links")
const menuopen=document.querySelector(".menu")
const closemenu=document.querySelector(".close")
const backdrop=document.querySelector(".back-drop")

menuopen.addEventListener("click",()=>{
    links.classList.add("active")
    menuopen.classList.add("active")
    closemenu.classList.add("active")
    backdrop.classList.add("active")
})
closemenu.addEventListener("click",()=>{
    links.classList.remove("active")
    menuopen.classList.remove("active")
    closemenu.classList.remove("active")
    backdrop.classList.remove("active")
})
backdrop.addEventListener("click",()=>{
    links.classList.remove("active")
    menuopen.classList.remove("active")
    closemenu.classList.remove("active")
    backdrop.classList.remove("active")
})