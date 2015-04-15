'use strict';

var React = require('react-native');
var {
  StyleSheet,
  ScrollView,
  MapView,
} = React;

var moment = require('moment');
var Panel = require('./Panel');

var ScorecardScreen = React.createClass({
  getRegion: function() {
    return {
      latitude: 59.246007,
      longitude: 18.064710,
      latitudeDelta: 1,
      longitudeDelta: 1,
    }
  },

  render: function() {
    return (
      <ScrollView>
        <MapView region={this.getRegion()} style={styles.map} />
        <Panel label="Course" text={this.props.scorecard.course} />
        <Panel label="When" text={this.props.scorecard.date} />
        <Panel label="Strokes" text={this.props.scorecard.strokes} />
        <Panel label="Putts" text={this.props.scorecard.putts} />
        <Panel label="GIR" text={this.props.scorecard.girs} />
      </ScrollView>
    );
  },
});

var styles = StyleSheet.create({
  map: {
    height: 250,
  },
});

module.exports = ScorecardScreen;
