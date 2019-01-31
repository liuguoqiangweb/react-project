import React, {
    Component
} from 'react'
import {
    View, Text,StyleSheet,TouchableOpacity,Image,ScrollView
} from 'react-native'
import Row from './row'

export default class MainComponent extends Component {
    handlePress=(path)=> { 
        this.props.navigation.navigate(path)
    }
    render() {
        return <ScrollView>
            <View style={{ backgroundColor: 'powderblue' }}>
                {/* 第一行 */}
                <Row>
                    <View style={[myStyle.myBorder,myStyle.newCol,myStyle.borderRight]}>
                        <Text style={[myStyle.red]}>200</Text>
                        <Text>当日PC端PV量</Text>
                    </View>
                    <View style={[myStyle.myBorder,myStyle.newCol]}>
                        <Text style={[myStyle.green]}>230 </Text>
                        <Text>移动端PV量</Text>
                    </View>
                </Row>
                {/* 第二行 */}
                <Row style={[myStyle.flexRow]}>
                    <View style={[myStyle.myBorder,myStyle.newCol,myStyle.borderRight]}>
                        <Text style={[myStyle.red]}>1020</Text>
                        <Text>已完成订单总数</Text>
                    </View>
                    <View style={[myStyle.myBorder,myStyle.newCol]}>
                        <Text style={[myStyle.green]}>2390 </Text>
                        <Text>当日App下载量</Text>
                    </View>
                </Row>
                <Text>{'\n\n'}</Text>
                {/* 第三行 */}
                <Row>
                    <View style={[myStyle.myBorder,myStyle.newCol]}>
                        <TouchableOpacity style={[myStyle.newCol]}>
                            <Image style={{ width: 60, height: 60 }} source={require('../imgs/order.png')}></Image>
                            <Text>订单管理</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[myStyle.newCol]}>
                            <Image style={{ width: 60, height: 60 }} source={require('../imgs/user.png')}></Image>
                            <Text>用户管理</Text>
                        </TouchableOpacity>
                    </View>
                </Row>
                <Text>{'\n'}</Text>
                {/* 第四行 */}
                <Row>
                    <View style={[myStyle.myBorder,myStyle.newCol]}>
                        <TouchableOpacity style={[myStyle.newCol]} onPress={()=>this.handlePress('product')}>
                            <Image style={{ width: 60, height: 60 }} source={require('../imgs/product.png')}></Image>
                            <Text>商品管理</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[myStyle.newCol]}>
                            <Image style={{ width: 60, height: 60 }} source={require('../imgs/setting.png')}></Image>
                            <Text>设置</Text>
                        </TouchableOpacity>
                    </View>
                </Row>
                <Text>{'\n\n'}</Text>
            </View>
        </ScrollView>
    }
}
var myStyle = StyleSheet.create({
    newCol: {
        flex: 1,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    myBorder: {
        borderBottomWidth: 2,
        borderColor:'white'
    },
    borderRight: {
        borderRightWidth:2
    },
    red: {
        color: 'red', fontSize: 25
    },
    green: {
        color: 'green', fontSize: 25
    },
    flexRow: {
        flexDirection: 'row'
    }
})