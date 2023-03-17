


const changeButton = document.querySelector('button')
// console.log(changeButton)

const boxs = document.querySelectorAll('.box')
// console.log(boxs)



changeButton.addEventListener('click', () => {
    boxs.forEach(box => {
        const ran255 = Math.round(Math.random() * 255)
        const ran256 = Math.round(Math.random() * 255)
        const ran257 = Math.round(Math.random() * 255)

        const ranColor = `rgb(${ran255}, ${ran256}, ${ran257})`
    
        box.style.backgroundColor = ranColor
    })
})