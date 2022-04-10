import React,{ Component } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { Sizes } from "../../enumerations/Sizes";
import { Styles } from "../styles/Styles";
import { Pressable, Text, TouchableHighlight, View } from "react-native";
import CollapsibleComponent from 'react-native-collapsible';
import RadioGroup, { RadioButton } from 'react-native-radio-buttons-group';
import { Colors } from "../../enumerations/Colors";
import { RadioData } from "../../types/RadioData";

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
                <TouchableHighlight>
                <View style={Styles.collapsibleHeader}>
                    <Text style={{color:Colors.WHITE}}>{this.props.title}: {this.props.valueDisplay}</Text>
                        <View>
                            <TouchableHighlight onPress={()=>this.changeCollapsedValue()}>
                                <MaterialIcons name="keyboard-arrow-down" size={Sizes.BIGICON} color={Colors.WHITE} />
                            </TouchableHighlight>
                        </View>
                    </View>
                </TouchableHighlight>
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