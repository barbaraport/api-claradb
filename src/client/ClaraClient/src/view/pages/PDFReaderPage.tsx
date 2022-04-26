import React, { Component } from "react";
import { View } from "react-native";
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

        this.state = {
            fol: "",
            folFirstPage: 20
        }
    }

    async componentDidMount() {
        let folBase64 = await this.getFolFile();
        this.setState({ fol: folBase64 });
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
                page={this.state.folFirstPage}
                source={{ uri: this.state.fol }}
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