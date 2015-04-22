'use strict';

var React = require('react-native');

var { Component, StyleSheet, View, PropType } = React;

class SquareRow extends Component {

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
      console.log(element);
      var barStyle = {
        height: 20 + (element * 10)
      };

      bars.push(<View ref='view' style={[barStyle, styles.bar]} />);
    }

    return (
      <View>
        <View ref='view' style={styles.container}>
          {bars}
        </View>
        <View ref='parline' style={styles.parline} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  bar: {
    flex: 1,
    backgroundColor: '#D6DCDF'
  },

  parline: {
    height: 1,
    backgroundColor: '#B8BDBF',
    position: 'relative',
    bottom: 21
  }
});


module.exports = SquareRow;
