import React from 'react';
import { StyleSheet , Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import {
    View,
    Text
} from 'react-native-animatable'
let { width, height } = Dimensions.get('window');
if (width > height) {
     width, height  = { height, width };           
}
export default class Dashboard extends React.Component {
    state = {

    };
    onClick = (name) => {
        console.log(name);
    }
    render() {
        
        return (
            <>
                <View style={styles.body}>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.item}  onPress={()=>this.onClick('Profile')}>
                            <Text style={styles.text}> Profile </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item } onPress={()=>this.onClick('Profile')}>
                            <Text style={styles.text}> Reserve </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item} onPress={()=>this.onClick('Profile')}>
                            <Text style={styles.text}> Help </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.item}>
                            <Text style={styles.text}> History </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item}>
                            <Text style={styles.text}> Map </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item}>
                            <Text style={styles.text}> Status </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.item}>
                            <Text style={styles.text}> Emergency </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.gap}>
                            <Text style={styles.text}>  </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item}>
                            <Text style={styles.text}> Logout </Text>
                        </TouchableOpacity>
                    </View>
                </View>    
            </>
        )
    }
}
const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        padding: 10,
    },
    body: {
        padding: 10,
        flexDirection: "column",
        alignContent: "center",
    },
    item: {
        flex: 1,
        backgroundColor: '#009387',
        height: height/6,
        margin: 10,
        borderRadius: 10,
        alignContent: "center",
        elevation: 20,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
    text: {
        color: "#ffffff",
        lineHeight: height/6,
        textAlign: "center",
        fontWeight : 'bold'
    },
    gap: {
        flex: 1,
        backgroundColor: '#00938700',
        height: height/6,
        margin: 10,
        borderRadius: 10,
        alignContent : "center"
    }
});