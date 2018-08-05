const {h} = require('preact');

exports.Transparent = ({children, size}) => (
	<div className={`middle center outline ${size || 'normal'}`}>{children}</div>
);

exports.ImageAside = ({children, image, size, bg, color}) => (
	<div className={`imageAside ${size || 'normal'}`} style={{backgroundColor: bg || '#f4f4f4'}}>
		<div className="content" style={{color: color || '#000'}}>{children}</div>
		<div className="imageContainer" style={{backgroundImage: `url('${image}')`}}></div>
	</div>
);

exports.WashedBgImage = ({children, image, size, color}) => (
	<div className={`washedBgImage ${size || 'normal'}`}>
		<div className="imageContainer" style={{backgroundImage: `url('${image}')`}} />
		<div className="content" style={{color: color || '#000'}}>{children}</div>
	</div>
);
