import React, {Component} from 'react';
import {View, Text ,Linking} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Thumbnail, Button} from 'native-base';
export default class TryApp extends Component {
    openY5 = async () =>{
        let result = await Linking.openURL('http://yallafive.com');
        this.setState({ result });
    }
    state = {
        result: null,
    };
    render() {
        return (
            <View style={{
                backgroundColor: '#eb3b51', justifyContent: 'space-around',
                alignItems: 'center',
            }}>
                <LinearGradient
                    colors={['#41295a', '#2F0743']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    locations={[0.0, 0.99]}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        height: '100%'
                    }}
                />
                <Text style={{
                    color: '#fff', fontFamily: 'cairo', fontSize: 32,
                    paddingBottom: 15,
                    width: '100%',
                    textAlign: 'center'
                }}>جرب ايضا تطبيقنا يلا 5
                </Text>
                <Text style={{
                    color: '#fff', fontFamily: 'cairo', fontSize: 20,
                    paddingBottom: 15,
                    width: '100%',
                    textAlign: 'center'
                }}>تطبيق يلا 5 به كل ما تحتاجه فقط ب 5 دولار !</Text>
                <Thumbnail large source={require('../assets/images/y5.png')} style={{height:200,width:200, marginBottom: 20}}/>
                <Button onPress={this.openY5} block danger style={{marginRight:5,marginLeft:5, marginBottom:20,

                }}>
                    <Text style={{ fontFamily:'cairo' ,color:'#fff'}}>جرب الآن</Text>
                </Button>
            </View>
        )
    }

}