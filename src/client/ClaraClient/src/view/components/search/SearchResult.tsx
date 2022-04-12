import React, { Component } from "react";
import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
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
        let folsList:FOLSearchResult[] = [];
        
        switch (this.props["searchType"]) {
            case SearchType.CAR_MODEL:
                folsList = await FOLService.getFolsByEquipment(this.props["searchFilter"]);
                
                break;
            case SearchType.FOL_CATEGORY:

                break;
            case SearchType.FOL_KEYWORD:
                
                break;
            case SearchType.FOL_STATUS:
                folsList = await FOLService.getFolsByStatus(this.props["userID"], this.props["searchFilter"]);
                
                break;
            case SearchType.FOL_TITLE:
                
                break;
            default:
                break;
        }
        

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
                    <View style={{margin: 50, marginTop: 120, height: "70%", backgroundColor: Colors.WHITE, borderRadius: 8, shadowColor: "#000", shadowOffset: {width: 0, height: 0,}, shadowOpacity: 0.50, shadowRadius: 4.22, elevation: 5}}>
                        <Text style={{fontSize: 26, fontWeight: "bold", marginTop: 20, marginBottom: 20, alignSelf: "center"}}>Search result</Text>
                        <ScrollView style={{paddingLeft: 20}}>
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