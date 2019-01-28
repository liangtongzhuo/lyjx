import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Text, AtDivider } from 'taro-ui'

import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '公司介绍'
  }
  constructor() {
    super(...arguments)
    this.state = {
      current: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
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
        <AtDivider content="公司简介" className="line" />

        <Text className="company-profile">
        &nbsp;&nbsp;洛阳晟尊机械设备有限公司是一家集科研开发、制造、销售、服务为一体的现代化企业。位于洛阳涧西区先进制造业集聚区。公司成立至今，始终坚持以人为本、质量第一、自主创新、持续改进，以技术领先求发展的方针。公司过了<br/>
        &nbsp;&nbsp;ISO9001 等国际质量体系、计量、设计规范等认证，属于高新技术企业。<br/>
        &nbsp;&nbsp;公司注册资金1000万元，占地面积13328㎡,办公楼面积1000㎡，生产厂房面积8000㎡，宿舍面积1000㎡，现有职工100余人，工程技术人员20余人，各类专家、工程师等技术骨干占50%以上。公司设置有销售部、技术中心、生产部、采购部、质管部、人力资源部、财务部、铆焊、机加、装配三个车间。加工装备有镗铣床、装配平台、大型数控立车、卧车、加工中心、数控车床、数控切割机、75吨、32吨双梁桥式起重设备等60余台设备。<br/>
        &nbsp;&nbsp;公司经营范围：矿山机械、球团及粉体工程的研发制造、销售服务，成套电器设备的设计制造，工程机械零部件制造。<br/>
        &nbsp;&nbsp;公司主营产品：超高压压球机、大型型煤生产线、高效搅拌机、球磨机、旋回破、圆锥破、高效细碎机等。<br/>
        </Text>
      </View>
    )
  }
}

export default Index
