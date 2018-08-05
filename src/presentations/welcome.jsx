const {h} = require('preact');
const {ImageAside, WashedBgImage} = require('./common.jsx');

const CRED = '#cc0000';
const CBLUE = '#091f43';

const Red = ({children}) => <span style={{color: CRED}}>{children}</span>;
const imageURL = img => `img/welcome/${img}`;

module.exports = {
	name: 'Welcome to the auditorium',
	slides: [
		<ImageAside image={imageURL('right-arrow.180805.png')} color="#fff" bg="#0d1f3c">
			<div className="middle" style={{padding: '1em'}}>
				<p className="lineCaption">
					AUDITORIUMへようこそ<br/>
					WELCOME TO THE AUDITORIUM
				</p>
				<p className="right">
					Press ▶ to continue<br/>
					▶ ボタンでつづける
				</p>
				<p className="tiny">
					However, please don't disrupt ongoing lessons<br/>
					しかしながら、始まった授業を妨げないでください
				</p>
			</div>
		</ImageAside>,
		<WashedBgImage color={CBLUE} image={imageURL('wash-world-thumb.180805.png')}>
			<div style={{padding: '0 1em'}}>
				<p className="lineCaption" style={{borderColor: CRED}}>AUDITORIUMへようこそ<br/>WELCOME TO THE AUDITORIUM</p>
				<p className="center"><img src={imageURL('ctrl-overview.180805.png')} style={{width: '480px'}} /></p>
				<p className="center">
					These are the teacher controls<br/>
					ここは先生のコントロールです
				</p>
			</div>
		</WashedBgImage>,
		<WashedBgImage color={CBLUE} image={imageURL('wash-world-thumb.180805.png')}>
			<div style={{padding: '0 1em'}}>
				<p className="lineCaption" style={{borderColor: CRED}}>AUDITORIUMへようこそ<br/>WELCOME TO THE AUDITORIUM</p>
				<p className="center"><img src={imageURL('ctrl-overview-left-right.180805.png')} style={{width: '480px'}} /></p>
				<p className="center">
					These buttons are <Red>previous</Red> and <Red>next</Red><br/>
					このボタンは<Red>前</Red>と<Red>次</Red>です
				</p>
			</div>
		</WashedBgImage>,
		<WashedBgImage color={CBLUE} image={imageURL('wash-world-thumb.180805.png')}>
			<div style={{padding: '0 1em'}}>
				<p className="lineCaption" style={{borderColor: CRED}}>AUDITORIUMへようこそ<br/>WELCOME TO THE AUDITORIUM</p>
				<p className="center"><img src={imageURL('ctrl-overview-menu.180805.png')} style={{width: '480px'}} /></p>
				<p className="center">
					While these buttons handle the <Red>menu</Red><br/>
					そしてこのボタンで<Red>メニュー</Red>を動けます
				</p>
			</div>
		</WashedBgImage>,
		<WashedBgImage color={CBLUE} image={imageURL('wash-world-thumb.180805.png')}>
			<div style={{padding: '0 1em'}}>
				<p className="lineCaption" style={{borderColor: CRED}}>AUDITORIUMへようこそ<br/>WELCOME TO THE AUDITORIUM</p>
				<p className="center"><img src={imageURL('menu.180805.gif')} style={{width: '50%'}} /></p>
				<p className="center">
					The menu lets you switch presentations<br/>
					そのメニューでプレゼンを変更できます
				</p>
			</div>
		</WashedBgImage>,
		<WashedBgImage color={CBLUE} image={imageURL('wash-world-thumb.180805.png')}>
			<div style={{padding: '0 1em'}}>
				<p className="lineCaption" style={{borderColor: CRED}}>AUDITORIUMへようこそ<br/>WELCOME TO THE AUDITORIUM</p>
				<p className="center"><img src={imageURL('menu.180805.gif')} style={{width: '50%'}} /></p>
				<p className="center">
					The active presentation is shown in <Red>color</Red><br/>
					今は見せてるプレゼンが<Red>色で</Red>わかります
				</p>
			</div>
		</WashedBgImage>,
		<WashedBgImage color={CBLUE} image={imageURL('wash-world-thumb.180805.png')}>
			<div style={{padding: '0 1em'}}>
				<p className="lineCaption" style={{borderColor: CRED}}>AUDITORIUMへようこそ<br/>WELCOME TO THE AUDITORIUM</p>
				<p className="center"><img src={imageURL('menu.180805.gif')} style={{width: '50%'}} /></p>
				<p className="center">
					Press <Red>enter ▆</Red> to select a presentation<br/>
					<Red>Enter ▆</Red> でプレゼンを変更します
				</p>
			</div>
		</WashedBgImage>,
		<WashedBgImage color={CBLUE} image={imageURL('wash-world-thumb.180805.png')}>
			<div style={{padding: '0 1em'}}>
				<p className="lineCaption" style={{borderColor: CRED}}>AUDITORIUMへようこそ<br/>WELCOME TO THE AUDITORIUM</p>
				<p className="center">
					Please keep in mind <Red>late-joiners will not synchronize</Red><br/>
					注意：<Red>後で入った人たちはSyncしません</Red>
				</p>
				<p className="center">
					<img src={imageURL('ctrl-reload.180805.png')} style={{height: '350px'}} />
				</p>
				<p className="center">
					The only way to sync right now is with the <Red>reload button</Red><br/>
					今はSyncする方法が<Red>reloadボタン</Red>しかありません
				</p>
			</div>
		</WashedBgImage>,
		<WashedBgImage image={imageURL('wash-world-release.180805.png')} color={CBLUE}>
			<div style={{padding: '1em'}}>
				<p className="lineCaption large" style={{borderColor: CRED}}>AUDITORIUMへようこそ<br/>WELCOME TO THE AUDITORIUM</p>
				<p className="center" style={{paddingTop: '2em'}}>
					This world is brought to you by Beanow<br/>
					このワールドはご覧のBeanowの提供でお送りします
				</p>
				<p className="center large">
					<img src={imageURL('beanow.180805.png')} style={{height: '128px', borderRadius: '128px', verticalAlign: 'middle'}} />
					&nbsp; Beanow#5887
				</p>
			</div>
		</WashedBgImage>
	]
};
