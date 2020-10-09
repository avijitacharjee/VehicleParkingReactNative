import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Dimensions
} from 'react-native';
import ParkingBox from './ParkingBox';
import {View} from 'react-native-animatable';
class ParkingView extends Component {
    render(){
        return(
            <>
                <View style = {styles.container} animation = "zoomInUp">
                    <View style={styles.row}>
                        <View style={styles.left}>
                            <ParkingBox/>
                        </View>
                        <View style={styles.right}>
                            <ParkingBox/>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.left}>
                            <ParkingBox/>
                        </View>
                        <View style={styles.right}>
                            <ParkingBox/>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.left}>
                            <ParkingBox/>
                        </View>
                        <View style={styles.right}>
                            <ParkingBox/>
                        </View>
                    </View>
                    
                </View>
            </>
        )
    }
}
export default ParkingView;
let fullHeight= Dimensions.get('window').height;
let fullWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        borderStyle : "dotted",
        borderRadius : 5,
        borderColor : "#000000",
        borderWidth : 1,
        margin : 20,
        alignContent : "center",
        justifyContent : "center",
        alignItems : "center",
    },
    left:{
        alignSelf : "flex-start",
        marginEnd : 30
    },
    right: {
        alignSelf : "flex-end"
    },
    row: {
        flexDirection: "row",
        
    }
});