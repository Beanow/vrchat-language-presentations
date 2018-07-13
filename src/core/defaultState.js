exports.defaultState = {
	isMenuOpen: false,
	highlightedPI: 0,
	activePI: 0,
	activeSI: 0,
	presentations: [
		require('../presentations/soontm.jsx'),
		require('../presentations/dummy.jsx')
	],
	log: ['Default state loaded']
};

exports.defaultState.activePresentation =
	exports.defaultState.presentations[0];
