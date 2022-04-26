import React, { Component } from "react";
import { Alert, Modal, Touchable, TouchableOpacity, View } from "react-native";
import Pdf from "react-native-pdf";
import { FOLService } from "../../../services/FOLService";
import { Styles } from "../../assets/styles/Styles";

interface PDFDisplayProps {
    folTitle: string;
    closePdfDisplay: Function;
}

interface PDFDisplayState {
    fol: string;
    folFirstPage: number;
    showPdf: boolean;
}

export class PDFDisplay extends Component<PDFDisplayProps, PDFDisplayState> {

    private folService = new FOLService();

    constructor(props: PDFDisplayProps) {
        super(props);

        this.state = {
            fol: "",
            folFirstPage: 0,
            showPdf: true
        }

        this.closePdfDisplay = this.closePdfDisplay.bind(this);
    }

    async componentDidMount() {
        let folBase64 = await this.getFolFile();
        this.setState({ fol: folBase64 });
    }

    private closePdfDisplay() {
        this.props.closePdfDisplay();
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
            <TouchableOpacity style={{ height: "100%" }} activeOpacity={1} onPress={this.closePdfDisplay}>
                <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", marginTop: 100 }}>
                    <Pdf
                        page={this.state.folFirstPage}
                        source={{ uri: this.state.fol }}
                        style={Styles.pdf}
                    />
                </View>
            </TouchableOpacity>
        </Modal>

        return view;
    }


    render() {
        let component = this.getPdfRenderer();
        return component;
    }
}