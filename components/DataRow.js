'use strict';

var React = require('react-native');

var { Component, StyleSheet, View, Text, PropType } = React;

var SquareChart = require('./SquareChart');

var eagle_color = '#d8c32a';
var birdie_color = '#d83a29';
var par_color = '#2ecc71';
var bogey_color = '#999';
var double_color = '#555';
var tripple_color = '#000';

var color_by_strokes = {
  '-2':  eagle_color,
  '-1':  birdie_color,
  '0':  par_color,
  '1':  bogey_color,
  '2':  double_color,
  '3':  tripple_color
}

var good_score = 80;
var ok_score = 85;

class DataRow extends View {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    var scorecard = this.props.scorecard;
    return (
      <View style={[this.props.wrapper_style, styles.data_row_wrapper]}>
        <View style={styles.result}>
          <Text style={[styles.strokes, this.greenRedOrOrange(scorecard.strokes, good_score, ok_score)]}>{scorecard.strokes}</Text>
          <Text style={styles.score}>{this.strokesOverParString(scorecard)}{scorecard.strokes_over_par}</Text>
        </View>

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
    );
  }

  getGirPercentage(scorecard){
    var girs = (scorecard.girs / scorecard.scores.length) * 100;
    return Math.round(girs);
  }

  getFirPercentage(scorecard){
    var firs = (scorecard.firs / scorecard.not_par_three_holes) * 100;
    return Math.round(firs);
  }

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

  greenRedOrOrange(value, green_value, orange_value){
    if(value <= green_value){
      var color = par_color;
    } else if(value <= orange_value) {
      var color = eagle_color;
    } else {
      var color = birdie_color;
    }

    return {
      color: color
    }
  }
}

var styles = StyleSheet.create({
  data_row_wrapper: {
    height: 60,
    paddingLeft: 20,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  result: {
    flex: 1,
    flexDirection: 'column',
  },
  strokes: {
    fontSize: 48,
    height: 60,
    fontWeight: '900',
    flex: 1,
    fontFamily: 'Helvetica Neue'
  },
  score: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#999',
    flex: 1,
    fontFamily: 'Helvetica Neue'
  },
  putts: {
    flexDirection: 'column',
    alignItems: 'stretch',
    flex: 1
  },
  gir: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  value: {
    fontSize: 14,
    flex: 1,
    fontFamily: 'Helvetica Neue'
  },
  putt_value: {
    flex: 1,
    height: 36
  },

  label: {
    fontSize: 9,
    color: '#777777',
    flex: 1,
    fontFamily: 'Helvetica Neue'
  },
});


module.exports = DataRow;
