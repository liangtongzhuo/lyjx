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
      current: 0,
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
  handleClick(value) {
    this.setState({
      current: value
    })
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
        <Text className="lab">联系人：李某某</Text>
        <Text className="lab">手机：182388888888</Text>
        <Text className="lab">电话号码：123131312321</Text>
        <Text className="lab">邮箱地址：123131232131</Text>
        <Text className="lab">公司网址：123131232131</Text>
        <Text className="lab">公司位置：123131232131</Text>
        <Map
          scale="15"
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
