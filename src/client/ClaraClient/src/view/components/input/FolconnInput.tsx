import React, { Component } from "react";
import { TextInput } from "react-native";
import { Colors } from "../../../enumerations/Colors";
import { Styles } from "../../assets/styles/Styles";

interface FolconnInputProps {
    placeholder: string,
    type: "username" | "password" | 'none',
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
                style={[Styles.folconnInput]}
                textContentType={this.props["type"]}
                placeholder={this.props["placeholder"]}
                underlineColorAndroid={Colors.SECONDARY_BLUE}>
            </TextInput>
        );

        return component;
    }

    render() {
        const component = this.buildComponent();

        return component;
    }

}
