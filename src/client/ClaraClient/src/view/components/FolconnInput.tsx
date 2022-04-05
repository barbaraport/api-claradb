import React, { Component } from "react";
import { StyleSheet, TextInput } from "react-native";

let styles = StyleSheet.create({
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
        marginBottom: 15
    }
});

interface FolconnInputProps {
    placeholder: string,
    type: "username" | "password",
    secureText: boolean,
    ejectFunction: Function;
}



export class FolconnInput extends Component<FolconnInputProps, any> {
    constructor(props: FolconnInputProps) {
        super(props);

        this.ejectTypedValue = this.ejectTypedValue.bind(this);

    }

    private ejectTypedValue(typedValue: string){
        this.props.ejectFunction(typedValue);

    }

    private buildComponent(){
        let component = (
            <TextInput onChangeText={this.ejectTypedValue} 
                secureTextEntry={this.props["secureText"]} 
                style={styles.folconnInput} 
                textContentType={this.props["type"]} 
                placeholder={this.props["placeholder"]}></TextInput>
        );

        return component;
    }

    render() {
        const component = this.buildComponent();

        return component;
    }

}
