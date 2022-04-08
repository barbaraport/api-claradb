import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Styles } from "../../styles/Styles";

interface FolconnButtonProps {
    text: string,
    onClick: Function;
}

export class FolconnButton extends Component<FolconnButtonProps, any> {
    constructor(props: FolconnButtonProps){
        super(props);

        this.onClick = this.onClick.bind(this);

    }

    private onClick(){
        this.props.onClick();

    }

    private buildComponent(){
        let component = (
            <TouchableOpacity activeOpacity={0.6} style={Styles.buttonContainer} onPress={this.onClick}>
                <Text style={Styles.buttonText}>{this.props["text"]}</Text>
            </TouchableOpacity>
        );

        return component;
    }

    render() {
        const component = this.buildComponent();

        return component;
    }
}