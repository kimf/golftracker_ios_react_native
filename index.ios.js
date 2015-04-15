'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} = React;

var ScorecardsScreen = require('./ScorecardsScreen');

var App = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.app}
        initialRoute={{
          title: 'Scorecards',
          component: ScorecardsScreen,
        }}
      />
    );
  }
});

var styles = StyleSheet.create({
  app: {
    flex: 1,
  }
});

AppRegistry.registerComponent('GolfTracker', () => App);
