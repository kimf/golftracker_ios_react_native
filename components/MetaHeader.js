'use strict';

var React = require('react-native');

var { StyleSheet, View, Text, PropType } = React;


class MetaHeader extends View {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <View style={styles.meta_header} >
        <Text style={[styles.small_and_gray, styles.course]}>{this.shortenCourseName(this.props.course)}</Text>
        <Text style={[styles.small_and_gray, styles.date]}>{this.props.date}</Text>
      </View>
    );
  }

  shortenCourseName(text) {
    var maxLength = 150;
    var ret = text;
    if (ret.length > maxLength) {
        ret = ret.substr(0,maxLength-3) + "...";
    }
    return ret;
  }

}

var styles = StyleSheet.create({
  meta_header: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    height: 20,
    marginBottom: 10
  },
  course: {
    flex: 4,
    textAlign: 'left',
  },
  date: {
    textAlign: 'right',
    flex: 1
  },
  small_and_gray: {
    fontSize: 9,
    fontWeight: '600',
    color: '#999'
  },
});


module.exports = MetaHeader;
