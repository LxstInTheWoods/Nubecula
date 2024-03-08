function Purpletextfade(pass, color){
    const text = pass.innerText;
      pass.innerHTML = ""; 
    
      for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        pass.appendChild(span);
      }
    
      let index = 0;
      const intervalId = setInterval(() => {
        if (index < text.length) {
          fadeToPurple(pass.children[index]);
          index++;
        } else {
          clearInterval(intervalId);
        }
      }, 10); 
    
      function fadeToPurple(element) {
        let opacity = 0;
        const step = 0.1;
        const duration = 500;
        const interval = setInterval(() => {
          if (opacity < 1) {
            opacity += step;
            if (color === "white"){
                element.style.color = `rgba(255,255,255, ${opacity})`;
            }
            else
            {
                element.style.color = `rgba(105, 4, 247, ${opacity})`;
    
            }
          } else {
            clearInterval(interval);
          }
        }, duration / (1 / step));
      }
    }
    
    for (const x of [...document.getElementById('signincs').children]){
        x.addEventListener("mouseenter", ()=>{
            Purpletextfade(x)
            x.animate([{borderColor:"#6904f7"}], {duration:250, fill:"forwards"})
    
        })
        x.addEventListener("mouseleave", ()=>{
            Purpletextfade(x, 'white')
            x.animate([{borderColor:"#FFFFFF"}], {duration:250, fill:"forwards"})
    
        })
    
    }
    
    for (const x of [...document.getElementById("signin_input").children]){
        if (x.tagName ==="INPUT"){
        x.addEventListener("focus", ()=>{
            x.animate([{borderColor:"#6904f7"}], {duration:250, fill:"forwards"})

        })
        x.addEventListener("focusout", ()=>{
            x.animate([{borderColor:"#FFFFFF"}], {duration:250, fill:"forwards"})

        })
    }
    }

    