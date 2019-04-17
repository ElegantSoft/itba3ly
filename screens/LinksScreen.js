import React, {Component} from 'react';
import {View,Image , StyleSheet, ScrollView} from 'react-native';
import { Container, Header, Content,Title, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

export default class LinksScreen extends Component {
    static navigationOptions = {
        header: null,
    };
    render() {
        return (
            <View>
            <Header style={{backgroundColor:'#22a6b3'}} androidStatusBarColor="#2286b3" >
                <Left style={{flex:1}}/>
                <Body style={{flex:1}} >
                    <Title style={{textAlign:'center',width:'100%',fontFamily:'cairo'}}>المنتجات</Title>
                </Body>
                <Right style={{flex:1}} />
            </Header>
            <ScrollView>
            <View style={styles.productContainer}>
                <Card style={styles.ProductCard}>
                    <CardItem cardBody>
                    <Image source={{uri: 'https://via.placeholder.com/350x150'}} style={styles.productImage}/>
                    </CardItem>
                    <CardItem style={{flexDirection:'column'}} >
                        <Text numberOfLines={2}  style={styles.productName}> انا القطة المشمشية حلوة بس شقية نطت حتة نطة اكلت ورك البطة سوسو ليه زعلانة </Text>
                        <Text style={styles.Price} >99 ريال</Text>
                    </CardItem>
                    <CardItem>
                    <Body style={styles.ButtonsContainer} >
                        <Button iconRight transparent style={[styles.ProductButton,]}>
                        
                            <Icon style={styles.Icons} name='md-color-palette' />
                        </Button>
                        <Button iconLeft transparent style={[styles.ProductButton, ]}>
                            <Icon  style={styles.Icons} name='share' />
                        </Button>
                    </Body>
                    </CardItem>
                </Card>
            </View>
            </ScrollView>
            </View>
            
        )
    }

}
const styles = StyleSheet.create({
    productImage: {
        height:200,
        flex:1,
        marginTop: 5,
        marginRight: 5,
        marginLeft: 5,
    },
    ProductCard:{
        width:'48%',
        marginBottom: 12,
        height:390,
        paddingBottom: 5,
    },
    productContainer:{
        flexWrap:'wrap',
        flexDirection: 'row', 
        padding: 12,
        alignItems: 'stretch',
        justifyContent: 'space-between', 
        backgroundColor: '#f7f7f7',
        // marginBottom:60,
        
    },
    ProductButton:{
        backgroundColor: 'transparent',
        borderWidth:0,
    },
    ButtonsContainer:{
        flexDirection:'row',
        alignSelf: 'stretch',
        justifyContent:'space-around'
    },
    Icons:{
        color:'#666',
        fontSize: 30,
    },
    productName:{
        textAlign:'left',
        width:'100%',
        fontFamily: 'cairo',
        fontSize:17
    },
    Price: {
        textAlign:'right',
        width:'100%',
        marginTop:5,
        fontSize:17,
        fontFamily:'cairo'
    }
})