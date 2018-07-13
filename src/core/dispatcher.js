const {bumpLocation} = require('./utils');

exports.createDispatcher = (window, document) => {
    const {reduceAction} = require('./reducer');
    const {App} = require('../ui/app.jsx');
    const {render} = require('preact');
    let {defaultState: state} = require('./defaultState');
    const rootEl = document.getElementById('app');

    // The actual dispatch function.
    const dispatch = action => {
        const oldState = state;
        bumpLocation(window.location);
        state = reduceAction(state, action);
        if(state !== oldState) {
            render(App({state, dispatch}), document.body, rootEl);
        }
    };
    return dispatch;
};
