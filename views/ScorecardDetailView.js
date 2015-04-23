'use strict';

var React = require('react-native');
var {
  StyleSheet,
  ScrollView
} = React;

var Panel = require('../components/Panel');

var ScorecardScreen = React.createClass({

  render: function() {
    return (
      <ScrollView>
        <Panel label="Course" text={this.props.scorecard.course} />
        <Panel label="When" text={this.props.scorecard.date} />
        <Panel label="Strokes" text={this.props.scorecard.strokes} />
        <Panel label="Putts" text={this.props.scorecard.putts} />
        <Panel label="GIR" text={this.props.scorecard.girs} />
        <Panel label="FIR" text={this.props.scorecard.firs} />
      </ScrollView>
    );
  },
});

module.exports = ScorecardScreen;
