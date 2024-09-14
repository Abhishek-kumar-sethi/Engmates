document.addEventListener("DOMContentLoaded",function(){
const menu = document.getElementById("menu")
const ul = document.getElementById("ul")
const div = document.getElementById("div")
const close = document.getElementById("close")
menu.addEventListener("click",function(){
    ul.classList.add("active")
    console.log("work")
})
close.addEventListener("click",function(){
    ul.classList.remove("active")
})
const showbtn = document.querySelectorAll(".showbtn")
const testone = document.getElementById("testimonial-one")
const testtwo = document.getElementById("testimonial-two")
const testthree = document.getElementById("testimonial-three")
const testfour = document.getElementById("testimonial-four")
for (let index = 0; index < showbtn.length; index++) {
    console.log(showbtn[index])
   showbtn[index].addEventListener("click",function(){
        showbtn[index]  .classList.add("color") 
        if(showbtn[index].innerHTML == 1){
            testone.style.display = "flex"
            testtwo.style.display = "none"
            testthree.style.display = "none"
            testfour.style.display = "none"
        }
        if(showbtn[index].innerHTML == 2){
            testone.style.display = "none"
            testtwo.style.display = "flex"
            testthree.style.display = "none"
            testfour.style.display = "none"
        }
        if(showbtn[index].innerHTML == 3){
            testone.style.display = "none"
            testtwo.style.display = "none"
            testthree.style.display = "flex"
            testfour.style.display = "none"
        }
        if(showbtn[index].innerHTML == 4){
            testone.style.display = "none"
            testtwo.style.display = "none"
            testthree.style.display = "none"
            testfour.style.display = "flex"
        }
   })
}
})