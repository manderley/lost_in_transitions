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

	var playButton;
	var container;
	var finalAnimationElement;
	var animationEndEvent;
	var sound;

	function initialiseAnimation() {
		getUIElements();
		animationEndEvent = utils.whichAnimationEvent();
		addEventListeners();
	}

	function getUIElements() {
		playButton = document.querySelector('.button');
		container = document.getElementsByTagName('body')[0];
		finalAnimationElement = document.getElementById('deco-grid2');
		sound = document.querySelector('.sound');
	}

	function addEventListeners() {
		playButton.addEventListener('click', enableAnimations, false);
		finalAnimationElement.addEventListener(animationEndEvent, resetAnimations, false);
	}

	function enableAnimations() {
		container.setAttribute('class', 'animation-active');
		sound.play();
		disablePlayButton();
	}

	function resetAnimations() {
		container.setAttribute('class', 'animation-inactive');
		enablePlayButton();
	}

	function enablePlayButton() {
		playButton.classList.remove('disabled');
		playButton.removeAttribute('disabled');
		playButton.addEventListener('click', enableAnimations, false);
	}

	function disablePlayButton() {
		playButton.classList.add('disabled');
		playButton.setAttribute('disabled', 'disabled');
		playButton.removeEventListener('click', enableAnimations, false);
	}

	animation.init = function() {
		initialiseAnimation();
	};

	return animation;

})();

window.onload = function() {
	animation.init();
};