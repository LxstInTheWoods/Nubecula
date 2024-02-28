const logframe = document.getElementById("logframe")
logframe.src = "./staff.html"


function expand_retr_fields(ex) {
    const hr = document.getElementById("focussp")
    const fields = document.getElementById("signin_input")
    if (ex) {
        hr.style.opacity = 1;
        hr.animate([{ width: "100%" }], { duration: 250, fill: "forwards" })

        fields.animate([{ opacity: 1 }], { duration: 250, fill: "forwards" })
    }
    else {
        (async () => {
            hr.animate([{ width: "0" }], { duration: 250, fill: "forwards" })
            setTimeout(() => {
                hr.style.opacity = 0;
            }, 251);
        })()

        fields.animate([{ opacity: 1 }], { duration: 250, fill: "forwards" })
    }
}

for (const x of [...document.getElementsByClassName("signinb")]) {
    x.addEventListener("click", () => {
        logframe.src = `./${x.id}.html`
        expand_retr_fields(true)
        //logframe.animate([{transform:"translateY(0%)"}], {duration:350, fill:"forwards"})

    })
}

document.getElementById("signin_input").getElementsByTagName("button")[0].addEventListener("click", ()=>{
    
})