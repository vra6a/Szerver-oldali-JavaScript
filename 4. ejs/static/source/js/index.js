$(window).on('scroll', function(){
	if($(window).scrollTop() > 400) {
		$('nav').addClass('sticky');
	}
	else {
		$('nav').removeClass('sticky');
	}
})

const expand = () => {
	var coll = document.getElementsByClassName("collapsible");
	var i;

	for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.display === "block") {
		content.style.display = "none";
		} else {
		content.style.display = "block";
		}
	});
	}
}

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

expand();
navSlide();