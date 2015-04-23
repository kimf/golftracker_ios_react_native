'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  TabBarIOS,
  Component
} = React;

var SMXTabBarIOS = require('SMXTabBarIOS');
var SMXTabBarItemIOS = SMXTabBarIOS.Item;

var ScorecardsListView = require('./views/ScorecardsListView');
var SummariesView      = require('./views/SummariesView');
var StartPlayView      = require('./views/StartPlayView');

class Golftracker extends Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'summaries'
    };
  }

  render() {
    return (
      <SMXTabBarIOS
        selectedTab={this.state.selectedTab}
        tintColor={'#000'}
        barTintColor={'#E7ECEE'}>
        <SMXTabBarItemIOS
          selected={this.state.selectedTab === 'summaries'}
          name='summaries'
          iconName={'ion|ios-analytics-outline'}
          title='Summaries'
          iconSize={32}
          onPress={() => {
            this.setState({
                selectedTab: 'summaries',
            });
          }}>
          <SummariesView />
        </SMXTabBarItemIOS>

        <SMXTabBarItemIOS
          selected={this.state.selectedTab === 'scorecards'}
          name='scorecards'
          iconName={'ion|ios-list-outline'}
          title='Scorecards'
          iconSize={32}
          onPress={() => {
            this.setState({
                selectedTab: 'scorecards',
            });
          }}>
          <ScorecardsListView />
        </SMXTabBarItemIOS>

        <SMXTabBarItemIOS
          selected={this.state.selectedTab === 'play'}
          name='play'
          iconName={'ion|ios-play-outline'}
          title='Play'
          iconSize={32}
          onPress={() => {
            this.setState({
                selectedTab: 'play',
            });
          }}>
          <StartPlayView />
        </SMXTabBarItemIOS>
      </SMXTabBarIOS>
    );
  }
}

var styles = StyleSheet.create({
  app: {
    flex: 1
  }
});

AppRegistry.registerComponent('GolfTracker', () => Golftracker);
