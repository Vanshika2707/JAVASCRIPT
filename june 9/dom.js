// let show=()=>{
//     let text=document.querySelector("input").value
//     alert(text)
// }

// let show=()=>{
//     let textshow=document.querySelector("#textshow")
//     let text=document.querySelector("#newtext").value
//     textshow.innerHTML=text

// }

function addNumber(){
    let a = document.getElementById("num1").value
    let b = document.getElementById("num2").value
    let sum = parseFloat(a) + parseFloat(b)
    document.getElementById("result").innerText = sum;
}