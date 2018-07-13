const {
	ctrlUp, ctrlDown, ctrlEnter, invalidate,
	ctrlLeft, ctrlRight
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
    cEnter: () => dispatcher(ctrlEnter())
});

// Initial render.
dispatcher(invalidate());
