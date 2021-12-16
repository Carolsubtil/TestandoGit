import React from 'react';
import { View, Text, Image } from 'react-native';
import { StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
    body: {
        flex:1,
        backgroundColor: "#4e71ba",
        justifyContent: "center",
    },
    img:{
        width: 50,
        height: 50,
        backgroundColor: "white",
        marginRight: 25,
        marginTop: 10,
    },
    face:{
        fontSize: 50,
        color: "white",
        fontWeight: "bold",
        paddingTop: -30,
    },
    input:{
        width: 300,
        backgroundColor: "white",
        height: 50,
        marginTop: 20,
        color: "gray",
        paddingTop: 15,
        paddingLeft: 15,
        fontSize: 15,
        
    },
    login:{
        width: 300,
        backgroundColor: "#2f477a",
        height: 50,
        marginTop: 20,
        color: "white",
        paddingTop: 10,
        paddingLeft: 119,
        fontSize: 20,
        fontWeight: "bold",
        
    },
});

export default Login;