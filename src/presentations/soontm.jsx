const {h} = require('preact');
const {Transparent} = require('./common.jsx');

module.exports = {
	name: 'Placeholder presentation',
	slides: [
		<Transparent></Transparent>,
		<Transparent>
			Press ◀ and ▶ to change slides.<br />
			Press ▲ and ▼ to navigate the menu.<br />
			Press ▆ to select the presentation in the menu.
		</Transparent>,
		<Transparent>
			This will have presentations to do English / Japanese language sessions.
			If you'd like to create one yourself contact Beanow.
		</Transparent>
	],
};
