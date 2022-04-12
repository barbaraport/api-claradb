import React,{ Component } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { RadioButton } from 'react-native-radio-buttons-group';
import { Colors } from "../../enumerations/Colors";
import { RadioData } from "../../types/RadioData";
import { Styles } from "../assets/styles/Styles";
import {Collapsible} from './Collapsible'

interface CollapsibleProps{
    title:string;
    radioData:RadioData[];
    performsSearchFunction: Function;
    userID: string;
}

interface CollapsibleState{
    isCollapsed:boolean;
    checked:RadioData;
}


export class RadioGroupButtonCollapsible extends Component<CollapsibleProps,CollapsibleState>{
    constructor(props: CollapsibleProps) {
		super(props);

        this.state={
            isCollapsed:false,
            checked: {
                id:'',
                label:'',
                value:''
            }
        }

        this.setChecked=this.setChecked.bind(this);
        this.performSearch = this.performSearch.bind(this);
        
	}

    private setChecked(value:RadioData){
        this.setState({checked:value});
        
    }

    private performSearch(){
        this.props.performsSearchFunction(this.state["checked"]["value"]);

    }

    private buildComponent(){
        const radioGroupButton:JSX.Element=(
            <View>
                {this.props.radioData.map((value,index)=>(
                    <View key={index}>
                        <RadioButton id={index+''} value={value.value} label={value.label} selected={ this.state.checked === value} color={Colors.WHITE} labelStyle={{color:Colors.WHITE,}} onPress={()=> this.setChecked(value)}/>
                    </View>
                ))}
                <TouchableOpacity style={Styles.search} activeOpacity={0.5} onPress={this.performSearch}>
                    <Text>Search</Text>
                </TouchableOpacity>
            </View>
        )

        let component=(
            <View style={{marginBottom:10}}>
                <Collapsible title={this.props.title} component={radioGroupButton} valueDisplay={this.state.checked.label} />
            </View>
        );

        return component;
    }

    render() {
        const component = this.buildComponent();
		return component;
    }
}