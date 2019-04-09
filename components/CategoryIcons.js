import React, {Component} from 'react'
import {Text, View} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

export default class CategoryIcon extends Component {
    render() {
        return (
            <View style={{
                flexDirection: 'row',
                flex: 2, flexWrap: 'wrap',
                alignSelf: 'flex-start',
                justifyContent: 'flex-end',
            }}>
                <LinearGradient
                    colors={['#2b5876', '#2193b0']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    locations={[0.0, 0.99]}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        height:'100%'
                    }}
                />
                <View style={{
                    height: 140, width: '50%',
                    justifyContent: 'space-around',
                    flexDirection: 'column',
                    alignItems: 'center',


                }}>

                    <Icon
                        name="md-brush"
                        size={45}
                        style={{color: '#55efc4'}}
                    />
                    <Text style={{
                        color: '#55efc4', fontFamily: 'cairo', fontSize: 18,
                        borderBottomColor: '#55efc4',
                        borderBottomWidth: 1,
                        paddingBottom: 15,
                        width: '85%',
                        textAlign: 'center'
                    }}>التصميم سهل</Text>
                </View>
                <View style={{
                    height: 140, width: '50%',
                    justifyContent: 'space-around',
                    flexDirection: 'column',
                    alignItems: 'center',

                }}>
                    <Icon
                        name="md-heart"
                        size={45}
                        style={{color: '#55efc4'}}
                    />
                    <Text style={{
                        color: '#55efc4', fontFamily: 'cairo', fontSize: 18,
                        borderBottomColor: '#55efc4',
                        borderBottomWidth: 1,
                        paddingBottom: 15,
                        width: '85%',
                        textAlign: 'center'
                    }}>هدايا ستعجب احبابك</Text>
                </View>
                <View style={{
                    height: 140, width: '50%',
                    justifyContent: 'space-around',
                    flexDirection: 'column',
                    alignItems: 'center',

                }}>
                    <Icon
                        name="md-bus"
                        size={45}
                        style={{color: '#55efc4'}}
                    />
                    <Text style={{
                        color: '#55efc4', fontFamily: 'cairo', fontSize: 18,
                        borderBottomColor: '#55efc4',
                        borderBottomWidth: 1,
                        paddingBottom: 15,
                        width: '85%',
                        textAlign: 'center'
                    }}>شحن سريع</Text>
                </View>
                <View style={{
                    height: 140, width: '50%',
                    justifyContent: 'space-around',
                    flexDirection: 'column',
                    alignItems: 'center',

                }}>
                    <Icon
                        name="md-thumbs-up"
                        size={45}
                        style={{color: '#55efc4'}}
                    />
                    <Text style={{
                        color: '#55efc4', fontFamily: 'cairo', fontSize: 18,
                        borderBottomColor: '#55efc4',
                        borderBottomWidth: 1,
                        paddingBottom: 15,
                        width: '85%',
                        textAlign: 'center'
                    }}>جودة الخامات عالية</Text>
                </View>
                <View style={{
                    height: 140, width: '50%',
                    justifyContent: 'space-around',
                    flexDirection: 'column',
                    alignItems: 'center',

                }}>
                    <Icon
                        name="md-shirt"
                        size={45}
                        style={{color: '#55efc4'}}
                    />
                    <Text style={{
                        color: '#55efc4', fontFamily: 'cairo', fontSize: 18,
                        borderBottomColor: '#55efc4',
                        borderBottomWidth: 1,
                        paddingBottom: 15,
                        width: '85%',
                        textAlign: 'center'
                    }}> المنتج كما صممته</Text>
                </View>
                <View style={{
                    height: 140, width: '50%',
                    justifyContent: 'space-around',
                    flexDirection: 'column',
                    alignItems: 'center',


                }}>
                    <Icon
                        name="md-flash"
                        size={45}
                        style={{color: '#55efc4'}}
                    />
                    <Text style={{
                        color: '#55efc4', fontFamily: 'cairo', fontSize: 18,
                        borderBottomColor: '#55efc4',
                        borderBottomWidth: 1,
                        paddingBottom: 15,
                        width: '85%',
                        textAlign: 'center'
                    }}>اخرج الابداع الذى بداخلك</Text>
                </View>

            </View>
        )
    }
}