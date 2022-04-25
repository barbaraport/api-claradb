import React, { Component } from "react";
import { View } from "react-native";
import Pdf from "react-native-pdf";
import { FOLService } from "../../services/FOLService";
import { Styles } from "../assets/styles/Styles";

interface PDFReaderPageProps {
    folTitle: string;
    userID: string;
}

interface PDFReaderPageState { }

export class PDFReaderPage extends Component<PDFReaderPageProps, PDFReaderPageState> {

    private folService = new FOLService();

    private async getFolFile() {
        return await this.folService.getFol();
    }

    private async getFolFirstPage () {
        return await this.folService.getFolFirstPage(this.props.folTitle);
    }

    render() {
        return <View style={{flex:1, justifyContent: "flex-start", alignItems: "center" }}>
            <Pdf
                source={{ uri: "https://www.escaux.com/rsrc/EscauxCustomerDocs/DRD_T38Support_AdminGuide/T38_TEST_PAGES.pdf" }}
                page={1}
                style={Styles.pdf}
            />
        </View>;
    }
}