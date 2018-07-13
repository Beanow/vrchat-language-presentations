exports.eliminateCache = window => {
    if(window.location.search.length < 5){
        window.location = 'index.html?ts=' + (new Date()).getTime();
    }
};

exports.bumpLocation = location => {
	location.hash = '#'+Math.random();
};
