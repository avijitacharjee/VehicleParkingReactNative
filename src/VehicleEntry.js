import React, {Component} from 'react';
import {
    Text,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';
import {View} from 'react-native-animatable';

class VehicleEntry extends Component {
    state = {
        text : 'Avijit Acharjee',
        token : this.props.route.params.mask
    }
    
    render() {  
        let Image_Http_URL ={ uri: 'https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl='+this.state.token};
        return (
            <>
                <View>
                    <Image
                    source={Image_Http_URL}
                    style={styles.qrCode}
                    />
                </View>
            </>
        )
    }
}
export default VehicleEntry;
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
const styles = StyleSheet.create({
    qrCode: {
        backgroundColor: '#000000',
        width : width/1.5,
        height : width/1.5,
        alignSelf : "center",
        marginTop : 100
    }
});