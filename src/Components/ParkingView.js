import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Dimensions
} from 'react-native';
import ParkingBox from './ParkingBox';
import {View} from 'react-native-animatable';
import { TouchableOpacity } from 'react-native-gesture-handler';
class ParkingView extends Component {
    state = {
        a:1
    }
    cl = ()=> {
        this.setState({a:0})
        console.log('clicked');
    }
    render(){
        return(
            <>
                <View style = {styles.container} animation = "zoomInUp">
                    <View style={styles.row}>
                        <TouchableOpacity onPress={this.cl}>
                        <View style={styles.left}>
                            <ParkingBox name= {this.state.a}/>
                        </View>
                        </TouchableOpacity>
                        
                        <View style={styles.right}>
                            <ParkingBox name = {this.state.b}/>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.left}>
                            <ParkingBox name = "0"/>
                        </View>
                        <View style={styles.right}>
                            <ParkingBox name = "1"/>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.left}>
                            <ParkingBox name = "0"/>
                        </View>
                        <View style={styles.right}>
                            <ParkingBox name = "0"/>
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