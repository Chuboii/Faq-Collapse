let faq = document.querySelectorAll(".faq")
let toggler = document.querySelectorAll(".fa-angle-down")


function toggleFaq() {
    faq.forEach((el, idx) => {
        

        el.addEventListener("click", (e) => {

            e.stopPropagation()
    

         

            if (el.classList.contains("active")){
                el.classList.remove("active")
                toggler[idx].classList.remove("fa-times")
                toggler[idx].classList.add("fa-angle-down")
                
                
                
            }
            else {
                returnOrigin()
                el.classList.add("active")
                toggler[idx].classList.add("fa-times")
                toggler[idx].classList.remove("fa-angle-down")
            }
           
   
    })
})



}

function returnOrigin() {
    faq.forEach((el,idx) => {
        el.classList.remove("active")
        toggler[idx].classList.remove("fa-times")
        toggler[idx].classList.add("fa-angle-down")
    })
}


toggleFaq()


