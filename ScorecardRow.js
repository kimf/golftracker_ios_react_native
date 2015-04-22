'use strict';

var React = require('react-native');
var {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} = React;

var MetaHeader = require('./components/MetaHeader');
var ScoreRow = require('./components/ScoreRow');
var DataRow = require('./components/DataRow');

var ScorecardRow = React.createClass({
  underlayColor: function() {
    return '#ffeebb';
  },

  render: function() {
    var scorecard = this.props.scorecard;
    return (
      <TouchableHighlight underlayColor={this.underlayColor()} onPress={this.props.onSelect}>
        <View style={styles.wrapper}>
          <MetaHeader course={scorecard.course.toUpperCase()} date={scorecard.date} />
          <DataRow wrapper_style={styles.data_row} scorecard={scorecard} />
          <ScoreRow wrapper_style={styles.score_row} scores={scorecard.consistency} />
        </View>
      </TouchableHighlight>
    );
  }
})

var styles = StyleSheet.create({
  wrapper: {
    margin: 10,
    marginBottom: 0,
    backgroundColor: '#E7ECEE',
    flexDirection: 'column',
  },
  score_row: {
    flex: 1,
  },
  data_row: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10
  }
});

module.exports = ScorecardRow
