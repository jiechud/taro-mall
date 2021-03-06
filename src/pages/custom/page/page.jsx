import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import { View, Text , Button, Block} from '@tarojs/components';
import { connect } from 'react-redux';
import { TabBar } from '../../../components';

@connect(({ home }) => ({
  currNav: home.shop.currentNav,
}))
class Page extends Component {


  state={}

  componentWillMount () {}
  componentDidMount () {}
  componentWillReceiveProps (nextProps,nextContext) {}
  componentWillUnmount () {}
  componentDidShow () {}
  componentDidHide () {}
  componentDidCatchError () {}
  componentDidNotFound () {}
  render() {
    const {currNav} = this.props;
    return (
      <Block>
        <View className='bar-container container'>
          自定义页面
          {currNav.ref_id}
        </View>
      </Block>
    );
  }
}
export default Page;
