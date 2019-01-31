import React, { Component } from 'react'
import { Text } from 'react-native'

export default class Demo05StyleComponent extends Component { 
    constructor() { 
        super()
        this.state = {val:0,isAdd:true}
    }
    componentDidMount () { 
        setInterval(() => { 
            var nowVal = this.state.val
            if (this.state.isAdd) {
                nowVal += 0.1
            } else { 
                nowVal -= 0.1
            }
            if (nowVal >= 1) {
                this.setState({
                    isAdd: false
                })
            } else if(nowVal <= 0) { 
                this.setState({
                    isAdd:true
                })
            }
            this.setState({val: nowVal})
        },200)
    }
    render() { 
        return <Text style={{ opacity: this.state.val }}>吃饭睡觉打豆豆</Text>
    }
}
