const text = document.querySelector("#colorText");
// console.log(text);
const color = document.querySelector("#colorPicker");


const collrBg = () => {
    document.body.style.backgroundColor = color.value;
    text.textContent =  `カラーコード:${color.value}`;
}

color.addEventListener("input",collrBg);
