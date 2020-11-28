import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Image, Text, View } from 'react-native-animatable'

export class Profile extends Component {
    render() {
        return (
            <View style={styles.body}>
                <View style={styles.upperBox}>
                    <Image source={{ uri: 'https://avatars3.githubusercontent.com/u/43088176?s=460&u=e037cf1a28abefdbde08d5483c4a46145c97f276&v=4' }} style={styles.img}/>
                </View>
                <View style={styles.bottomBox}>
                    <Text style={styles.text}>Phone : 01818-000000</Text>
                    <Text style={styles.text}>Email : rahim999@gmail.com</Text>
                </View>
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    body: {
        flex : 1
    },
    upperBox: {
        flex: 1,
        backgroundColor: '#505050',
        marginTop: 10,
        marginStart: 10,
        marginEnd : 10,
        marginBottom : 0,
        justifyContent: "center",
    },
    img : {
        width: 160,
        height: 160,
        alignSelf: "center",
        borderRadius : 100
    },
    bottomBox: {
        flex: 2,
        backgroundColor: '#505050AA',
        marginTop: 10,
        marginStart: 10,
        marginEnd : 10,
        marginBottom : 10,
        justifyContent: "flex-start",
        padding : 20,
    },
    text: {
        color: "black",
        backgroundColor: "#ffffff",
        padding: 20,
        marginBottom: 15,
        fontSize : 18
    }

});
export default Profile
