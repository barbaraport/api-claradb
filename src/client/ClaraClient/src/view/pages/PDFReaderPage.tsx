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

    private async getFolFile() {
        let folFile = await this.folService.getFol();
        return folFile as string;
    }

    private async getFolFirstPage() {
        let firstPage = await this.folService.getFolFirstPage(this.props.folTitle);
        this.setState({ folFirstPage: firstPage });
    }

    componentDidMount () {
        this.getFolFile();
        this.getFolFirstPage();
    }

    render() {
        const folFile = this.getFolFile();
        return <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
                <Pdf
                    source={{ uri: folFile }}
                    page={1}
                    style={Styles.pdf}
                />
            </View>;
    }
}