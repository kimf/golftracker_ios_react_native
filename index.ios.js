'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} = React;

var ScorecardsList = require('./ScorecardsList');

var App = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.app}
        initialRoute={{
          title: 'Scorecards',
          component: ScorecardsList,
        }}
      />
    );
  }
});

var styles = StyleSheet.create({
  app: {
    flex: 1
  }
});

AppRegistry.registerComponent('GolfTracker', () => App);
