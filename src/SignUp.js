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
const Stack = createStackNavigator();
class SignUp extends Component {

    state = {
        name : null,
        email : null,
        phone : null,
        password :null,
        inProgress : false
    }
    showProgressDialog=()=>{
        this.setState({
            inProgress : true
        });
    }
    hideProgressDialog=()=>{
        this.setState({
            inProgress : false
        });
    }
    componentDidUpdate(){
        console.log(this.state);
    }
    main = () => {
        this.props.navigation.navigate('Login');
    }
    signUp=()=>{
        let formData = new FormData();
        formData.append('name',this.state.name);
        formData.append('email',this.state.email);
        formData.append('phone',this.state.phone);
        formData.append('password',this.state.password);
        this.showProgressDialog();
        axios.post("https://www.finalproject.xyz/vehicle_parking/api/auth.php", formData).then(
            response=> {
                this.hideProgressDialog();
                ToastAndroid.show(JSON.stringify(response.data),ToastAndroid.SHORT);
                console.log(JSON.stringify(response.data));
            }
        ).catch(error=> {
            this.hideProgressDialog();
            ToastAndroid.show(JSON.stringify(error),ToastAndroid.SHORT);
        });
    }
    render() {
        return (
            <View>
                
                <ScrollView>
                    <Modal
                    visible={this.state.inProgress}>
                    <View style={{ flex:1,backgroundColor:"#00000020", justifyContent:"center",alignItems:"center"}}>
                        <View style={{backgroundColor:"white",padding:10,borderRadius:5, width:"80%", alignItems:"center"}}>
                        <Text style={styles.progressHeader}>Loading...</Text>
                        <ActivityIndicator size="large" color="#f35588"/>
                        </View>
                    </View>
                    </Modal>
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>Register</Text>
                            <Text style={styles.headerText2}>Park your vehicle safely</Text>
                        </View>
                        <Animatable.View style={styles.footer}
                            animation="slideInUp">
                            <Text style={styles.text_footer}>Full Name</Text>
                            <View style={styles.action}>
                                <TextInput
                                    placeholder="eg. John Smith"
                                    style={styles.box}
                                    onChangeText = {text=>this.setState({name: text})}
                                />
                            </View>
                            <Text style={styles.text_footer}>Email</Text>
                            <View style={styles.action}>
                                <TextInput
                                    placeholder="abc@example.com"
                                    style={styles.box}
                                    onChangeText = {text=>this.setState({email: text})}
                                />
                            </View>
                            <Text style={styles.text_footer}>Phone</Text>
                            <View style={styles.action}>
                                <TextInput
                                    placeholder="01xxx-xxxxxx"
                                    style={styles.box}
                                    onChangeText = {text=>this.setState({phone: text})}
                                />
                            </View>
                            <Text style={styles.text_footer}>Password</Text>
                            <View style={styles.action}>
                                <TextInput
                                    placeholder="*****"
                                    style={styles.box}
                                    textContentType="password"
                                    onChangeText = {text=>this.setState({password: text})}
                                />
                            </View>
                            <TouchableOpacity
                            onPress={this.signUp}
                            >
                                <Animatable.View
                                    style={styles.sign_in_button}
                                    animation="zoomInUp">
                                    <Text style={styles.sign_in_text}>
                                        Sign Up
                                </Text>
                                </Animatable.View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={this.main}
                            >
                                <Animatable.View style={styles.sign_out_button}
                                    animation="flash">
                                    <Text style={styles.sign_out_text}>
                                        Sign In
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
export default SignUp
const CustomProgressBar = (visible) => (
    <Modal onRequestClose={() => null} visible={visible}>
      <View style={{ flex: 1, backgroundColor: '#dcdcdc', alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ borderRadius: 10, backgroundColor: 'white', padding: 25 }}>
          <Text style={{ fontSize: 20, fontWeight: '200' }}>Loading</Text>
          <ActivityIndicator size="large" />
        </View>
      </View>
    </Modal>
);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 10,
        paddingTop: 20,
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
        marginTop: 10
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
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: .5,
    },
    headerText2: {
        color: '#000000',
        fontSize: 16,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10
    }
})