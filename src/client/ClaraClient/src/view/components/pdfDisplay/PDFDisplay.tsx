import React, { Component } from "react";
import { Modal, View } from "react-native";
import Pdf from "react-native-pdf";
import { FOLService } from "../../../services/FOLService";
import { Styles } from "../../assets/styles/Styles";

interface PDFDisplayProps {
    folTitle: string;
}

interface PDFDisplayState {
    fol: string;
    folFirstPage: number;
}

export class PDFDisplay extends Component<PDFDisplayProps, PDFDisplayState> {

    private folService = new FOLService();

    constructor(props: PDFDisplayProps) {
        super(props);

        this.state = {
            fol: "",
            folFirstPage: 5
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

        let view = <Modal transparent={true}>
            <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", marginTop:120 }}>
                <Pdf
                    page={this.state.folFirstPage}
                    source={{ uri: this.state.fol }}
                    style={Styles.pdf}
                />
            </View>
        </Modal>

        return view;
    }


    render() {
        let component = this.getPdfRenderer();
        return component;
    }
}