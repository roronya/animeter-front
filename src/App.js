import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Anime from './components/Anime'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Anime name="アイカツフレンズ！"
               broadcasted_at="2018年春"
               image_url="http://eiga.k-img.com/images/anime/program/106744/photo/96752ba01b905263/320.jpg?1518061330"
							 comment="何もかも良い。" />
				<Anime name="多田くんは恋をしない"
							 broadcasted_at="2018年春"
							 image_url="http://eiga.k-img.com/images/anime/program/106495/photo/07487235244c9da7/320.jpg?1506948820"
							 comment="アレクぐうかわ。" />
      </div>
    );
  }
}

export default App;
