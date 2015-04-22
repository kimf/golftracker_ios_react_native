'use strict';

var React = require('react-native');
var {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} = React;

var SquareChart = require('./components/SquareChart');
var ScoreRow = require('./components/ScoreRow');

var ScorecardRow = React.createClass({
  underlayColor: function() {
    return '#ffeebb';
  },

  render: function() {
    var scorecard = this.props.scorecard;
    return (
      <TouchableHighlight underlayColor={this.underlayColor()} onPress={this.props.onSelect}>
        <View style={styles.wrapper}>
          <View style={styles.meta_header}>
            <Text style={[styles.small_and_gray, styles.course]}>{scorecard.course}</Text>
            <Text style={[styles.small_and_gray, styles.date]}>{scorecard.date}</Text>
          </View>
          <View style={styles.data_row}>
            <Text style={styles.strokes}>{scorecard.strokes}</Text>
            <Text style={styles.score}>{this.strokesOverParString(scorecard)}{scorecard.strokes_over_par}</Text>

            <View style={styles.gir}>
              <Text style={styles.label}>GIR: {scorecard.girs}/{scorecard.scores.length}</Text>
              <SquareChart style={styles.circle_chart} filledCount={scorecard.girs} totalCount={scorecard.scores.length} />
              <Text style={styles.value}>{this.getGirPercentage(scorecard) + '%'}</Text>
            </View>

            <View style={styles.gir}>
              <Text style={styles.label}>FIR: {scorecard.firs}/{scorecard.not_par_three_holes}</Text>
              <SquareChart style={styles.circle_chart} filledCount={scorecard.firs} totalCount={scorecard.not_par_three_holes} />
              <Text style={styles.value}> {this.getFirPercentage(scorecard) + '%'}</Text>
            </View>

            <View style={styles.putts}>
              <Text style={styles.label}>PUTTS:</Text>
              <Text style={styles.putt_value}>{scorecard.putts_avg} / {this.props.scorecard.putts_gir_avg}</Text>
            </View>
          </View>
          <ScoreRow styles={styles.score_row} scores={scorecard.consistency} />
        </View>
      </TouchableHighlight>
    );
  },

  getGirPercentage(scorecard){
    var girs = (scorecard.girs / scorecard.scores.length) * 100;
    return Math.round(girs);
  },
  getFirPercentage(scorecard){
    var firs = (scorecard.firs / scorecard.not_par_three_holes) * 100;
    return Math.round(firs);
  },
  strokesOverParString(scorecard){
    var par = scorecard.par;
    if( scorecard.strokes == par ){
      return "";
    } else if (scorecard.strokes > par) {
      return "+";
    } else if (scorecard.strokes < par) {
      return "-";
    }
  }
})

var styles = StyleSheet.create({
  wrapper: {
    margin: 5,
    backgroundColor: '#E7ECEE',
  },
  meta_header: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    height: 15,
    marginBottom: 5
  },
  course: {
    textAlign: 'left'
  },
  date: {
    textAlign: 'right',
    flex: 1
  },
  small_and_gray: {
    fontSize: 10,
    fontWeight: '600',
    color: '#777777'
  },
  label: {
    fontSize: 8,
    color: '#777777',
    flex: 1
  },
  data_row: {
    height: 60,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  strokes: {
    fontSize: 32,
    fontWeight: 'bold',
    flex: 1
  },
  score: {
    fontSize: 14,
    flex: 1
  },
  putts: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 100,
    fontSize: 14,
    flex: 1
  },
  gir: {
    height: 50,
    width: 100,
    fontSize: 14,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    textAlign: 'center'
  },
  value: {
    fontSize: 12,
    flex: 1
  },
  putt_value: {
    flex: 2
  },
  score_row: {
    height: 40
  }
});

module.exports = ScorecardRow
