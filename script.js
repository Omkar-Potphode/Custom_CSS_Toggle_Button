const body = document.querySelector("body"),
    btn = document.querySelector(".Toggle");

    let getMode = localStorage.getItem("mode");
    if(getMode && getMode === "dark"){
        body.classList.add("dark");
        btn.classList.add("active");
    }
    btn.addEventListener("click", () => {
        body.classList.toggle('dark');

        if(!body.classList.contains("dark")){
            return localStorage.setItem("mode","light")
        }

        localStorage.setItem("mode","dark");
    });

btn.addEventListener("click", () => btn.classList.toggle("active"));