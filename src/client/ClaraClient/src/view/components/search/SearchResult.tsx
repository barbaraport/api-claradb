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
    closeSearchResultFunction: Function;

}

interface SearchResultState {
    folsSearchResultList: Array<FOLSearchResult>;

}

export class SearchResult extends Component<SearchResultProps, SearchResultState> {
    constructor(props: SearchResultProps) {
        super(props);

        this.state = {
            folsSearchResultList: []
        };

        this.closeSearchResult = this.closeSearchResult.bind(this);

    }

    async componentDidMount(){
        const folsList = await FOLService.getFolsByEquipment(this.props["searchFilter"]);

        this.setState({folsSearchResultList: folsList});

    }

    private getSearchResult(){
        const searchResultItems: Array<JSX.Element> = [];

        for (let i = 0; i < this.state["folsSearchResultList"].length; i++) {
            const folData = this.state["folsSearchResultList"][i];
            
            const component = (
                <TouchableOpacity key={"react-list-key-" + i} activeOpacity={0.3}>
                    <SearchResultItem equipment={folData["Equipment"]} title={folData["Title"]} id={folData["id"]} issueDescription={folData["Issue description"]}/>
                </TouchableOpacity>
            );

            searchResultItems.push(component);
            
        }

        return searchResultItems;
    }

    private closeSearchResult() {
        this.props.closeSearchResultFunction();

    }
    
    private buildComponent(){
        let component = (
            <Modal transparent={true} onRequestClose={this.closeSearchResult}>
                <TouchableOpacity style={{height: "100%"}} activeOpacity={1} onPress={this.closeSearchResult}>
                    <View style={{margin: 50, paddingLeft: 20, height: "80%", backgroundColor: Colors.WHITE, borderRadius: 8}}>
                        <Text style={{fontSize: 26, fontWeight: "bold", marginTop: 20, marginBottom: 20, alignSelf: "center"}}>Search result</Text>
                        <ScrollView>
                            {this.getSearchResult()}
                        </ScrollView>
                    </View>
                </TouchableOpacity>
            </Modal>
        );

        return component;
    }

    render(){
        const component = this.buildComponent();

        return component;
    }
}