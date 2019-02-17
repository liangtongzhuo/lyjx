import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, AtDivider, RichText } from 'taro-ui'
import Data from '../../data'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '产品详情'
  }
  constructor() {
    super(...arguments)
    const index = this.$router.params.index
    this.state = { data: Data[index] }
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const swiperItems = this.state.data.img.map((item, index) => {
      return (
        <SwiperItem key={index}>
          <Image
            className="item-img"
            src={item}
            mode="widthFix"
          />
        </SwiperItem>
      )
    })
    return (
      <View className="company">
        <Swiper
          indicatorColor="#004277"
          indicatorActiveColor="#999"
          circular
          indicatorDots
          autoplay
        >
          {swiperItems}
        </Swiper>
        <AtDivider content={this.state.data.name} className="line" />

        <RichText
          nodes={this.state.data.content}
          className="company-profile"
        />
      </View>
    )
  }
}

export default Index
