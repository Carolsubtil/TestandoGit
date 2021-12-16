import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {styles} from './styles';

const Login = () => {
    return(
        <View style ={styles.body}>
            <View style={{justifyContent: "center", marginLeft: 50,}}>
                <View style={{flexDirection:"row"}}>
                    <Image source={require("../../assets/facebook.png")} style= {styles.img}></Image><Text style= {styles.face}>Facebook</Text>
                </View>
                <View style={{marginTop: 40}}>
                    <Text style={styles.input}>Email</Text>
                    <Text style={styles.input}>Password</Text>
                    <Text style={styles.login}>Log In</Text>
                </View>
                <Text style={{color: "white",marginLeft: 85, marginTop: 100,}}>Sing Up for Facebook</Text>
            </View>
            
        </View>
    );
}


export default Login;