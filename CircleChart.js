'use strict';

var NativeMethodsMixin = require('NativeMethodsMixin');
var React = require('React');
var ReactIOSViewAttributes = require('ReactIOSViewAttributes');
var StyleSheetPropType = require('StyleSheetPropType');

var createReactIOSNativeComponentClass = require('createReactIOSNativeComponentClass');
var merge = require('merge');

var stylePropType = StyleSheetPropType();

var viewConfig = {
  validAttributes: merge(ReactIOSViewAttributes.UIView, {
    currentValue: true,
    totalValue: true,
  }),
  uiViewClassName: 'KFCircleChart',
};


var CircleChart = React.createClass({

  mixins: [NativeMethodsMixin],

  propTypes: {
    currentValue: React.PropTypes.number,
    totalValue: React.PropTypes.number,
    style: stylePropType,
    testID: React.PropTypes.string,
  },

  viewConfig: viewConfig,

  render: function() {
    var props = {};
    for (var key in this.props) {
      props[key] = this.props[key];
    }
    props.ref = this.getNodeHandle();

    return <KFCircleChart {...props} />;
  },
});

var KFCircleChart = createReactIOSNativeComponentClass(viewConfig);

module.exports = CircleChart;
