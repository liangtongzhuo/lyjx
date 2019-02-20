import Taro, { Component } from '@tarojs/taro'
import { WebView } from '@tarojs/components'

import './index.scss'

class Home extends Component {
  config = {
    navigationBarTitleText: ''
  }
  constructor() {
    super(...arguments)
    this.state = {}
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {}

  componentDidShow() {
  }

  componentDidHide() {}

  render() {
    return <WebView src="https://lyszjx.liangtongzhuo.com" />
  }
}

export default Home
