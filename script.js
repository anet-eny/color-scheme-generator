const colorInput = document.getElementById('color-input')
const modes = document.getElementById('modes-select')
const btn = document.getElementById('get-scheme-btn')


function getColors(seed, mode) {
    fetch(`https://www.thecolorapi.com/scheme?hex=${seed.slice(1)}&mode=${mode}`)
    .then (res => res.json())
    .then (data => {
        renderColors(data.colors)
    })
}

function renderColors(colorsArr) {
    let colorsHtml = ""
    let hexHtml = ""
    for (let color of colorsArr) {
        colorsHtml += `
        <div class="color" style=background-color:${color.hex.value}></div>
        `
        hexHtml += `
        <div class="hex"><p>${color.hex.value}</p></div>
        `
    }
    document.getElementById('colors-container').innerHTML = colorsHtml
    document.getElementById('hex-values').innerHTML = hexHtml
    
    
}

btn.addEventListener("click", () => {
    let seedColor = colorInput.value
    let selectedMode = modes.value
    getColors(seedColor, selectedMode)
   
})

