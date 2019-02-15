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
    navigationBarTitleText: '产品首页'
  }
  constructor() {
    super(...arguments)
    this.state = {}
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
        <View className="item" key={index}>
          <Image
            className="item-img"
            src="http://lyszjx.liangtongzhuo.com/uploadfiles/1111111.jpeg"
            mode="widthFix"
          />
          <Text className="item-name">输送社保</Text>
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
              src="http://lyszjx.liangtongzhuo.com/uploadfiles/WechatIMG1612.jpeg"
              mode="widthFix"
            />
          </SwiperItem>
          <SwiperItem>
            <Image
              className="item-img"
              src="http://lyszjx.liangtongzhuo.com/uploadfiles/WechatIMG1611.jpeg"
              mode="widthFix"
            />
          </SwiperItem>
          <SwiperItem>
            <Image
              className="item-img"
              src="http://lyszjx.liangtongzhuo.com/uploadfiles/WechatIMG1610.jpeg"
              mode="widthFix"
            />
          </SwiperItem>
          <SwiperItem>
            <Image
              className="item-img"
              src="http://lyszjx.liangtongzhuo.com/uploadfiles/WechatIMG1611.jpeg"
              mode="widthFix"
            />
          </SwiperItem>
        </Swiper>
        <AtNoticebar marquee icon="volume-plus">
          洛阳晟尊机械设备有限公司是一家集科研开发、制造、销售、服务为一体的现代化企业。公司主营产品：超高压压球机、大型型煤生产线、高效搅拌机、球磨机、旋回破、圆锥破、高效细碎机等。
        </AtNoticebar>
        <View className="at-row">
          <View className="at-col">
            <Image
              className="at-img"
              src="https://jdc.jd.com/img/200"
              mode="widthFix"
            />
            <Text className="at-name">成型设备</Text>
          </View>
          <View className="at-col">
            <Image
              className="at-img"
              src="https://jdc.jd.com/img/200"
              mode="widthFix"
            />
            <Text className="at-name">混合社保</Text>
          </View>
          <View className="at-col">
            <Image
              className="at-img"
              src="https://jdc.jd.com/img/200"
              mode="widthFix"
            />
            <Text className="at-name">破碎设备</Text>
          </View>
          <View className="at-col">
            <Image
              className="at-img"
              src="https://jdc.jd.com/img/200"
              mode="widthFix"
            />
            <Text className="at-name">输送社保</Text>
          </View>
          <View className="at-col">
            <Image
              className="at-img"
              src="https://jdc.jd.com/img/200"
              mode="widthFix"
            />
            <Text className="at-name">其它设备</Text>
          </View>
        </View>
        <AtDivider content="产品展示" className="line" />

        <View className="list-content">{items}</View>
      </View>
    )
  }
}

export default Home
