const colorInput = document.getElementById('color-input')
const modes = document.getElementById('modes-select')
const btn = document.getElementById('get-scheme-btn')


function getColors(seed) {
    fetch(`https://www.thecolorapi.com/scheme?hex=${seed.slice(1)}`)
    .then (res => res.json())
    .then (data => {
        console.log(data)
    })
}

btn.addEventListener("click", (event) => {
    let seedColor = colorInput.value
    getColors(seedColor)
   
})

