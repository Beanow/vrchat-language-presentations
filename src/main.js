const {
	ctrlUp, ctrlDown, ctrlEnter, invalidate,
	ctrlLeft, ctrlRight, fnGreen, fnRed
} = require('./core/actions');
const {eliminateCache} = require('./core/utils');

// Before bothering with anything, clear the cache.
eliminateCache(window);

// Build our dispatch function.
const {createDispatcher} = require('./core/dispatcher');
const dispatcher = createDispatcher(window, document);

// Make the external API by binding them to the window.
Object.assign(window, {
    cUp: () => dispatcher(ctrlUp()),
    cDown: () => dispatcher(ctrlDown()),
    cLeft: () => dispatcher(ctrlLeft()),
    cRight: () => dispatcher(ctrlRight()),
    cEnter: () => dispatcher(ctrlEnter()),

    fGreen: () => dispatcher(fnGreen()),
    fRed: () => dispatcher(fnRed())
});

// For debugging, add key handlers too.
window.addEventListener("keydown", e => {
	switch(e.keyCode){
		case 13: window.cEnter(); break; // = Enter
		case 37: window.cLeft(); break;
		case 38: window.cUp(); break;
		case 39: window.cRight(); break;
		case 40: window.cDown(); break;

		case 82: window.fRed(); break; // = R
		case 71: window.fGreen(); break; // = G
	}
});

// Initial render.
dispatcher(invalidate());
