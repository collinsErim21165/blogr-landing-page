const hamburger = document.querySelector(".hamburger")
const navmenu = document.querySelector(".navmenu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
})


const selectContainer = document.querySelector('.select-container')
const selectContainerBtn = document.querySelector('.select-container button')
const selectContainerBtnValue = document.querySelector('.select-container button .value')
const options = document.querySelectorAll('.option')

selectContainerBtn.onclick = () => {
    selectContainer.classList.toggle('open')
}

options.forEach(opt => {
    opt.onclick = () => {
        selectContainer.classList.toggle('open')
        selectContainerBtnValue.innerText = opt.innerText
    }
})

const select = document.querySelector('.select')
const selectBtn = document.querySelector('.select button')
const selectBtnValue = document.querySelector('.select button .value')
const option = document.querySelectorAll('.option')

selectBtn.onclick = () => {
    select.classList.toggle('open')
}

options.forEach(opt => {
    opt.onclick = () => {
        select.classList.toggle('open')
        selectBtnValue.innerText = opt.innerText
    }
})

const selected = document.querySelector('.selected')
const selectedBtn = document.querySelector('.selected button')
const selectedBtnValue = document.querySelector('.selected button .value')
const optionss = document.querySelectorAll('.optionss')

selectedBtn.onclick = () => {
    selected.classList.toggle('open')
}

optioned.forEach(opt => {
    opt.onclick = () => {
        selected.classList.toggle('open')
        selectedBtnValue.innerText = opt.innerText
    }
})








// const hamburger = document.querySelector(".hamburger")
// const navmenu = document.querySelector(".navmenu")

// hamburger.addEventListener("click", () => {
//     hamburger.classList.toggle("active");
//     navmenu.classList.toggle("active");
// })

// document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
//     navbtn.classList.remove("active")
//     navmenu.classList.remove("active")
// }))