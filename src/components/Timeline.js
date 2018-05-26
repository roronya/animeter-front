import {Chart} from 'react-google-charts';
import React from 'react';

class Timeline extends React.Component {
	columns = [
		{"id": "title", "type": "string"},
		{"id": "comment", "type": "string"},
		{"id": "Start", "type": "date"},
		{"id": "End", "type": "date"}
	];

	constructor(props) {
		super(props);
		this.rows = this.props.histories.map(history => {
			return [
				history['anime']['title'],
				history['comment'],
				history['start'],
				history['end']
			];
		});
	}

	render() {
		return (
			<Chart
				chartType="Timeline"
				columns={this.columns}
				rows={this.rows}
				options={{}}
				graph_id="TimelineChart"
				width={"100%"}
				height={"400px"}
				chartEvents={this.props.chartEvents}
				chartPackages={['timeline']}
			/>
		);
	}
}

export default Timeline;