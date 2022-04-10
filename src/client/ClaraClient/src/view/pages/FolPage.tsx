import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import { RadioData } from "../../types/RadioData";
import {RadioGroupButtonCollapsible} from "../components/RadioGroupButtonCollapsible";
import { TextInputCollapsible } from "../components/TextInputCollapsible";
import { Styles } from "../assets/styles/Styles";

interface HomePageProps {
	pageRedirectFunction: Function;
}

interface HomePageState{
	model:string;
	status:string;
	keyword:string;
	title:string;
	category:string;
}

export class FolPage extends Component<HomePageProps, HomePageState> {
    private models:RadioData[]=[{id:'1',label:'BMW',value:'BMW'},{id:'2',label:'VOLVO',value:'VOLVO'},{id:'3',label:'CHEVROLET',value:'CHEVROLET'}]
    private status:RadioData[]=[{id:'1',label:'IN EFFECT',value:'INEFFECT'},{id:'2',label:'CANCELLED',value:'CANCELLED'},{id:'3',label:'INCORPORATED',value:'INCORPORATED'}]
    private category:RadioData[]=[{id:'1',label:'Cat 1',value:'cat1'},{id:'2',label:'Cat 2',value:'cat2'},{id:'3',label:'Cat 3',value:'cat3'}]


	constructor(props: HomePageProps) {
		super(props);
		this.state={
			model:'',
			title:'',
			category:'',
			keyword:'',
			status:'',
		}

		this.setModel=this.setModel.bind(this);
		this.setStatus=this.setStatus.bind(this);
		this.setKeyword=this.setKeyword.bind(this);
		this.setCategory=this.setCategory.bind(this);
		this.setTitle=this.setTitle.bind(this);
	}

	private setModel(value:string){
		this.setState({model:value})
	}

	private setStatus(value:string){
		this.setState({status:value})
	}

	private setKeyword(value:string){
		this.setState({keyword:value})
	}

	private setTitle(value:string){
		this.setState({title:value})
	}

	private setCategory(value:string){
		this.setState({category:value})
	}

	private buildComponent() {
		let component = (
			<ScrollView style={Styles.folPageScrollViewContent}>
				<Text style={Styles.title}>Filter FOLs:</Text>

				<RadioGroupButtonCollapsible title="Car Model" radioData={this.models} ejectData={this.setModel} />
				<RadioGroupButtonCollapsible title="FOL Status" radioData={this.status} ejectData={this.setStatus} />
				<TextInputCollapsible title="FOL Keyword" ejectData={this.setKeyword} />
				<TextInputCollapsible title="FOL Title" ejectData={this.setTitle} />
				<RadioGroupButtonCollapsible title=" FOL Category" radioData={this.category} ejectData={this.setCategory} />
			</ScrollView>
		);

		return component;
	}

	render() {
		const component = this.buildComponent();
		return component;
	}
}
