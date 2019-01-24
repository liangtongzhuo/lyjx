import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'


class Index extends Component {
  config = {
    navigationBarTitleText: '公司介绍'
  }
  constructor () {
    super(...arguments)
    this.state = {
      current: 0
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
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
        bbbbb
      </View>
    )
  }
}

export default Index
