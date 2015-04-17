'use strict';

var KFCircleChart = require('NativeModules').KFCircleChart;
var React = require('React');
var StyleSheet = require('StyleSheet');

var createReactIOSNativeComponentClass = require('createReactIOSNativeComponentClass');


var CircleChart = React.createClass({

  render: function() {
    var props = {
      ...this.props,
      style: ([styles.base, this.props.style]: ?Array<any>),
    };

    return (
      <KFCircleChart {...props} />
    );
  }
});

var styles = StyleSheet.create({
  base: {
    flex: 1,
  },
});

var KFCircleChart = createReactIOSNativeComponentClass({
  validAttributes: {current: true},
  uiViewClassName: 'KFCircleChart',
});

module.exports = CircleChart;
