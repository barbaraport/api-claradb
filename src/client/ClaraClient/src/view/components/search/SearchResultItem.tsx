import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";


interface SearchResultItemProps {
    id: string,
    title: string,
    equipment: string,
    status: string,
    issueDescription: string,
    onPress: Function
}

export class SearchResultItem extends Component<SearchResultItemProps, any> {
    constructor(props: SearchResultItemProps) {
        super(props);

        this.openPdf = this.openPdf.bind(this);
    }

    private openPdf() {
        this.props.onPress(this.props.title);
    }

    private buildComponent() {
        let component = (
            <TouchableOpacity activeOpacity={0.3} onPress={this.openPdf}>
                <View style={{ marginBottom: 15 }}>
                    <Text style={{ fontSize: 18 }}>{this.props["title"] + " - " + this.props["status"]}</Text>
                    <Text style={{ fontSize: 16 }}>{this.props["equipment"] + " - " + this.props["issueDescription"]}</Text>
                </View>
            </TouchableOpacity>
        );

        return component;
    }

    render() {
        const component = this.buildComponent();

        return component;
    }
}