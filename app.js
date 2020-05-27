const hmLogo = document.querySelector('.logo');
const ulNavBar = document.querySelector('.navUl');

//////////    <henrymoss/> animation
let firstName = 'henry';
let lastName = 'moss';

// window.onscroll = () => {

// };

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
	// if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
	// 	//if the page has been scrolled down
	// 	if (firstName !== 'h') {
	// 		firstName = takeAwayLetter(firstName);
	// 	}
	// 	if (lastName !== 'm') {
	// 		lastName = takeAwayLetter(lastName);
	// 	}
	// 	// window.setTimeout(setName(), 10000);
	// } else {
	// 	//if page at top
	// 	let trueFName = 'henry';
	// 	let trueLName = 'moss';
	// 	for (let i = 0; i < 4; i++) {
	// 		if (firstName === trueFName) {
	// 			break;
	// 		}
	// 		firstName = firstName.concat(trueFName.slice(i + 1, i + 2));
	// 		setName();
	// 	}
	// 	for (let i = 0; i < 3; i++) {
	// 		if (lastName !== trueLName) {
	// 			lastName = lastName.concat(trueLName.slice(i + 1, i + 2));
	// 		}
	// 	}
	// }
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
