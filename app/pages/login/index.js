/**
 *  Class: index
 *  Author: Ji Junpeng
 *  Date: 17/4/28.
 *  Description:
 */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux';

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
      <View style={{flex: 1}}>
        <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} onPress={() => {
          console.log("******* hello");
          Actions.pop({type:ActionConst.REFRESH});
        }}>
          <Text style={{
            height: 50,
            width: 100,
            justifyContent: 'center',
            textAlign: 'center',
            textAlignVertical: 'center',
            color: 'white',
            backgroundColor: '#783632'
          }}>登录</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
