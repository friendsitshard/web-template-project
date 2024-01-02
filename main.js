let navbar = document.querySelector(".nav")
let icon = document.querySelector(".nav-icon")

window.addEventListener("scroll", () => {
    if (this.scrollY > 1){
        navbar.classList.add("fixed-nav")
        icon.style.width = "60px"
        icon.style.height = "60px"
    }
    else{
        navbar.classList.remove("fixed-nav")
        icon.style.width = "80px"
        icon.style.height = "80px"
    }
})


let images = document.querySelectorAll(".hovered-img")

images.forEach(img => {
    
    img.addEventListener("mouseover", () => {

        img.style.opacity = "1"

    })

    img.addEventListener("mouseout", () => {

        img.style.opacity = "0"

    })
});


let smalls = document.querySelectorAll(".smInput")
let big = document.querySelector("#bgInput")

smalls.forEach(small => {

    small.addEventListener("focusout", () => {
        if (small.value == ""){
            small.classList.add("requiredBorder")
            small.nextElementSibling.style.display = "block"
        }
        else{
            small.classList.remove("requiredBorder")
            small.nextElementSibling.style.display = "none"
        }
    })
    
});

big.addEventListener("focusout", () => {

    if (big.value == ""){
        big.classList.add("requiredBorder")
        big.nextElementSibling.style.display = "block"
    }
    else{
        big.classList.remove("requiredBorder")
        big.nextElementSibling.style.display = "none"
    }

})


let inputs = document.querySelectorAll(".input")
let sendBtn = document.querySelector(".sendMsgBtn")
inputs = Array.from(inputs)

inputs.forEach(field => {

    field.addEventListener('keyup', () => {

      sendBtn.classList.remove("chamqrali")

    })

  })
