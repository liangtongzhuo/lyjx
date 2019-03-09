import Taro, { Component } from '@tarojs/taro'
import {
  View,
  Swiper,
  SwiperItem,
  AtNoticebar,
  AtDivider,
  AtButton
} from 'taro-ui'
import Data from '../../data'
import './index.scss'

class Home extends Component {
  config = {
    navigationBarTitleText: '首页'
  }
  constructor() {
    super(...arguments)
    this.state = {}
  }

  onClick(index) {
    Taro.navigateTo({ url: `/pages/item/index?index=${index}` })
  }

  onClickList(type, name) {
    Taro.navigateTo({ url: `/pages/list/index?type=${type}&name=${name}` })
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const items = Data.map((item, index) => {
      return (
        <View className="item" key={index} onClick={this.onClick.bind(this, index)}>
          <Image
            className="item-img"
            src={item.img[0]}
            mode="widthFix"
          />
          <Text className="item-name">{item.name}</Text>
          <Text className="item-sub-name">洛阳晟尊机械设备有限公司</Text>
          <AtButton className="item-button" type="primary" size="small">
            查看详情
          </AtButton>
        </View>
      )
    })
    return (
      <View className="home">
        <Swiper
          indicatorColor="#004277"
          indicatorActiveColor="#999"
          circular
          indicatorDots
          autoplay
        >
          <SwiperItem>
            <Image
              className="item-img"
              src="http://www.lyszjx.com/Upload/201903/20190307102204_6318.jpg"
              mode="widthFix"
            />
          </SwiperItem>
          <SwiperItem>
            <Image
              className="item-img"
              src="http://www.lyszjx.com/Upload/201902/20190220151109_3882.jpg"
              mode="widthFix"
            />
          </SwiperItem>
          <SwiperItem>
            <Image
              className="item-img"
              src="http://www.lyszjx.com/Upload/201903/20190301160509_3623.jpg"
              mode="widthFix"
            />
          </SwiperItem>
        </Swiper>
        <AtNoticebar marquee icon="volume-plus">
          洛阳晟尊机械设备有限公司是一家集科研开发、制造、销售、服务为一体的现代化企业。公司主营产品：超高压压球机、大型型煤生产线、高效搅拌机、球磨机、旋回破、圆锥破、高效细碎机等。
        </AtNoticebar>
        <View className="at-row">
          <View className="at-col" onClick={this.onClickList.bind(this, 0, '压球机')}>
            <Image
              className="at-img"
              src="http://www.lyszjx.com/Upload/201903/20190306153343_8495.jpg"
              mode="widthFix"
            />
            <Text className="at-name">压球机</Text>
          </View>
          <View className="at-col" onClick={this.onClickList.bind(this, 1, '压球机生产线')}>
            <Image
              className="at-img"
              src="http://www.lyszjx.com/Upload/201901/20190128152916_7344.jpg"
              mode="widthFix"
            />
            <Text className="at-name">压球机生产线</Text>
          </View>
          <View className="at-col" onClick={this.onClickList.bind(this, 2, '混合机设备')}>
            <Image
              className="at-img"
              src="http://www.lyszjx.com/Upload/201901/20190128154641_4211.jpg"
              mode="widthFix"
            />
            <Text className="at-name">混合机设备</Text>
          </View>
        </View>
        <AtDivider content="产品展示" className="line" />

        <View className="list-content">{items}</View>
      </View>
    )
  }
}

export default Home
