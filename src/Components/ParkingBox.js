import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native-animatable';
class ParkingBox extends Component {
    render(){
        return (
            <>
                <View style={styles.parkingBox}>

                </View>
            </>
        )
    }
}
export default ParkingBox;
const styles = StyleSheet.create({
    parkingBox: {
        backgroundColor : '#009387',
        height: 50,
        width : 50,
        margin: 10,
        borderStyle: "solid"
    }
});
