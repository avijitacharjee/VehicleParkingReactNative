import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    StatusBar
} from 'react-native';
import * as Animateble from 'react-native-animatable';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ParkingBox from "./Components/ParkingBox";
import ParkingView from "./Components/ParkingView";
class Park extends Component {
    componentDidMount(){
        StatusBar.setBarStyle( 'light-content',true)
        StatusBar.setBackgroundColor("#009387")
    }
    render() {
        return (
            <>
                <View>
                    <TouchableOpacity>
                        <Text
                            style={styles.avail_text}
                        >
                            Parking space is available.
                            Click to book.
                    </Text>
                    </TouchableOpacity>
                    <ParkingView/>

                </View>
            </>
        )
    }
}
export default Park;
const styles = StyleSheet.create({
    avail_text: {
        fontSize: 20,
        padding: 20,
        elevation: 2,
        // backgroundColor: "#00FF00",
        margin: 20,
        borderStyle: "solid",
        marginTop: 50,
        color: '#FFFFFF',
        backgroundColor: '#28a745',
        backgroundColor: '#009387',
        borderRadius: 7,
        textAlign: "center",
        borderColor: '#28A745'
    }

    // .btn-success{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:hover{color:#fff;background-color:#218838;border-color:#1e7e34}.btn-success.focus,.btn-success:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-success.disabled,.btn-success:disabled{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:not(:disabled):not(.disabled).active,.btn-success:not(:disabled):not(.disabled):active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#1e7e34;border-color:#1c7430}.btn-success:not(:disabled):not(.disabled).active:focus,.btn-success:not(:disabled):not(.disabled):active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}
});