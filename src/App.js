import React, {Component} from 'react';
import './App.css';
import Anime from './components/Anime'
import Timeline from "./components/Timeline";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			histories: [
				{
					start: new Date(2016, 9),
					end: new Date(2017, 3),
					comment: '人生',
					anime: {
						title: 'アイカツ！',
						broadcasted_at: new Date(2012, 10),
						image_url: 'http://eiga.k-img.com/images/anime/program/106744/photo/96752ba01b905263/320.jpg?1518061330',
					}
				},
				{
					start: new Date(2018, 4),
					end: new Date(),
					comment: '何もかも最高',
					anime: {
						title: 'アイカツフレンズ！',
						broadcasted_at: new Date(2018, 4),
						image_url: 'http://eiga.k-img.com/images/anime/program/106744/photo/96752ba01b905263/320.jpg?1518061330',
					}
				},
				{
					start: new Date(2018, 4),
					end: new Date(),
					comment: '絶対これ辛い話になるでしょ…すき…',
					anime: {
						title: '多田くん恋をしない',
						broadcasted_at: new Date(2018, 4),
						image_url: 'http://eiga.k-img.com/images/anime/program/106495/photo/07487235244c9da7/320.jpg?1506948820',
					}
				},
				{
					start: new Date(2018, 1),
					end: new Date(2018, 3),
					comment: 'かわいかった',
					anime: {
						title: 'ゆるキャン△',
						broadcasted_at: new Date(2018, 1),
						image_url: 'http://eiga.k-img.com/images/anime/program/106288/photo/7c3c8dc667829969/320.jpg?1511491374',
					}
				},
			]
		};
	}

	render() {
		const animes = this.state.histories.map(history => {
			return <Anime name={history['anime']['title']}
										broadcasted_at={history['anime']['broadcated_ad']}
										image_url={history['anime']['image_url']}
										comment={history['comment']}/>
		});
		return (
			<div className="App">
				<header>
					<h1>Animeter</h1>
				</header>
				<Timeline histories={this.state.histories}/>
				{animes}
			</div>
		);
	}
}

export default App;
