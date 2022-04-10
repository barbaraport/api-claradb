import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Styles } from "../../assets/styles/Styles";

interface FolconnButtonProps {
    text: string,
    size: "small" | "large"
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
        let buttonTtyle;
        let textStyle;

        if(this.props["size"] == "small"){
            buttonTtyle = Styles.buttonContainer;
            textStyle = Styles.buttonText;

        }else if(this.props["size"] == "large"){
            buttonTtyle = Styles.buttonContainerLarge;
            textStyle = Styles.buttonTextLarge;
        }

        let component = (
            <TouchableOpacity activeOpacity={0.6} style={buttonTtyle} onPress={this.onClick}>
                <Text style={textStyle}>{this.props["text"]}</Text>
            </TouchableOpacity>
        );

        return component;
    }

    render() {
        const component = this.buildComponent();

        return component;
    }
}