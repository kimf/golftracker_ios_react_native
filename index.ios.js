'use strict';

var REQUEST_URL = 'http://localhost:9292/scorecards?year=2014';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  View,
} = React;

var GolfTracker = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  },

  componentDidMount: function() {
    this.fetchData();
  },

  fetchData: function() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData.scorecards);
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.scorecards),
          loaded: true,
        });
      })
      .done();
  },

  render: function() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderScorecard}
        style={styles.listView}
      />
    );
  },

  renderLoadingView: function() {
   return (
     <View style={styles.container}>
       <Text>
         Loading scorecards...
       </Text>
     </View>
   );
  },

  renderScorecard: function(scorecard) {
    return (
      <View style={styles.container}>
        <View style={styles.rightContainer}>
          <Text style={styles.score}>{scorecard.strokes}</Text>
          <Text style={styles.course}>{scorecard.course}</Text>
        </View>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  score: {
    width: 53,
    height: 30,
    fontSize: 24,
    fontWeight: 'bold'
  },
  course: {
    width: 100,
    height: 30,
    fontSize: 14
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('GolfTracker', () => GolfTracker);
