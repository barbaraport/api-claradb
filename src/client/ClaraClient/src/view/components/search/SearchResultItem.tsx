import React, { Component } from "react";
import { Text, View } from "react-native";


interface SearchResultItemProps {
    id: string,
    title: string,
    equipment: string,
    issueDescription: string
}

export class SearchResultItem extends Component<SearchResultItemProps, any> {
    constructor(props: SearchResultItemProps) {
        super(props);

    }

    private buildComponent(){
        let component = (
            <View style={{marginBottom: 15}}>
                <Text style={{fontSize: 18}}>{this.props["title"] + " - " + this.props["equipment"]}</Text>
                <Text style={{fontSize: 16}}>{this.props["issueDescription"]}</Text>
            </View>
        );

        return component;
    }

    render(){
        const component = this.buildComponent();

        return component;
    }
}