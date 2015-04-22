'use strict';

var React = require('react-native');

var { StyleSheet, View, PropType } = React;

class SquareChart extends View {

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
    var fi = -1;
    var squares = [];

    while (++fi < 18) {
      if (fi >= this.props.totalCount){
        var square_style = styles.dimmed;
      } else if(fi < this.props.filledCount){
        var square_style = styles.success;
      } else {
        var square_style = styles.failure;
      }
      squares.push(<View ref={'squareChart'+fi} style={[square_style, styles.square]} />);
    }

    return (
      <View ref='squarechart' style={styles.container}>
        {squares}
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    height: 19,
    width: 39,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginBottom: 4,
    marginTop: 4
  },

  square: {
    width: 5.5,
    height: 5.5,
    margin: 0.5,
  },

  success: {
    backgroundColor: '#4EAA0C',
  },

  failure: {
    backgroundColor: '#7F3312'
  },
  dimmed: {
    backgroundColor: '#ccc'
  }
});


module.exports = SquareChart;
