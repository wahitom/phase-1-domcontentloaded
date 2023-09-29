// Your code goes here
document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM has loaded ")

    let p = document.querySelector('#text')
    p.textContent = "This is really cool!"

    console.log(p)
})