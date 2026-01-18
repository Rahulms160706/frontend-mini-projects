document.addEventListener("keydown", (e) => {
    if (e.key === "m") {
        document.querySelector("div").innerHTML = `
            <img src="images/pipe.jpg" id="image" class="fade" alt="metal pipe">
        `;
        const img = document.getElementById("image");
        const id = setTimeout(() => {
            img.classList.add("show");
            return(clearTimeout(id));
        }, 100);  
        
        document.getElementById("metal").play();
        const audio = document.getElementById("metal");
        audio.addEventListener("ended", () => {
            document.querySelector("div").innerHTML = '';
        })
    }
    else if(e.key === 's'){
        document.querySelector("div").innerHTML = `
            <img src="images/shutup.png" id="image" class="fade" alt="Shut up">
        `;
        const img = document.getElementById("image");
        const id = setTimeout(() => {
            img.classList.add("show");
            return(clearTimeout(id));
        },100);

        const audio = document.getElementById("shut");
        audio.play();
        audio.addEventListener("ended", () => {
            document.querySelector("div").innerHTML = '';
        })
    }
})