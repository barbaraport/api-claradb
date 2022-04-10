import React,{ Component } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Styles } from "../styles/Styles";
import { TextInput } from "react-native";
import {Collapsible} from './Collapsible'

interface CollapsibleProps{
    title:string;
    ejectData:Function;
}

interface CollapsibleState{
    isCollapsed:boolean;
    value:string;
}

export class TextInputCollapsible extends React.Component<CollapsibleProps,CollapsibleState>{
    constructor(props: CollapsibleProps) {
		super(props);

        this.state={
            isCollapsed:false,
            value:''
        }

        this.changeInputText=this.changeInputText.bind(this)

	}

    private changeInputText(newValue:string){
        this.setState({value:newValue})
        this.props.ejectData(newValue)
    }

    private buildComponent(){
        const textInput:JSX.Element=(
            <View>
                    <View style={Styles.textInputCollapsible}>
                        <TextInput placeholder="Type words..." style={Styles.textInput} onChangeText={(value)=>this.changeInputText(value)}></TextInput>
                        <Text style={Styles.search}>Search</Text>
                    </View>
            </View>
        )

        let component =(
            <View style={{marginBottom:10}}>
                <Collapsible title={this.props.title} component={textInput} valueDisplay={this.state.value}></Collapsible>
            </View>
        )

        return component;
    }

    render(){
        const component = this.buildComponent();
		return component;
    }
}