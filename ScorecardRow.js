'use strict';

var React = require('react-native');
var {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} = React;

var CircleChart = require('./CircleChart');

var ScorecardRow = React.createClass({
  underlayColor: function() {
    return '#f2f2f2';
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
            <Text style={styles.score}>{scorecard.strokes_over_par}</Text>

            <Text style={styles.gir}><Text style={styles.label}>GIR:</Text> {this.getGirPercentage(scorecard) + '%'}</Text>
            <CircleChart style={styles.circle_chart} currentValue={scorecard.girs} total={scorecard.scores.length}/>

            <Text style={styles.fir}><Text style={styles.label}>FIR:</Text> {this.getFirPercentage(scorecard) + '%'}</Text>
            <CircleChart style={styles.circle_chart} currentValue={scorecard.firs} total={scorecard.not_par_three_holes}/>
            <Text style={styles.putts}><Text style={styles.label}>PUTTS:</Text> {scorecard.putts_avg} / {this.props.scorecard.putts_gir_avg}</Text>
          </View>
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
  }
})

var styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    margin: 10,
    marginBottom: 0,
    backgroundColor: '#F5F5F5',
  },
  meta_header: {
    flexDirection: 'row',
    alignItems: 'center'
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
    fontWeight: '600',
    color: '#777777',
    flex: 1
  },
  data_row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  strokes: {
    fontSize: 30,
    fontWeight: 'bold',
    flex: 1
  },
  score: {
    fontSize: 18,
    flex: 1
  },
  putts: {
    fontSize: 14,
    flex: 1
  },
  gir: {
    fontSize: 14,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  fir: {
    fontSize: 18,
    flex: 1
  },
  circle_chart: {
    height: 10,
    flex: 2
  }
});

module.exports = ScorecardRow
