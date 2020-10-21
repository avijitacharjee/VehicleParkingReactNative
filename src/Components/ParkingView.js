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
    constructor(props){
        super(props);
        let str = this.props.mask;
        let arr = str.split("");
        this.state = {
            a : arr[0],
            b : arr[1],
            c : arr[2],
            d : arr[3],
            e : arr[4],
            f : arr[5]
        }
    }
    state = {
        a:0,
        b:1,
        c:0,
        d:1,
        e:1,
        f:1
    }
    cl = ()=> {
        console.log(this.state);
    }
    componentDidMount(){
        let str = this.props.mask;
        let arr = str.split("");
        console.log('parkingView');
        this.setState({
            a : arr[0],
            b : arr[1],
            c : arr[2],
            d : arr[3],
            e : arr[4],
            f : arr[5]
        });
        console.log(this.state);
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
                            <ParkingBox name = {this.state.c}/>
                        </View>
                        <View style={styles.right}>
                            <ParkingBox name = {this.state.d}/>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.left}>
                            <ParkingBox name = {this.state.e}/>
                        </View>
                        <View style={styles.right}>
                            <ParkingBox name = {this.state.f}/>
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