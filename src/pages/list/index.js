import Taro, { Component } from '@tarojs/taro'
import { View, AtDivider, AtButton } from 'taro-ui'
import Data from '../../data'
import './index.scss'

class Home extends Component {
  config = {
    navigationBarTitleText: ''
  }
  constructor() {
    super(...arguments)
    const { type, name } = this.$router.params
    this.state = { type, name, Data }
  }

  onClick(index) {
    Taro.navigateTo({ url: `/pages/item/index?index=${index}` })
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const items = this.state.Data.map((item, index) => {
        return (
          <View
            style={{ 'display': item.type == this.state.type ? 'flex' : 'none'}}
            className="item"
            key={index}
            onClick={this.onClick.bind(this, index)}
          >
            <Image className="item-img" src={item.img[0]} mode="widthFix" />
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
        <AtDivider content={this.state.name} className="line" />
        <View className="list-content">{items}</View>
      </View>
    )
  }
}

export default Home
