    const card = document.querySelector('.card');
    const container = document.getElementById('wrapper');
    const image = document.querySelector('.image');
    const title = document.querySelector(".brand-name");
    const slogan1 = document.getElementById("tagline-1");
    const circle = document.getElementById("circlebg");
    const slogan2 = document.getElementById("tagline-2");

    console.log(window.pageXOffset);

    container.addEventListener('mousemove', (e) => {
        console.log(e.pagex);
        console.log(e.pagey);
        let xAxis = (window.innerWidth/2 - e.pageX)/10;
        let yAxis = (window.innerHeight/2 - e.pageY)/10;
        slogan2.style = "display: block;"
        circle.style  = "background: rgba(0,0,0,0.6);"
        title.style = "color:#dbdbdb; text-shadow: 1px 0 black, 0 1px black, -1px 0 black, 0 -1px black;";
        slogan1.innerHTML = "Ace the Race<h3>'Hyundai Palisade'</h3>";
        slogan1.style = "background-color:rgb(150, 150, 150); width:300px; font-style:normal ";
        card.style = "background-color:rgba(248,243,195,0.3)";
        card.style.transform = (`rotateY(${yAxis}deg) rotateX(${xAxis}deg)`);
        image.style.transform = `translateZ(100px) rotateZ(15deg) `
    });
    
    container.addEventListener('mouseenter',(e) => {
        card.style.transform = "none";
        image.style.transform = `none`;
    })
    
    container.addEventListener('mouseleave',(e) => {
        card.style ="";
        title.style = "";
        circle.style="";
        slogan1.innerHTML = '"New Thinking! <br> New Possibilites!"'
        slogan1.style = "";
        slogan2.style = "";
        card.style.transition = "all 1s ease"
        image.style.transition =`all 1s ease`
        card.style.transform = (`rotateY(0deg) rotateX(0deg)`);
        image.style.transform = `translateZ(0px) rotateZ(0)`
    })




