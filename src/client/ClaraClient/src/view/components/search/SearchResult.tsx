import React, { Component } from "react";
import { Alert, Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../../enumerations/Colors";
import { SearchType } from "../../../enumerations/SearchType";
import { FOLSearchResult } from "../../../interfaces/FOLSearchResult";
import { FOLService } from "../../../services/FOLService";
import { SearchResultItem } from "./SearchResultItem";

interface SearchResultProps {
    searchType: SearchType,
    searchFilter: string,
    closeSearchResultFunction: Function,
    userID: string;
}

interface SearchResultState {
    folsSearchResultList: Array<FOLSearchResult>,
    inPdfReader: boolean,
    chosenFol: string;
}

export class SearchResult extends Component<SearchResultProps, SearchResultState> {

    private folService = new FOLService();

    constructor(props: SearchResultProps) {
        super(props);

        this.state = {
            folsSearchResultList: [],
            inPdfReader: false,
            chosenFol: "MUS-003/19"
        };

        this.closeSearchResult = this.closeSearchResult.bind(this);

    }

    async componentDidMount() {
        let folsList: FOLSearchResult[] = [];

        switch (this.props["searchType"]) {
            case SearchType.CAR_MODEL:
                folsList = await FOLService.getFolsByEquipment(this.props["searchFilter"]);

                break;
            case SearchType.FOL_CATEGORY:
                folsList = await FOLService.getFolsByCategory(this.props["userID"], this.props["searchFilter"]);

                break;
            case SearchType.FOL_KEYWORD:
                folsList = await FOLService.getFolsByKeyword(this.props["userID"], this.props["searchFilter"]);

                break;
            case SearchType.FOL_STATUS:
                folsList = await FOLService.getFolsByStatus(this.props["userID"], this.props["searchFilter"]);

                break;
            case SearchType.FOL_TITLE:
                folsList = await FOLService.getFolsByTitle(this.props["userID"], this.props["searchFilter"]);

                break;
            default:
                break;
        }


        this.setState({ folsSearchResultList: folsList });

    }

    private getSearchResult() {
        const searchResultItems: Array<JSX.Element> = [];

        for (let i = 0; i < this.state["folsSearchResultList"].length; i++) {
            const folData = this.state["folsSearchResultList"][i];

            const component = (
                <TouchableOpacity key={"react-list-key-" + i} activeOpacity={0.3} onPress={() => { this.setToViewFolPdfReader }}>
                    <SearchResultItem equipment={folData["Equipment"]} title={folData["Title"]} id={folData["id"]} issueDescription={folData["Issue description"]} />
                </TouchableOpacity>
            );

            searchResultItems.push(component);

        }

        return searchResultItems;
    }

    private closeSearchResult() {
        this.props.closeSearchResultFunction();

    }

    private closeFolPdfReader() {
        this.setState({ inPdfReader: false });

    }

    private setToViewFolPdfReader() {
        this.setState({ inPdfReader: true });
    }

    private async showFolInPDF() {

        this.closeSearchResult();
        let folFirstPage = await this.folService.getFolFirstPage(this.state.chosenFol);

        let pdfReaderComponent = (
            <Modal transparent={true} onRequestClose={this.closeFolPdfReader}>
                <Text>PDF Reader will be here! FOL Title: {this.state.chosenFol}</Text>
                <Text>First Page: {folFirstPage}</Text>
            </Modal>
            // <Pdf
            //     source={{ uri: "https://www.escaux.com/rsrc/EscauxCustomerDocs/DRD_T38Support_AdminGuide/T38_TEST_PAGES.pdf" }}
            //     page={2}
            //     style={Styles.pdf}
            // />
        );

        return pdfReaderComponent;
    }

    private buildComponent() {
        let component = (
            <>
                <Modal transparent={true} onRequestClose={this.closeSearchResult}>
                    <TouchableOpacity style={{ height: "100%" }} activeOpacity={1} onPress={this.closeSearchResult}>
                        <View style={{ alignSelf: "center", marginTop: 120, height: "80%", width: "90%", backgroundColor: Colors.WHITE, borderRadius: 8, shadowColor: "#000", shadowOffset: { width: 0, height: 0, }, shadowOpacity: 0.50, shadowRadius: 4.22, elevation: 5 }}>
                            <Text style={{ fontSize: 26, fontWeight: "bold", marginTop: 20, marginBottom: 20, alignSelf: "center" }}>Search result</Text>
                            <ScrollView style={{ paddingHorizontal: 20 }}>
                                {this.getSearchResult()}
                            </ScrollView>
                        </View>
                    </TouchableOpacity>
                </Modal>
                {
                    this.state.inPdfReader ?
                    this.showFolInPDF :
                    null
                }
            </>
        );

        return component;
    }

    render() {
        const component = this.buildComponent();

        return component;
    }
}