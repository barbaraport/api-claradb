import React, { Component } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { SearchType } from "../../enumerations/SearchType";
import { CarService } from "../../services/CarService";
import { FOLService } from "../../services/FOLService";
import { RadioData } from "../../types/RadioData";
import { SearchQuery } from "../../types/SearchQuery";
import { Styles } from "../assets/styles/Styles";
import { PDFDisplay } from "../components/pdfDisplay/PDFDisplay";
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
	folTitle: string;

	userCarModels: RadioData[];

	inSearch: boolean;
	searchType: SearchType;
	searchFilter: string;
	showPdf: boolean;

	categories: Array<any>

	searchQuery: SearchQuery
}

export class FolPage extends Component<FOLsPageProps, FOLsPageState> {

	private status: RadioData[] = [{ id: '1', label: 'IN EFFECT', value: 'IN EFFECT' }, { id: '2', label: 'CANCELLED', value: 'CANCELLED' }, { id: '3', label: 'INCORPORATED', value: 'INCORPORATED' }]

	private carService = new CarService();

	constructor(props: FOLsPageProps) {
		super(props);
		this.state = {
			model: '',
			title: '',
			folTitle: '',
			category: '',
			keyword: '',
			status: '',
			userCarModels: [],
			inSearch: false,
			searchFilter: "",
			showPdf: false,
			searchType: SearchType.CAR_MODEL,
			categories: [],
			searchQuery: {
				CAR_MODEL: '',
				FOL_CATEGORY: '',
				FOL_KEYWORD: '',
				FOL_STATUS: '',
				FOL_TITLE: ''
			}
		}

		this.setTitle = this.setTitle.bind(this);
		this.setModel = this.setModel.bind(this);
		this.setStatus = this.setStatus.bind(this);
		this.setKeyword = this.setKeyword.bind(this);
		this.setCategory = this.setCategory.bind(this);
		this.showPdfFile = this.showPdfFile.bind(this);
		this.closeFolPdf = this.closeFolPdf.bind(this);
		this.closeSearchResult = this.closeSearchResult.bind(this);
		this.performSearch = this.performSearch.bind(this);
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

	private showPdfFile(title: string) {
		this.setState({ folTitle: title, showPdf: true, inSearch: false });
	}

	private setModel(filter: string) {
		const currentQuery = this.state['searchQuery'];

		currentQuery['CAR_MODEL'] = filter;

		this.setState({searchQuery: currentQuery});

	}

	private setStatus(filter: string) {
		const currentQuery = this.state['searchQuery'];

		currentQuery['FOL_STATUS'] = filter;

		this.setState({searchQuery: currentQuery});

	}

	private setKeyword(filter: string) {
		const currentQuery = this.state['searchQuery'];

		currentQuery['FOL_KEYWORD'] = filter.toLowerCase();

		this.setState({searchQuery: currentQuery});

	}

	private setTitle(filter: string) {
		const currentQuery = this.state['searchQuery'];

		currentQuery['FOL_TITLE'] = filter;

		this.setState({searchQuery: currentQuery});

	}

	private setCategory(filter: string) {
		const currentQuery = this.state['searchQuery'];

		currentQuery['FOL_CATEGORY'] = filter;

		this.setState({searchQuery: currentQuery});

	}

	private closeSearchResult() {
		this.setState({ inSearch: false });

	}

	private closeFolPdf() {
		this.setState({ showPdf: false });
	}

	private performSearch() {
		this.setState({inSearch: true, showPdf: false})
	}

	private buildComponent() {
		let component = (
			<ScrollView style={Styles.folPageScrollViewContent}>
				<Text style={Styles.title}>Filter FOLs</Text>

				{this.state["inSearch"] &&
					<SearchResult
						getFolTitle={this.showPdfFile}
						pageRedirectFunction={this.props.pageRedirectFunction}
						closeSearchResultFunction={this.closeSearchResult}
						searchFilter={this.state["searchQuery"]}
						userID={this.props["userID"]}
					/>
				}

				{
					this.state.showPdf && <PDFDisplay folTitle={this.state.folTitle} closePdfDisplay={this.closeFolPdf} userID={this.props.userID}/>
				}

				<RadioGroupButtonCollapsible userID={this.props["userID"]} title="Car Model" radioData={this.state.userCarModels} performsSearchFunction={this.setModel} />
				<RadioGroupButtonCollapsible userID={this.props["userID"]} title="FOL Status" radioData={this.status} performsSearchFunction={this.setStatus} />
				<TextInputCollapsible userID={this.props["userID"]} title="FOL Keywords" placeholder="Clutch, hydraulic..." performsSearchFunction={this.setKeyword} />
				<TextInputCollapsible userID={this.props["userID"]} title="FOL Title" placeholder="ABC-123/45" performsSearchFunction={this.setTitle} />
				<RadioGroupButtonCollapsible userID={this.props["userID"]} title="FOL Category" radioData={this.state["categories"]} performsSearchFunction={this.setCategory} />

				<TouchableOpacity style={Styles.search} activeOpacity={0.5} onPress={this.performSearch}>
                    <Text>Search</Text>
                </TouchableOpacity>
			</ScrollView>
		);

		return component;
	}

	render() {
		const component = this.buildComponent();
		return component;
	}
}
