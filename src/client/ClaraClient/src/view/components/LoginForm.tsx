import React, { Component } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { FolconnButton } from "./FolconnButton";
import { FolconnInput } from "./FolconnInput";


const styles = StyleSheet.create({
    formModal: {
        borderRadius: 15,
        display: "flex",
        alignSelf: "center",
        flexDirection: "column",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        paddingTop: 40,
        paddingBottom: 40,
        paddingLeft: 40,
        paddingRight: 40,
    },
    loginForm: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    folconnInput: {
        borderRadius: 16,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 15,
        paddingRight: 0,
        width: 200,
        height: 50,
        fontSize: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.10,
        shadowRadius: 1.50,
        elevation: 2,
        marginBottom: 10
    },
    text: {
        fontSize: 42,
        fontWeight: "bold",
        marginBottom: 25
    }
});

interface LoginFormProps {
    redirectPageFunction: Function;
}

interface LoginFormState {
    typedUserName: string,
    typedPassword: string;

}

export class LoginForm extends Component<LoginFormProps, LoginFormState> {
    constructor(props: LoginFormProps) {
        super(props);

        this.state = {
            typedUserName: "",
            typedPassword: ""
        };

        this.submitLoginForm = this.submitLoginForm.bind(this);
        this.receiveTypedPassword = this.receiveTypedPassword.bind(this);
        this.receiveTypedUserName = this.receiveTypedUserName.bind(this);
        
    }

    private receiveTypedUserName(typedUserName: string){
        this.setState({typedUserName: typedUserName});
        
    }
    
    private receiveTypedPassword(typedPassword: string){
        this.setState({typedPassword: typedPassword});

    }

    private submitLoginForm(){
        const userName = this.state["typedUserName"];
        const password = this.state["typedPassword"];

        if(userName === "" || password === ""){
            //Alert.alert("Credenciais inválidas", "Os campos de usuário e senha não devem ser vazios");
            Alert.alert("Invalid credentials", "The username and password fields must be not empty");

        }else {
            Alert.alert("Realizando login");

            this.props.redirectPageFunction("Login")

        }

    }

    private buildComponent(){
        let component = (
            <View style={styles.formModal}>
                <Text style={styles.text}>Welcome!</Text>
                <View>
                    <FolconnInput placeholder="Username" type="username" ejectFunction={this.receiveTypedUserName} secureText={false}/>
                    <FolconnInput placeholder="Password" type="password" ejectFunction={this.receiveTypedPassword} secureText={true}/>
                    <FolconnButton text="Log in" onClick={this.submitLoginForm}/>
                </View>
            </View>
        );

        return component;
    }

    render() {
        let component = this.buildComponent();

        return component;
    }
}