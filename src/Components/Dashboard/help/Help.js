import React, { Component } from 'react'
import { Text, View } from 'react-native-animatable'
import {Button, Linking, StyleSheet, TouchableOpacity} from 'react-native'


export class Help extends Component {
    call = () => {
        Linking.openURL("tel:01878362895");
    }
    render() {
        return (
            <View style={styles.body}>
                <Text style={styles.text}>Phone : 01878362896 </Text>
                <TouchableOpacity onPress={this.call}>
                    <Text style= {styles.callButton}>Call</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    btn: {
        alignSelf: "center"
    },
    body: {
        display: "flex",
        padding: 10
    },
    text: {
        fontSize: 18,
        padding: 20,
        elevation: 20,
        backgroundColor: "#7bbf87",
        backgroundColor: "#505050",
        margin: 10,
        color: "white",
        borderRadius : 5,
    },
    callButton: {
        fontSize: 18,
        paddingStart: 20,
        paddingBottom: 10,
        paddingEnd: 20,
        paddingTop: 10,
        margin: 10,
        elevation: 20,
        textAlign: "right",
        backgroundColor: "red",
        flexWrap: "wrap",
        display: "flex",
        alignSelf: "flex-end",
        color: "white",
        borderRadius : 10
    }
});

export default Help
