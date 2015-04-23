'use strict';

var React = require('react-native');

var { StyleSheet, View, PropType } = React;

var SCOREHEIGHT = 20;
//var SCORECOLORS = {'-2': '#B0A606', '-1': '#945816', '0': '#D6DCDF', '1': '#A398C5', '2': '#68617F', '3': '#4B4B4B', '4': '#222', '5': '#000'};

class SquareRow extends View {

  constructor(props, context) {
    super(props, context);
  }

  // componentWillMount() {
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.data && nextProps.data !== this.props.data) {
  //     //do something
  //   }
  // }

  // doSomething(data) {
  //   data = data || this.props.data;

  //   if (Array.isArray(data)) {
  //     return;
  //   }
  // }

  render() {
    var bars = [];
    this.props.scores.forEach(pushBar);

    function pushBar(element, index, array){
      var barStyle = {
        height: SCOREHEIGHT + (element * 10),
        backgroundColor: '#D6DCDF'
        // backgroundColor: SCORECOLORS[element.toString()]
      };
      bars.push(<View key={index} style={[barStyle, styles.bar]} />);
    }

    return (
      <View>
        <View style={[this.props.wrapper_style, styles.score_row_wrapper]}>
          {bars}
        </View>
        <View style={[styles.scoreline, styles.parline]} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  score_row_wrapper: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },

  bar: {
    flex: 1,
  },

  parline: {
    height: 0,
    bottom: SCOREHEIGHT,
    borderColor: '#BCD3D1',
    borderBottomWidth: 1,
    position: 'relative',
    opacity: 0.5
  },
});


module.exports = SquareRow;
