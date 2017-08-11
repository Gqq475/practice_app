/**
 *  Class: index
 *  Author: Ji Junpeng
 *  Date: 17/4/28.
 *  Description:
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class index extends Component {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  // 渲染
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{
          height: 100,
          width: 100,
          justifyContent: 'center',
          textAlign: 'center',
          textAlignVertical: 'center',
          color: 'white',
          backgroundColor: '#0e781d'
        }}>TAB 1</Text>
      </View>
    );
  }
}