import React, { Component } from "react";
import { ScrollView, Text } from "react-native";
import { SearchType } from "../../enumerations/SearchType";
import { CarService } from "../../services/CarService";
import { FOLService } from "../../services/FOLService";
import { RadioData } from "../../types/RadioData";
import { Styles } from "../assets/styles/Styles";
import { RadioGroupButtonCollapsible } from "../components/RadioGroupButtonCollapsible";
import { SearchResult } from "../components/search/SearchResult";
import { TextInputCollapsible } from "../components/TextInputCollapsible";

interface FOLsPageProps {
	pageRedirectFunction: Function,
	userID: string;
}

interface FOLsPageState {
	model: string;
	status: string;
	keyword: string;
	title: string;
	category: string;

	userCarModels: RadioData[];

	inSearch: boolean;
	searchType: SearchType;
	searchFilter: string;

	categories: Array<any>
}

export class FolPage extends Component<FOLsPageProps, FOLsPageState> {

	private status: RadioData[] = [{ id: '1', label: 'IN EFFECT', value: 'IN EFFECT' }, { id: '2', label: 'CANCELLED', value: 'CANCELLED' }, { id: '3', label: 'INCORPORATED', value: 'INCORPORATED' }]

	private carService = new CarService();

	constructor(props: FOLsPageProps) {
		super(props);
		this.state = {
			model: '',
			title: '',
			category: '',
			keyword: '',
			status: '',
			userCarModels: [],
			inSearch: false,
			searchFilter: "",
			searchType: SearchType.CAR_MODEL,
			categories: []
		}

		this.setModel = this.setModel.bind(this);
		this.setStatus = this.setStatus.bind(this);
		this.setKeyword = this.setKeyword.bind(this);
		this.setCategory = this.setCategory.bind(this);
		this.setTitle = this.setTitle.bind(this);
		this.closeSearchResult = this.closeSearchResult.bind(this);

	}

	async componentDidMount() {
		let equipments = await this.carService.getUserCars(this.props["userID"]);
		let categoriesList = await FOLService.getFolsCategories(this.props["userID"]);

		let models: RadioData[] = [];

		let index = 1;
		equipments.forEach((equipment: string) => {
			let model = { id: index.toString(), label: equipment, value: equipment }
			models.push(model)
			index++;
		});

		const categoriesData = [];

		for (let i = 0; i < categoriesList.length; i++) {
			const category = categoriesList[i];

			const categoryObject = {
				id: i + 1,
				label: category,
				value: category
			};

			categoriesData.push(categoryObject);

		}

		this.setState({ userCarModels: models, categories: categoriesData });

	}

	private setModel(filter: string) {
		this.setState({ searchFilter: filter, searchType: SearchType.CAR_MODEL, inSearch: true });

	}

	private setStatus(filter: string) {
		this.setState({ searchFilter: filter, searchType: SearchType.FOL_STATUS, inSearch: true });

	}

	private setKeyword(filter: string) {
		this.setState({ searchFilter: filter, searchType: SearchType.FOL_KEYWORD, inSearch: true });

	}

	private setTitle(filter: string) {
		this.setState({ searchFilter: filter, searchType: SearchType.FOL_TITLE, inSearch: true });

	}

	private setCategory(filter: string) {
		this.setState({ searchFilter: filter, searchType: SearchType.FOL_CATEGORY, inSearch: true });

	}

	private closeSearchResult() {
		this.setState({ inSearch: false });

	}

	private buildComponent() {
		let component = (
			<ScrollView style={Styles.folPageScrollViewContent}>
				<Text style={Styles.title}>Filter FOLs</Text>

				{this.state["inSearch"] &&
					<SearchResult
						pageRedirectFunction={this.props.pageRedirectFunction}
						closeSearchResultFunction={this.closeSearchResult}
						searchType={this.state["searchType"]}
						searchFilter={this.state["searchFilter"]}
						userID={this.props["userID"]}
					/>
				}

				<RadioGroupButtonCollapsible userID={this.props["userID"]} title="Car Model" radioData={this.state.userCarModels} performsSearchFunction={this.setModel} />
				<RadioGroupButtonCollapsible userID={this.props["userID"]} title="FOL Status" radioData={this.status} performsSearchFunction={this.setStatus} />
				<TextInputCollapsible userID={this.props["userID"]} title="FOL Keyword" performsSearchFunction={this.setKeyword} />
				<TextInputCollapsible userID={this.props["userID"]} title="FOL Title" performsSearchFunction={this.setTitle} />
				<RadioGroupButtonCollapsible userID={this.props["userID"]} title="FOL Category" radioData={this.state["categories"]} performsSearchFunction={this.setCategory} />
			</ScrollView>
		);

		return component;
	}

	render() {
		const component = this.buildComponent();
		return component;
	}
}
