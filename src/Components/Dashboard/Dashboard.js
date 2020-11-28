import React from 'react';
import { StyleSheet , Dimensions } from 'react-native';
import {
    View,
    Text
} from 'react-native-animatable'
const {width,height} = Dimensions.get('window');
export default class Dashboard extends React.Component {
    state = {

    };
    render() {
        return (
            <>
                <div className={styles.body}>

                </div>    
            </>
        )
    }
}
const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection : "row"
    },
    body: {
        width: width*.8,
        height: height * .8,
        backgroundColor: '#dddddd',
    }
});