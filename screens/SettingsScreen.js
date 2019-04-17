import React, { Component } from 'react';

import { StyleSheet, Platform, ActivityIndicator,View , Text} from 'react-native';
import { WebView } from 'react-native-webview'
import {connect} from 'react-redux';
class SettingsScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };
    ActivityIndicatorLoadingView() {
        return (
            <ActivityIndicator
                color='#009688'
                size='large'
                style={styles.ActivityIndicatorStyle}
            />
        );
    }
    
    render() {
        const id = this.props.navigation.getParam('id');
        console.log(this.props.navigation);
        return (
            <WebView
                style={styles.WebViewStyle}
                source={{uri: `https://itba3ly.com/design-your-own/?product_id=${this.props.itemId}`}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                renderLoading={this.ActivityIndicatorLoadingView}
                startInLoadingState={true}
                allowFileAccess={true}
            />
            // <View>
            //     <Text>{this.props.itemId} this is the number</Text>
            // </View>

        );
    }
}

const mapStateToProps  = state =>{
    return {
        itemId: state.woo.itemId
    }
}
export default connect(mapStateToProps, {})(SettingsScreen)
const styles = StyleSheet.create(
    {
        WebViewStyle:
            {
                justifyContent: 'center',
                alignItems: 'center',
                flex:1,
                marginTop: Platform.OS === 'ios'? 20 : 0
            },
        ActivityIndicatorStyle:{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center'

        }
    });