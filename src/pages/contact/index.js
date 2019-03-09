import Taro, { Component } from '@tarojs/taro'
import { View, Map, Text } from '@tarojs/components'
import { AtDivider } from 'taro-ui'
import './index.scss'

class Index extends Component {
  config = {
    navigationBarTitleText: '联系我们'
  }
  constructor() {
    super(...arguments)
    this.state = {
      markers: [
        {
          // iconPath: '/resources/others.png',
          id: 0,
          longitude: 112.354603,
          latitude: 34.654604,
          width: 50,
          height: 50
        }
      ]
    }
  }
  makePhoneCall() {
    Taro.makePhoneCall({
      phoneNumber: '18703792710'
    })
      .then()
      .catch(e => {})
  }
  click() {
    Taro.navigateTo({ url: '/pages/web/index' })
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="contact">
        <AtDivider content="联系方式" className="line" />
        <Text className="lab">联系人：刘先生</Text>
        <Text className="lab" onClick={this.makePhoneCall}>
          手机号码：<Text className="blue">18703792710</Text>
        </Text>
        {/* <Text className="lab" onClick={this.click}>
          公司网址：<Text className="blue">http://www.lyszjx.com/</Text>
        </Text> */}
        <Text className="lab">邮箱地址：lyszjx@126.com</Text>
        <Text className="lab">公司位置：洛阳市涧西区工业园区</Text>
        <AtDivider content="地图位置" className="line" />
        <Map
          scale="18"
          longitude="112.354603"
          latitude="34.654604"
          style="width: 100%;height: 200px;"
          markers="{{markers}}"
          enableOverlooking
        />
      </View>
    )
  }
}

export default Index
