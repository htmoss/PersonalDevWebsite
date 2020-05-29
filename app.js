const hmLogo = document.querySelector('.logo');
const ulNavBar = document.querySelector('.navUl');

//////////    <henrymoss/> animation
let firstName = 'henry';
let lastName = 'moss';

const setName = () => {
	hmLogo.textContent = `<${firstName}${lastName}/>`;
};

setName();

const hmScroll = () => {
	if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
		//if the page has been scrolled down
		firstName = 'h';
		lastName = 'm';
		setName();
	} else {
		firstName = 'henry';
		lastName = 'moss';
	}
};

const takeAwayLetter = (str) => {
	return str.slice(0, -1);
};

////////// Click to scroll
const navbar = document.querySelector('#main-nav');
let scrolled = false;

window.onscroll = function () {
	setName();
	hmScroll();
};

// Smooth Scrolling
$('#main-nav a').on('click', function (e) {
	if (this.hash !== '') {
		e.preventDefault();

		const hash = this.hash;

		$('html, body').animate(
			{
				scrollTop: $(hash).offset().top + 200,
			},
			800
		);
	}
	setName();
});
