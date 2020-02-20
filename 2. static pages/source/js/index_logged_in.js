$(window).on('scroll', function(){
	if($(window).scrollTop() > 400) {
		$('nav').addClass('sticky');
	}
	else {
		$('nav').removeClass('sticky');
	}
})

const navSlide = () => {
	const lineBurger = document.querySelector('.line-burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');

	lineBurger.addEventListener('click', () => {

		nav.classList.toggle('nav-active');

		navLinks.forEach((link, index) => {
			if(link.style.animation) {
				link.style.animation = ''
			}else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 }s`;
			}
		});

		lineBurger.classList.toggle('toggle');

	});

}

navSlide();