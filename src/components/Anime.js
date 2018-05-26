import React from 'react';
import PropTypes from 'prop-types';

export default class Anime extends React.Component {
	render() {
		return (
			<div className="Anime">
				<h1>{this.props.name}</h1>
				<p>{this.props.broadcasted_at}アニメ</p>
				<img src={this.props.image_url} />
				<p>{this.props.comment}</p>
			</div>
		);
	}
}

Anime.propTypes = {
	name: PropTypes.string,
	image_url: PropTypes.string,
	broadcasted_at: PropTypes.string,
	comment: PropTypes.string
};

