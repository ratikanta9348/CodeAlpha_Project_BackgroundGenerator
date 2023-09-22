var printColor=()=>{
    let randomColor=Math.floor(Math.random()*16777215)
    let randomColorCode="#"+randomColor.toString(16)
    document.body.style.background=randomColorCode
    document.getElementById('colorCode').innerText=randomColorCode
}
document.getElementById('button').addEventListener('click',printColor)