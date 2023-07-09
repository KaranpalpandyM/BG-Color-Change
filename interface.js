const button=document.querySelector("button")
const body=document.querySelector("body")
const color=['red','blue','pink','yellow','orange','green']

body.style.backgroundColor= 'black'

button.addEventListener('click',changeBC)

function changeBC() {
    const colorIndex=parseInt(Math.random()*color.length)
    body.style.backgroundColor=color[colorIndex]
}