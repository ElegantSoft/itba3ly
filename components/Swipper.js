import React, { Component } from 'react';
import { Image, FlatList , ScrollView} from 'react-native';
import {
    View,
    Text,
    Spinner,
    Thumbnail,
    Card, CardItem
}
    from 'native-base';
import wp from '../constants/WooAPI'
export default class DeckSwiperExample extends Component {

    constructor(props){
        super(props);
        this.state = {
            categories:[],
            loading: true
        }
    }
    componentWillMount(){
        this.getCategories()
    }
    getCategories(){
        wp.get('products/categories',{
            parent:0,
            hide_empty:true,
            per_page:100
        })
            .then(data => {
                this.setState({categories:data,loading:false});
            })
            .catch(error => {
                console.log(error)
            });

    }
    fetchCats(){
        if(this.state.loading === true){
            return (
                <Spinner color='white' />

            )
        }else{
            return(
                <FlatList
                    horizontal
                    data={this.state.categories}
                    keyExtractor={(x,i)=> i}
                    renderItem={({item})=>
                        <View style={{height:140,padding: 10,backgroundColor:'#130f40',
                            justifyContent: 'space-around',
                            flexDirection:'column',
                            alignItems: 'center',
                        }}>
                            <Thumbnail large source={{uri:item.image ? item.image.src : 'http://placeimg.com/640/480/any'}} />

                            <Text style={{color:'#fff' ,fontFamily:'cairo',fontSize:20,
                                paddingBottom:15,
                                textAlign:'center'}}>{item.name}
                            </Text>
                        </View>
                    }
                />
            )
        }
    }


    render() {
        return (

            <View style={{backgroundColor:'#130f40', justifyContent: 'space-around',
                alignItems: 'center',  }}>
                <Text style={{color:'#fff' ,fontFamily:'cairo',fontSize:32,
                    paddingBottom:15,
                    width:'100%',
                    textAlign:'center'}}>الاقسام
                </Text>
                <ScrollView
                    horizontal={true}>
                    {this.fetchCats()}
                </ScrollView>

            </View>

        );
    }
}