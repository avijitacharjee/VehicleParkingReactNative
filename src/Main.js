import React, { Component } from 'react';
import { 
    Text,
    Image, 
    View, 
    StyleSheet, 
    ScrollView, 
    TextInput, 
    TouchableOpacity
} from 'react-native';
import * as Animatable from 'react-native-animatable';

class Main extends Component {
   state = {
      
   }
   render() {
      return (
         <View>
            <ScrollView>
               <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Welcome</Text>
                        <Text style={styles.headerText2}>Park your vehicle safely</Text>
                    </View>
                    <View style={styles.footer}>
                        <Text style = {styles.text_footer}>Email</Text>
                        <View style={styles.action}>
                            <TextInput
                                placeholder="abc@example.com"
                                style={styles.box}
                                />
                        </View>
                        <Text style = {styles.text_footer}>Password</Text>
                        <View style={styles.action}>
                            <TextInput
                                placeholder="*****"
                                style={styles.box}
                                textContentType="password"
                                />
                        </View>
                        <Animatable.View 
                        style={styles.sign_in_button}
                        animation="zoomInUp">
                            <Text style={styles.sign_in_text}>
                                Sign In
                            </Text>
                        </Animatable.View>
                        <TouchableOpacity style={styles.sign_out_button}>
                            <Text style={styles.sign_out_text}>
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                        
                    </View>
               </View>
            </ScrollView>
         </View>
      )
   }
}
export default Main

const styles = StyleSheet.create ({
    container: {
        flex:1,
        backgroundColor:'#009387'
    },
    header: {
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal:20,
        paddingBottom:50,
        paddingTop:100,
        alignItems: 'center'
    },
    headerText: {
        color: '#fff',
        fontSize: 30,
    },
    footer: {
        flex:3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 50
    },
    text_footer: {
        marginTop:30
    },
    action: {

    },
    text_input: {
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius:5
    },
    sign_in_button: {
        backgroundColor:'#009387',
        marginTop: 30,
        alignItems:'center',
        borderRadius:5
    },
    sign_out_button: {
        marginTop: 30,
        alignItems:'center',
        borderRadius:5,
        borderColor:'#009387',
        borderWidth:1
    },
    sign_in_text: {
        color: '#fff',
        margin:10,
        fontSize:17
        
    },
    sign_out_text: {
        color: '#009387',
        margin:10,
        fontSize:17
        
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
        fontSize:16,
        backgroundColor:'#fff',
        padding: 10,
        borderRadius:10
    }
})