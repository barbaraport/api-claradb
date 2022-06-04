import React, { Component } from "react";
import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../../enumerations/Colors";
import { FOLSearchResult } from "../../../interfaces/FOLSearchResult";
import { FOLService } from "../../../services/FOLService";
import { SearchQuery } from "../../../types/SearchQuery";
import { SearchResultItem } from "./SearchResultItem";

interface SearchResultProps {
    searchFilter: SearchQuery,
    closeSearchResultFunction: Function,
    pageRedirectFunction: Function,
    getFolTitle: Function,
    userID: string;
}

interface SearchResultState {
    folsSearchResultList: Array<FOLSearchResult>
}

export class SearchResult extends Component<SearchResultProps, SearchResultState> {


    constructor(props: SearchResultProps) {
        super(props);

        this.state = {
            folsSearchResultList: []
        };

        this.closeSearchResult = this.closeSearchResult.bind(this);

    }

    async componentDidMount() {
        let folsList = await FOLService.getFolsByQuery(this.props["searchFilter"]);

        this.setState({ folsSearchResultList: folsList });
    }

    private getSearchResult() {
        const searchResultItems: Array<JSX.Element> = [];

        for (let i = 0; i < this.state["folsSearchResultList"].length; i++) {
            const folData = this.state["folsSearchResultList"][i];

            const component = (
                <SearchResultItem key={"react-list-key-" + i} onPress={this.props.getFolTitle} status={folData["Status"]} equipment={folData["Equipment"]} title={folData["Title"]} id={folData["id"]} issueDescription={folData["Issue description"]} />
            );

            searchResultItems.push(component);

        }

        if (searchResultItems.length > 0) {
            return searchResultItems;
        }

        return <View style={{ alignItems: "center", alignSelf: "center", alignContent: "center" }}>
            <Text>There are no FOLs matching your search.</Text>
        </View>
    }

    private closeSearchResult() {
        this.props.closeSearchResultFunction();

    }

    private buildComponent() {
        let component = (
            <>
                <Modal transparent={true}>
                    <TouchableOpacity style={{ height: "100%" }} activeOpacity={1} onPress={this.closeSearchResult}>
                        <View style={{ alignSelf: "center", marginTop: 120, height: "80%", width: "90%", backgroundColor: Colors.WHITE, borderRadius: 8, shadowColor: "#000", shadowOffset: { width: 0, height: 0, }, shadowOpacity: 0.50, shadowRadius: 4.22, elevation: 5 }}>
                            <Text style={{ fontSize: 26, fontWeight: "bold", marginTop: 20, marginBottom: 20, alignSelf: "center" }}>Search result</Text>
                            <ScrollView style={{ paddingHorizontal: 20 }}>
                                {this.getSearchResult()}
                            </ScrollView>
                        </View>
                    </TouchableOpacity>
                </Modal>
            </>
        );

        return component;
    }

    render() {
        const component = this.buildComponent();

        return component;
    }
}