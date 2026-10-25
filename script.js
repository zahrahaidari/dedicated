
for(let i=0;i<40;i++){

    let circle=document.createElement("div");
    circle.classList.add("circle");

    let size=Math.random()*25+10;

    circle.style.width=size+"px";
    circle.style.height=size+"px";

    circle.style.left=Math.random()*100+"vw";

    let colors=["#ff4fd8","#ffd54f","#7cff7c","#4fc3ff","#ff6b6b","#b388ff"];

    circle.style.background=
        colors[Math.floor(Math.random()*colors.length)];

    circle.style.animationDuration=
        Math.random()*5+4+"s";

    circle.style.animationDelay=
        Math.random()*5+"s";

    document.getElementById("page1").appendChild(circle);
}

//when opening second page
function openSurprise(){

    document.getElementById("page1").style.display="none";
    document.getElementById("page2").style.display="flex";

    createHearts();
}

// this is for heart animation
function createHearts(){

    for(let i=0;i<60;i++){

        let heart=document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML="Web";

        heart.style.left=Math.random()*100+"vw";

        heart.style.fontSize=
            Math.random()*30+20+"px";

        let colors=["#ff1744","#ff4fd8","#ffea00","#00e5ff","#76ff03","#ffffff"];

        heart.style.color=
            colors[Math.floor(Math.random()*colors.length)];

        heart.style.animationDuration=
            Math.random()*6+4+"s";

        heart.style.animationDelay=
            Math.random()*5+"s";

        document.getElementById("page2").appendChild(heart);
    }
}