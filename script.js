const button = document.querySelectorAll(".share-btn");
const share = document.querySelector(".outer-share");

let display = 0
button.forEach(button =>{
    button.addEventListener("click", () =>{
        if (display === 0){
            share.removeAttribute("hidden");
            display++;
        }
        else{
            share.setAttribute("hidden","True");
            display--;
        };
        
    })
})