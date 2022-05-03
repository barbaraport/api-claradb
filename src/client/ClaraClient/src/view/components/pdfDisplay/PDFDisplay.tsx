import React, { Component } from "react";
import { Modal, TouchableOpacity, View } from "react-native";
import Pdf from "react-native-pdf";
import { FOLService } from "../../../services/FOLService";
import { LocationService } from "../../../services/LocationService";
import { Styles } from "../../assets/styles/Styles";

interface PDFDisplayProps {
    folTitle: string;
    closePdfDisplay: Function;
    userID: string;
}

interface PDFDisplayState {
    fol: string;
    folFirstPage: number;
    showPdf: boolean;
}

export class PDFDisplay extends Component<PDFDisplayProps, PDFDisplayState> {

    private folService = new FOLService();
    private locationService = new LocationService();

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

        let folFirstPageNumber = await this.getFolFirstPage();
        this.setState({ folFirstPage: folFirstPageNumber });

        this.registerLocation();
    }

    private async registerLocation () {
        let position = await this.locationService.getUserPosition();
        await this.folService.registerFolAccess(this.props.folTitle, this.props.userID, position);
    }

    private closePdfDisplay() {
        this.props.closePdfDisplay();
    }

    private async getFolFile() {
        return await this.folService.getFol();
    }

    private async getFolFirstPage() {
        return await this.folService.getFolFirstPage(this.props.folTitle);
    }

    private getPdfRenderer() {
        let view = <>
            <Modal transparent={true}>
                <TouchableOpacity style={{ height: 120 }} activeOpacity={1} onPress={this.closePdfDisplay} />
                <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", height: "100%" }}>
                    <Pdf
                        page={this.state.folFirstPage}
                        source={{ uri: this.state.fol }}
                        style={Styles.pdf}
                    />
                </View>
            </Modal>
        </>

        return view;
    }


    render() {
        let component = this.getPdfRenderer();
        return component;
    }
}