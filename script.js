// Pour la barre sous les liens

(function() {

    const target = document.querySelector(".target");
    const links = document.querySelectorAll(".navbar a");
    const colors = ["deepskyblue", "orange", "firebrick", "gold", "magenta", "black", "darkblue"];
  
    function mouseenterFunc() {
      if (!this.parentNode.classList.contains("active")) {
        for (let i = 0; i < links.length; i++) {
          if (links[i].parentNode.classList.contains("active")) {
            links[i].parentNode.classList.remove("active");
          }
          links[i].style.opacity = "0.25";
        }
  
        this.parentNode.classList.add("active");
        this.style.opacity = "1";
  
        const width = this.getBoundingClientRect().width;
        const height = this.getBoundingClientRect().height;
        const left = this.getBoundingClientRect().left + window.pageXOffset;
        const top = this.getBoundingClientRect().top + window.pageYOffset;
        const color = colors[Math.floor(Math.random() * colors.length)];
  
        target.style.width = `${width}px`;
        target.style.height = `${height}px`;
        target.style.left = `${left}px`;
        // target.style.top = `${top}px`;
        target.style.borderColor = color;
        target.style.transform = "none";
      }
    }
  
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener("mouseenter", mouseenterFunc);
    }
  
    
  
  })();





window.onload = () => {
    // ecouteur d'évenement sur scroll

    window.addEventListener("scroll", () =>{
        // calcul de la hauteur utile du document
        let hauteur = document.documentElement.scrollHeight - window.innerHeight
        // Recuperation de la position verticale
        let position = window.scrollY
        // Récupération de la largeur de la fenêtre
        let largeur = document.documentElement.clientWidth
        // Calcul de la largeur de la barre
        let barre = position / hauteur * largeur 
        // modification du css de la barre
        document.getElementById("progress").style.width = barre + "px"
    })

}

// Pour l'animation à la vue de l'élément
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector(".ess");
  
      if (entry.isIntersecting) {
        square.classList.add("ess-animation");
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove("ess-animation");
    });
  });
  
observer.observe(document.querySelector("div.wrapper"));
observer.observe(document.querySelector("div.wrapper1"));
observer.observe(document.querySelector("div.wrapper2"));
observer.observe(document.querySelector("div.wrapper3"));
observer.observe(document.querySelector("div.wrapper4"));

var e = document.getElementsByClassName("menu-btn");

$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
            document.getElementById("Port").style.color = "crimson";
            e[0].style.color = "#f1f1f1";
            e[1].style.color = "white";
            e[2].style.color = "white";
            e[3].style.color = "white";
            e[4].style.color = "white";
            e[5].style.color = "white";

        }else{
            $('.navbar').removeClass("sticky");
            document.getElementById("Port").style.color = "darkslateblue";
            e[0].style.color = "darkslateblue"
            e[1].style.color = "darkslateblue";
            e[2].style.color = "darkslateblue";
            e[3].style.color = "darkslateblue";
            e[4].style.color = "darkslateblue";
            e[5].style.color = "darkslateblue";


        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


    var typed = new Typed(".typing-2", {
        strings: ["Statisticien", "Data Scientist", " ou encore Ingénieur BI"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

const wrapper = document.querySelectorAll('.progress');

const barCount = 50;
const percent1 = 50 * 90/100;
const percent2 = 50 * 60/100;
const percent3 = 50 * 80/100;
const percent4 = 50 * 90/100;

for (let index = 0; index < barCount; index++) {
    const className = index < percent1 ? 'selected1' : '';
    wrapper[0].innerHTML += `<i style="--i: ${index};" class="${className}"></i>`;
}

wrapper[0].innerHTML += `<p class="selected percent-text text1">90%</p>`

for (let index = 0; index < barCount; index++) {
  const className = index < percent2 ? 'selected2' : '';
  wrapper[1].innerHTML += `<i style="--i: ${index};" class="${className}"></i>`;
}

wrapper[1].innerHTML += `<p class="selected percent-text text2">60%</p>`

for (let index = 0; index < barCount; index++) {
  const className = index < percent3 ? 'selected3' : '';
  wrapper[2].innerHTML += `<i style="--i: ${index};" class="${className}"></i>`;
}

wrapper[2].innerHTML += `<p class="selected percent-text text3">80%</p>`

for (let index = 0; index < barCount; index++) {
  const className = index < percent4 ? 'selected4' : '';
  wrapper[3].innerHTML += `<i style="--i: ${index};" class="${className}"></i>`;
}


wrapper[3].innerHTML += `<p class="selected percent-text text3">90%</p>`
