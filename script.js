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
    let html = ""
    for (let color of colorsArr) {
        html += `
        <div class="color" style=background-color:${color.hex.value}></div>
        `
    }
    console.log(html)
    document.getElementById('colors-container').innerHTML = html
    
}

btn.addEventListener("click", () => {
    let seedColor = colorInput.value
    let selectedMode = modes.value
    getColors(seedColor, selectedMode)
   
})

