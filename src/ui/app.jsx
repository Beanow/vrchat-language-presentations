const {h} = require('preact');

const Menu = ({items, active, highlighted, show}) => (
	<div id="menu" className={show ? 'open' : ''}>
		<div id="menuOffset" style={{top: `calc(50vh - 40px - ${highlighted * 50}px)`}}>
			{items.map((item, i) => (
				<div className={i === highlighted ? 'item highlighted' : 'item'}>
					{item.name}{i === active ? '*' : ''}
				</div>
			))}
		</div>
	</div>
);

const ActiveSlide = ({presentation, slideIndex}) => (
	<div className="currentSlide">
		{presentation.slides[slideIndex]}
	</div>
);

const NextSlide = ({presentation, slideIndex}) => (
	<div className="nextSlide">
		{presentation.slides[slideIndex+1] || null}
	</div>
);

const ControlPanel = ({state}) => (
	<div className="controlPanel">
		<Menu items={state.presentations} show={state.isMenuOpen}
			active={state.activePI} highlighted={state.highlightedPI} />
		<div id="log">{state.log.map((entry, i) => <div>#{i}: {entry}</div>)}</div>
		<div className="slideBox">
			<NextSlide presentation={state.activePresentation} slideIndex={state.activeSI} />
		</div>
	</div>
);

exports.App = ({state}) => (
	<div id="app">
		<div id="leftPanel">
			<ActiveSlide presentation={state.activePresentation} slideIndex={state.activeSI} />
		</div>
		<div id="rightPanel">
			<ControlPanel state={state} />
		</div>
	</div>
);
