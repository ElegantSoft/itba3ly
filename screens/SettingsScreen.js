import React, { Component } from 'react';

import { StyleSheet, WebView, Platform, ActivityIndicator} from 'react-native';

export default class SettingsScreen extends React.Component {
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

        return (

            <WebView
                style={styles.WebViewStyle}
                source={{uri: 'http://design.elegantsoft.net/design-your-own/?product_id=380'}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                renderLoading={this.ActivityIndicatorLoadingView}
                startInLoadingState={true}
                allowFileAccess={true}
            />

        );
    }
}



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