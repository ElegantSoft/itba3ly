import React from 'react';
import {
    Platform,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';
import Slideshow from 'react-native-image-slider-show';
import CategoryIcons from '../components/CategoryIcons';
import Swipper from '../components/Swipper';
import TryApp from '../components/TryApp';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
        this.state = {
            position: 1,
            interval: null,
            dataSource: [
                {
                    url:require('../assets/banners/1.jpg'),
                }, {

                    url:require('../assets/banners/2.jpg'),
                }, {

                    url:require('../assets/banners/3.jpg'),
                },
            ],
        };
    }

    componentWillMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({
                    position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
                });
            }, 2000)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <Slideshow
                        dataSource={this.state.dataSource}
                        position={this.state.position}
                        onPositionChanged={position => this.setState({ position })}
                        height={300}
                        titleStyle={{fontSize:40,color:'#fff',marginBottom:100,fontFamily: 'cairo',}}
                        scrollEnabled={false}
                        containerStyle={{textAlign:'center',}}
                        arrowSize={0}
                        indicatorSize={0}
                    />
                    <CategoryIcons />
                    <Swipper />
                    <TryApp/>
                </ScrollView>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

});
