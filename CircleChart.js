'use strict';

var KFCircleChart = require('NativeModules').KFCircleChart;
var React = require('React');
var ReactIOSViewAttributes = require('ReactIOSViewAttributes');
var StyleSheet = require('StyleSheet');
var StyleSheetPropType = require('StyleSheetPropType');
var View = require('View');
var ViewStylePropTypes = require('ViewStylePropTypes');

var createReactIOSNativeComponentClass = require('createReactIOSNativeComponentClass');
var PropTypes = React.PropTypes;


var CircleChart = React.createClass({
  propTypes: {
    style: StyleSheetPropType(ViewStylePropTypes),
  },


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

var validAttributes = {
  ...ReactIOSViewAttributes.UIView,
};

var KFCircleChart = createReactIOSNativeComponentClass({
  validAttributes: validAttributes,
  uiViewClassName: 'KFCircleChart',
});

module.exports = CircleChart;
