/**
 *  Class: index
 *  Author: Ji Junpeng
 *  Date: 2017-4-28.
 *  Description:
 */
import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {Router, Scene, ActionConst} from 'react-native-router-flux';
import Login from './pages/login';
import Tab1 from './pages/container/Tab1';
import Tab2 from './pages/container/Tab2';
import Tab3 from './pages/container/Tab3';
import Tab4 from './pages/container/Tab4';

import Icon from 'react-native-vector-icons/FontAwesome';

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
      <Router>
        <Scene key="login" component={Login} hideNavBar/>
        <Scene key="container" tabBarStyle={style.tabBarStyle} tabs hideNavBar initial>
          <Scene key="tab1"
                 title={'TAB1'}
                 icon={TabIcon}
                 iconName={'tab1'}
                 component={Tab1}
                 hideNavBar
                 initial/>
          <Scene key="tab2"
                 title={'TAB2'}
                 iconName={'tab2'}
                 icon={TabIcon}
                 component={Tab2}
                 hideNavBar/>
          <Scene key="tab3"
                 title={'TAB3'}
                 icon={TabIcon}
                 iconName={'tab3'}
                 component={Tab3}
                 hideNavBar/>
          <Scene key="tab4"
                 title={'TAB4'}
                 icon={TabIcon}
                 iconName={'tab4'}
                 component={Tab4}
                 hideNavBar/>
        </Scene>
      </Router>
    );
  }
}

let style = StyleSheet.create({
  tabBarStyle: {
    borderTopWidth: .5,
    borderColor: '#b7b7b7',
    backgroundColor: 'white',
    opacity: 1
  }
});

//下面ICON组件 ，改变选中/未选中的图标颜色
class TabIcon extends React.Component {
  render() {
    const color = this.props.selected ? '#cf7111' : '#6577cc';
    let icon = (<Image style={{width: 25, height: 25, tintColor: color}} source={require('./images/ic_tab1.png')}/>);
    switch (this.props.iconName) {
      case "tab1":
        icon = <Image style={{width: 25, height: 25, tintColor: color}} source={require('./images/ic_tab1.png')}/>;
        break;
      case "tab2":
        icon = <Image style={{width: 25, height: 25, tintColor: color}} source={require('./images/ic_tab2.png')}/>;
        break;
      case "tab3":
        icon = <Image style={{width: 25, height: 25, tintColor: color}} source={require('./images/ic_tab3.png')}/>;
        break;
      case "tab4":
        icon = <Image style={{width: 25, height: 25, tintColor: color}} source={require('./images/ic_tab4.png')}/>;
        break;
    }
    return (
      <View
        style={{flex: 1, flexDirection: 'column', alignItems: 'center', alignSelf: 'center', justifyContent: 'center'}}>
        {icon}
        <Text style={{color: color}}>{this.props.title}</Text>
      </View>
    );
  }
}
