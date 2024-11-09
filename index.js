function getRandomColor(){
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}
console.log(getRandomColor());
const body = document.querySelector("body");
const changeBtn = document.querySelector(".btn");
const inputEl = document.querySelector(".input");
const copyButton = document.querySelector(".copy")
let count = 0;
changeBtn.addEventListener("click",()=>{
    const randomColor = getRandomColor();
    body.style.backgroundColor = randomColor;
    changeBtn.style.color = randomColor;
    count ++;
    changeBtn.innerText = "Change Color " + count;
    inputEl.value = randomColor;
})

copyButton.addEventListener("click", ()=>{
    navigator.clipboard.writeText(inputEl.value)
    alert("Copied the text: " + inputEl.value)
})
