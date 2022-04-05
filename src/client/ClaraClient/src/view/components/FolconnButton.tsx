import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    buttonContainer: {
        elevation: 8,
        backgroundColor: "#1839be",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignSelf: "center",
        marginTop: 10
    },
    buttonText: {
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});

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
            <TouchableOpacity activeOpacity={0.6} style={styles.buttonContainer} onPress={this.onClick}>
                <Text style={styles.buttonText}>{this.props["text"]}</Text>
            </TouchableOpacity>
        );

        return component;
    }

    render() {
        const component = this.buildComponent();

        return component;
    }
}