const logo = document.querySelector(".js-btn");

function dark(){
    logo.innerHTML = "<img src='images\\nightlogo.png' alt='img'>";
    document.body.style.backgroundColor = "rgb(40,40,40)";
    logo.classList.add("dark");
    logo.classList.remove("light");
}

function light(){
    logo.innerHTML = "<img src='images\\logo.png' alt='img'>";
    document.body.style.backgroundColor = "rgb(227, 227, 227)";
    logo.classList.add("light");
    logo.classList.remove("dark");
}

const ch = Math.random();
if(ch >= 0 && ch < 0.5) dark();
else if(ch >= 0.5 && ch <= 1) light();

function change(){
    if(logo.classList.contains("light"))dark();
    else if(logo.classList.contains("dark"))light();
}