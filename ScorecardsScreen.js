'use strict';

var React = require('react-native');
var {
  ListView,
} = React;

var LoadingScreen = require('./LoadingScreen');
var ScorecardScreen = require('./ScorecardScreen');
var ScorecardRow = require('./ScorecardRow');

var REQUEST_URL = 'http://localhost:9292/scorecards?year=2014';

var ScorecardsScreen = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  },

  componentDidMount: function() {
    this.fetchData();
  },

  fetchData: function() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.scorecards.reverse()),
          loaded: true,
        });
      })
      .done();
  },

  render: function() {
    if(!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    );
  },

  renderLoadingView: function() {
    return (
      <LoadingScreen/>
    );
  },

  renderRow: function(scorecard) {
    return (
      <ScorecardRow
        onSelect={() => this.selectRow(scorecard)}
        scorecard={scorecard}
      />
    );
  },

  selectRow: function(scorecard) {
    this.props.navigator.push({
      title: 'Scorecard',
      component: ScorecardScreen,
      passProps: {scorecard},
    });
  }
});

module.exports = ScorecardsScreen;
