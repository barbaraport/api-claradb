import { MaterialIcons } from '@expo/vector-icons';
import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import CollapsibleComponent from 'react-native-collapsible';
import { Colors } from "../../enumerations/Colors";
import { Sizes } from "../../enumerations/Sizes";
import { Styles } from "../assets/styles/Styles";

interface CollapsibleProps{
    title:string;
    valueDisplay:string;
    component:JSX.Element
}

interface CollapsibleState{
    isCollapsed:boolean;
}


export class Collapsible extends Component<CollapsibleProps,CollapsibleState>{
    constructor(props: CollapsibleProps) {
		super(props);

        this.state={
            isCollapsed:false,
        }
	}

    private changeCollapsedValue(){
        const newValue:boolean=!this.state.isCollapsed;
        this.setState({isCollapsed:newValue})
    }

    private buildComponent(){
        let component=(
            <View style={{marginBottom:10}}>
                <TouchableOpacity>
                <View style={Styles.collapsibleHeader}>
                    <Text style={{color:Colors.WHITE}}>{this.props.title}: {this.props.valueDisplay}</Text>
                        <View>
                            <TouchableOpacity onPress={()=>this.changeCollapsedValue()}>
                                <MaterialIcons name="keyboard-arrow-down" size={Sizes.BIGICON} color={Colors.WHITE} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
                <CollapsibleComponent  collapsed={!this.state.isCollapsed} style={Styles.collapsible} >
                    {this.props.component}
                </CollapsibleComponent>
            </View>
        );

        return component;
    }

    render() {
        const component = this.buildComponent();
		return component;
    }
}