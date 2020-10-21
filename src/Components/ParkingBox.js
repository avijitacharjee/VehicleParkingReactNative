import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native-animatable';
const styles = StyleSheet.create({
    parkingBox: {
        backgroundColor : '#009387',
        height: 50,
        width : 50,
        margin: 10,
        borderStyle: "solid"
    },
    filedBox : {
        backgroundColor : '#FF0000',
        height: 50,
        width : 50,
        margin: 10,
        borderStyle: "solid"
    }
});
class ParkingBox extends Component {
    state = {
        boxStyle:styles.parkingBox
    }
    componentDidMount(){
        console.log(this.props.name);
        if(this.props.name=="1"){
            this.setState({boxStyle : styles.parkingBox});
            console.log('hi');
        }else{
            this.setState({boxStyle : styles.filedBox});
            console.log('hello');
        }
    }
    render(){
        return (
            <>
                <View style={this.state.boxStyle} animatio="bounceIn">
                </View>
            </>
        )
    }
}
export default ParkingBox;

