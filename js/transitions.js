// bind play link to function to start animation
// starting animation involves:
// adding CSS class to body element
// playing music
var utils = (function() {
	
	var utils = {};

	/* From Modernizr, via David Walsh at https://davidwalsh.name/css-animation-callback */
	utils.whichAnimationEvent = function() {
		var a;
		var el = document.createElement('fakeelement');
		var animations = {
			'animation': 'animationend',
			'OAnimation': 'oAnimationEnd',
			'MozAnimation': 'animationend',
			'WebkitAnimation': 'webkitAnimationEnd'
		}

		for (a in animations) {
			if (el.style[a] !== undefined) {
				return animations[a];
			}
		}
	}

	Object.freeze(utils);

	return utils;

})();

var animation = (function() {

	var animation = {};

	var playLink;
	var container;
	var finalAnimationElement;
	var animationEndEvent;

	function initialiseAnimation() {
		getUIElements();
		animationEndEvent = utils.whichAnimationEvent();
		addEventListeners()
	}

	function getUIElements() {
		playLink = document.querySelector('.play');
		container = document.getElementsByTagName('body')[0];
		finalAnimationElement = document.getElementById('deco-grid2');
	}

	function addEventListeners() {

		playLink.onclick = enableAnimations;

		finalAnimationElement.addEventListener(animationEndEvent, function() {
			resetAnimations();
		});

	}

	function enableAnimations() {
		container.setAttribute('class', 'animation-active');
	}

	function resetAnimations() {
		container.setAttribute('class', 'animation-inactive');
	}

	animation.init = function() {
		initialiseAnimation();
	};

	return animation;

})();

window.onload = function() {
	animation.init();
};