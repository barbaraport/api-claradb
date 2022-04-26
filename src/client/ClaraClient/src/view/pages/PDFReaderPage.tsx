import React, { Component } from "react";
import { Text, View } from "react-native";
import Pdf from "react-native-pdf";
import { FOLService } from "../../services/FOLService";
import { Styles } from "../assets/styles/Styles";

interface PDFReaderPageProps {
    folTitle: string;
    userID: string;
}

interface PDFReaderPageState {
    fol: string;
    folFirstPage: number;
}

export class PDFReaderPage extends Component<PDFReaderPageProps, PDFReaderPageState> {

    private folService = new FOLService();

    constructor(props: PDFReaderPageProps) {
        super(props);

        this.setState({ fol: "" });
        this.setState({ folFirstPage: 0 });
    }

    private async getFolFile() {
        let folFile = await this.folService.getFol();
        return folFile as string;
    }

    private async getFolFirstPage() {
        let firstPage = await this.folService.getFolFirstPage(this.props.folTitle);
        return firstPage as number;
    }

    private getPdfRenderer() {

        let view = <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
            <Pdf
                page={2}
                source={{ uri: "http://www.africau.edu/images/default/sample.pdf" }}
                style={Styles.pdf}
            />
        </View>;

        return view;
    }


    render() {
        let component = this.getPdfRenderer();
        return component;
    }
}