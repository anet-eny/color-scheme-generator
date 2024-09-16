const colorInput = document.getElementById('color-input')
const modes = document.getElementById('modes-select')
const btn = document.getElementById('get-scheme-btn')


function getColors(seed, mode) {
    fetch(`https://www.thecolorapi.com/scheme?hex=${seed.slice(1)}&mode=${mode}`)
    .then (res => res.json())
    .then (data => {
        console.log(data.colors)
    })
}

btn.addEventListener("click", (event) => {
    let seedColor = colorInput.value
    let selectedMode = modes.value
    getColors(seedColor, selectedMode)
   
})

