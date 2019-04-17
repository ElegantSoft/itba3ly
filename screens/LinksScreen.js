import React, {Component} from 'react';
import {View,Image , StyleSheet, ScrollView} from 'react-native';
import { Container, Header, Content,Title, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import {fetchProducts, setItemId} from '../redux/actions';
import {connect} from 'react-redux';

class LinksScreen extends Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props){
        super(props);
        
        
    }
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps);
        // this.setState(nextProps);
    }
    navigateToProduct(id) {
        this.props.setItemId(id)
        this.props.navigation.navigate('SettingsStack')
    }


    // componentWillMount(){
    //     this.props.fetchProducts();
    // }
    hasProducts(){
        if(this.props.products){
            
                
            return this.props.products.map((item,index)=>{
                return(

                <Card key={index} style={styles.ProductCard}>
                    <CardItem cardBody>
                    <Image source={{uri: item.images[0].src}} style={styles.productImage}/>
                    </CardItem>
                    <CardItem style={{flexDirection:'column'}} >
                        <Text numberOfLines={2}  style={styles.productName}> {item.name} </Text>
                        <Text style={styles.Price} >{item.price} ريال</Text>
                    </CardItem>
                    <CardItem style={{margin:0}}>
                    <Body style={styles.ButtonsContainer} >
                        <Button iconRight transparent style={[styles.ProductButton,]}
                            onPress={() => {this.navigateToProduct(item.id)}}
                        >
                            <Icon style={styles.Icons} name='md-color-palette' />
                        </Button>
                        <Button iconLeft transparent style={[styles.ProductButton, ]}>
                            <Icon  style={styles.Icons} name='share' />
                        </Button>
                    </Body>
                    </CardItem>
                </Card> 
                )
                })
            }}         

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
                {this.hasProducts()}
                </View>
            </ScrollView>
            </View>
            
        )
    }

}
const mapStateToProps  = state =>{
    return {
        products: state.woo.products
    }
}
export default connect(mapStateToProps, {fetchProducts,setItemId})(LinksScreen)
const styles = StyleSheet.create({
    productImage: {
        height:150,
        flex:1,
        marginTop: 5,
        marginRight: 5,
        marginLeft: 5,
    },
    ProductCard:{
        width:'48%',
        marginBottom: 5,
        height:300,
        paddingBottom: 0,
        padding:0
    },
    productContainer:{
        flexWrap:'wrap',
        flexDirection: 'row', 
        padding: 12,
        alignItems: 'stretch',
        justifyContent: 'space-between', 
        backgroundColor: '#f7f7f7',
        marginBottom:60,
        
    },
    ProductButton:{
        backgroundColor: 'transparent',
        borderWidth:0,
        
    },
    ButtonsContainer:{
        flexDirection:'row',
        alignSelf: 'stretch',
        justifyContent:'space-around',
        padding:0
    },
    Icons:{
        color:'#666',
        fontSize: 25,
    },
    productName:{
        textAlign:'left',
        width:'100%',
        fontFamily: 'cairo',
        fontSize:14
    },
    Price: {
        textAlign:'right',
        width:'100%',
        marginTop:5,
        fontSize:12,
        fontFamily:'cairo'
    }
})