exports.reduceAction = (state, action) => {
	// Sneaky AF.
	if(action.type !== 'INVALIDATE'){
		state.log.push(action.type);
	}

	switch(action.type){
		case 'INVALIDATE': return {...state};

		case 'CTRL_UP':
			if(!state.isMenuOpen){
				return {...state, isMenuOpen: true};
			}
			const nextIndex = state.highlightedPI - 1;
			return {
				...state,
				highlightedPI: nextIndex >= 0 ? nextIndex : state.presentations.length - 1
			};

		case 'CTRL_DOWN':
			if(!state.isMenuOpen){
				return {...state, isMenuOpen: true};
			}
			return {
				...state,
				highlightedPI: (state.highlightedPI + 1) % state.presentations.length
			};

		case 'CTRL_LEFT':
			if(state.activeSI === 0) return state;
			return {...state, activeSI: state.activeSI - 1};

		case 'CTRL_RIGHT':
			if(state.activeSI === state.activePresentation.slides.length - 1) return state;
			return {...state, activeSI: state.activeSI + 1};

		case 'CTRL_ENTER':
			if(state.highlightedPI !== state.activePI && state.isMenuOpen) {
				return {
					...state,
					activePI: state.highlightedPI,
					activePresentation: state.presentations[state.highlightedPI],
					activeSI: 0,
					isMenuOpen: false
				};
			}
			return {...state, isMenuOpen: !state.isMenuOpen};

	}
};
