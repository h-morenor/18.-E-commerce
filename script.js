const pics=document.querySelectorAll(".pics")
const next=document.querySelector(".arrow_right")
const back=document.querySelector(".arrow_left")
const slide=document.querySelectorAll(".slide")

const min=document.getElementById("minus")
const plus=document.getElementById("plus")
const quantity=document.querySelector(".total")
const circle=document.querySelector(".circle")
const button=document.querySelector("button")

const expand=document.querySelector(".expand")
const pics2=document.querySelectorAll(".pics2")
const next2=document.querySelector(".arrow_right2")
const back2=document.querySelector(".arrow_left2")
const slide2=document.querySelectorAll(".slide2")
const exit=document.querySelector(".exit")
//const container=document.querySelector(".container")
const images=document.querySelector(".images")


let index = 0;
let count =0;

const displayImage = (num) =>{

if (num < 0){index = pics.length -1}
if(num > pics.length - 1){index = 0} 

pics.forEach(i => {
i.style.display = "none"
})
pics[index].style.display = "block";

}


displayImage(index)

//document.addEventListener('DOMContentLoaded', ()=>{    

next.addEventListener('click', ()=>{
index += 1;
displayImage(index)

})

back.addEventListener('click', ()=>{
index -= 1;
displayImage(index)
})

slide.forEach((img)=>{

    img.addEventListener('click', ()=>{
        index = img.dataset.pic
        
        slide[index].className = slide[index].className + " shadow";

        slide.forEach(item =>{
            if(item.dataset.pic != index){
            slide[item.dataset.pic].className = "slide"
            }
        })

displayImage(index)
})

})


plus.addEventListener('click', ()=>{
if(count <5){
    count += 1;

quantity.innerHTML = count

}
})

min.addEventListener('click', ()=>{
if(count > 0){
    count -= 1;
    quantity.innerHTML = count
    
}
})

button.addEventListener('click', ()=>{
   console.log(count)
   if(count != 0){
   circle.innerHTML = count;
   circle.style.display = "block";
   }
  else{
    circle.style.display = "none";
  }
})

// Pop up

images.addEventListener('click', ()=>{
    if(window.innerWidth > 720){
    expand.style.display = "block"}
})


const displayImage2 = (num) =>{

if (num < 0){index = pics2.length -1}
if(num > pics2.length - 1){index = 0} 

pics2.forEach(i => {
i.style.display = "none"
})
pics2[index].style.display = "block";

}

displayImage2(index)

next2.addEventListener('click', ()=>{
index += 1;
displayImage2(index)

})

back2.addEventListener('click', ()=>{
index -= 1;
displayImage2(index)
})

slide2.forEach((img)=>{

    img.addEventListener('click', ()=>{
        index = img.dataset.pic
        
        slide2[index].className = slide2[index].className + " shadow";

        slide2.forEach(item =>{
            if(item.dataset.pic != index){
            slide2[item.dataset.pic].className = "slide"
            }
        })

displayImage2(index)
})
})

exit.addEventListener('click', ()=>{
    expand.style.display = "none"
})

const hide = () =>{
    expand.style.display = "none"
}

hide()