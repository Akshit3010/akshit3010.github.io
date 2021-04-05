$(document).ready(function() {
    $(window).scroll(function() {
        // sticky navbar on scroll script
        if (this.scrollY > 40) {
            $('.navbar').addClass("Sticky");
        } else {
            $('.navbar').removeClass("Sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function() {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
       $('.menu-btn').toggleClass("active"); 
	 $('body').toggleClass("no-scroll"); 
		
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["a UI/UX Designer", "a Web Developer", "an Illustrator"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //magnific popup
    $(".img").magnificPopup({
        delegate: 'a',
        type: 'image',
        titleSrc: 'title1',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,

            duration: 300, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function
        }
    });

});



/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
   const navMenu = document.getElementById('nav-menu');
	const menubtn = document.querySelector('.menu-btn');
	const body = document.querySelector('body');
        // When we click on each nav__link, we remove the active class
    navMenu.classList.remove('active');
	menubtn.classList.remove('active');
	body.classList.remove('no-scroll');

}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==============Remove menu when we click outside=============*/

document.onclick = function(e) {
    const navMenu = document.getElementById('nav-menu')
    const menubtn = document.getElementById('menu-btn');
    const body = document.querySelector('body');
    if (e.target.id !== "nav-menu" && e.target.id !== "menu-btn") {
        navMenu.classList.remove('active');
        menubtn.classList.remove('active');
        body.classList.remove('no-scroll');
    }
}



/*==================== WORK ====================*/
const filterItem= document.querySelector(".button-group");
const filterImg= document.querySelectorAll(".our-project");

window.onload =()=>{
	filterItem.onclick=(selectedItem)=>{
		if(selectedItem.target.classList.contains("item")){
			filterItem.querySelector(".active-link").classList.remove("active-link");
			selectedItem.target.classList.add("active-link");
			let filterName= selectedItem.target.getAttribute("data-filter");
			
			filterImg.forEach((image)=>{
				let filterImages= image.getAttribute("data-filter");
			 if((filterImages == filterName)|| filterName== "all"){
				 image.classList.remove("hide");
				 image.classList.add("show");
			 }
			 else{
				  image.classList.add("hide");
				image.classList.remove("show");
			 }
			});
		}
		
	}
}



/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
        // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 70;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: false
});
sr.reveal(`.home-content, .home__img, .home__btn,
            .right, .about__img`, {
    interval: 200
});
