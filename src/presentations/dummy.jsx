const {h} = require('preact');
const {Transparent} = require('./common.jsx');

module.exports = {
	name: 'Dummy',
	slides: [
		<Transparent size="huge">You dummy</Transparent>,
		<Transparent>
			<p>It's not like there's a preview here or anything.</p>
			<img src="https://i.gifer.com/C1Zw.gif" style={{width: '70%'}} />
		</Transparent>,
		<Transparent>
			<p>You're expecting too much.</p>
			<img src="https://i.gifer.com/8TWn.gif" style={{width: '70%'}} />
		</Transparent>
	],
};
