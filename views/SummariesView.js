'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Component
} = React;


class SummariesView extends Component{
  render() {
    return (
      <View style={styles.loading}>
        <Text style={styles.text}>
          SUMMARIES
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  text: {
    fontSize: 40,
    padding: 20,
    fontWeight: '900',
    fontFamily: 'Helvetica Neue',
    textAlign: 'center',
    color: 'green'
  }
});

module.exports = SummariesView;
