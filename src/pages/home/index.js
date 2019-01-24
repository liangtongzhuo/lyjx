import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, AtGrid } from '@tarojs/components'

import 'taro-ui/dist/style/index.scss' // 全局引入一次即可
import './index.scss'


class Home extends Component {
  config = {
    navigationBarTitleText: '首页'
  }
  constructor () {
    super(...arguments)
    this.state = {}
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View>
        <Swiper
          className='test-h'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay>
          <SwiperItem>
            <View className='demo-text-1'>1</View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-2'>2</View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-3'>3</View>
          </SwiperItem>
        </Swiper>
        <View className='at-row'>
          <View className='at-col'>A</View>
          <View className='at-col'>B</View>
          <View className='at-col'>C</View>
        </View>
      </View>
    )
  }
}

export default Home
