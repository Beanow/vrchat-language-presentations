const {h} = require('preact');

exports.Transparent = ({children, size}) => (
	<div className={`middle center outline ${size || 'normal'}`}>{children}</div>
);
