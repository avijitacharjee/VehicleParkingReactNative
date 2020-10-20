import React, { Component } from 'react';
import axios from 'axios';
import {
    Text,
    Image,
    View,
    StyleSheet,
    ScrollView,
    TextInput,
    TouchableOpacity,
    ToastAndroid,
    Modal,
    ActivityIndicator
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Park from './Park.js';
const Stack = createStackNavigator();
class Login extends Component {
    state = {
        inProgress : false,
        status : 'Parking space is available. Click to book.',
        email : '',
        password : '',
        mask:'Alarvai'
    }
    showDialog=()=>{
        this.setState({inProgress:true});
    }
    hideDialog=()=>{
        this.setState({inProgress:false});
    }
    login = () => {
        this.showDialog();
        let formData = new FormData();
        formData.append('email',this.state.email);
        formData.append('password',this.state.password); 
        axios.post("https://www.finalproject.xyz/vehicle_parking/api/auth.php", formData).then(
            response=> {
                this.hideDialog();
                console.log(JSON.stringify(response.data));
                if(JSON.stringify(response.data).includes('success')){
                    ToastAndroid.show('Successfully logged in',ToastAndroid.SHORT);
                    console.log(response.data.mask);
                    this.props.navigation.navigate('Park',{mask:response.data.mask});
                }else {
                    ToastAndroid.show('Incorrect Email/password',ToastAndroid.SHORT);
                }
            }
        ).catch(error=> {
            this.hideDialog();
            console.log(error.message);
            ToastAndroid.show('Failed to connect.....',ToastAndroid.SHORT);
        });

        //this.props.navigation.navigate('Park');
    }
    registerPage = () => {
        this.props.navigation.navigate('SignUp');
    }
    render() {
        return (
            <View>
                <Modal
                visible={this.state.inProgress}>
                <View style={{ flex:1,backgroundColor:"#00000080", justifyContent:"center",alignItems:"center"}}>
                    <View style={{backgroundColor:"white",padding:10,borderRadius:5, width:"80%", alignItems:"center"}}>
                    <Text style={styles.progressHeader}>Loading...</Text>
                    <ActivityIndicator size="large" color="#009387"/>
                    </View>
                </View>
                </Modal>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>Welcome</Text>
                            <Text style={styles.headerText2}>Park your vehicle safely</Text>
                        </View>
                        <Animatable.View style={styles.footer}
                            animation="slideInUp">
                            <Text style={styles.text_footer}>Email</Text>
                            <View style={styles.action}>
                                <TextInput
                                    placeholder="abc@example.com"
                                    style={styles.box}
                                    onChangeText = {text=>{
                                        this.setState({email : text})}
                                    }
                                />
                            </View>
                            <Text style={styles.text_footer}>Password</Text>
                            <View style={styles.action}>
                                <TextInput
                                    placeholder="*****"
                                    style={styles.box}
                                    textContentType="password"
                                    onChangeText = {text=>{
                                        this.setState({password : text})}
                                    }
                                />
                            </View>
                            <TouchableOpacity
                                onPress={this.login}
                            >
                                <Animatable.View
                                    style={styles.sign_in_button}
                                    animation="zoomInUp">
                                    <Text style={styles.sign_in_text}>
                                        Sign In
                                </Text>
                                </Animatable.View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={this.registerPage}
                            >
                                <Animatable.View style={styles.sign_out_button}
                                    animation="flash">
                                    <Text style={styles.sign_out_text}>
                                        Sign Up
                                </Text>
                                </Animatable.View >
                            </TouchableOpacity>
                        </Animatable.View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
export default Login
function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
        paddingTop: 100,
        alignItems: 'center'
    },
    headerText: {
        color: '#fff',
        fontSize: 30,
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 50
    },
    text_footer: {
        marginTop: 30
    },
    action: {

    },
    text_input: {
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 5
    },
    sign_in_button: {
        backgroundColor: '#009387',
        marginTop: 30,
        alignItems: 'center',
        borderRadius: 5
    },
    sign_out_button: {
        marginTop: 30,
        alignItems: 'center',
        borderRadius: 5,
        borderColor: '#009387',
        borderWidth: 1
    },
    sign_in_text: {
        color: '#fff',
        margin: 10,
        fontSize: 17

    },
    sign_out_text: {
        color: '#009387',
        margin: 10,
        fontSize: 17

    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 10,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'
    },
    box: {
        borderRadius : 5,
        borderStyle : "solid",
        borderColor : 'black',
        borderWidth : .4,
        height : 40
    },
    headerText2: {
        color: '#000000',
        fontSize: 16,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10
    }
})