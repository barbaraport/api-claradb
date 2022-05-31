import React, { Component } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import Pdf from "react-native-pdf";
import { Colors } from "../../../enumerations/Colors";
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
    message: string;
}

export class PDFDisplay extends Component<PDFDisplayProps, PDFDisplayState> {

    private folService = new FOLService();
    private locationService = new LocationService();

    constructor(props: PDFDisplayProps) {
        super(props);

        this.state = {
            fol: "",
            folFirstPage: 0,
            showPdf: true,
            message: "Please, wait..."
        }

        this.closePdfDisplay = this.closePdfDisplay.bind(this);
    }

    async componentDidMount() {
        let folBase64 = await this.getFolFile();
        this.setState({ fol: folBase64 });

        let folFirstPage = await this.getFolFirstPage();
        let folFirstPageNumber = folFirstPage.page as number

        this.setState({ folFirstPage: folFirstPageNumber });
        
        if (folBase64 === "data:application/pdf;base64," || folFirstPageNumber === 0) {
            if (folFirstPage.hasOwnProperty("status") && folFirstPage.hasOwnProperty("remarks")) {
                this.setState({message: 
                    this.props.folTitle +
                    "\n\nSorry! This FOL is not available anymore.\n" +
                    "\nActual Status: " + folFirstPage.status +
                    "\nRemarks: " + folFirstPage.remarks
                });
            }
            else {
                this.setState({ message: "Document not available :(" });
            }
        }
        this.registerLocation();
    }

    private async registerLocation() {
        let position = await this.locationService.getUserPosition();
        await this.folService.registerFolAccess(this.props.folTitle, this.props.userID, position);
    }

    private closePdfDisplay() {
        this.props.closePdfDisplay();
    }

    private async getFolFile() {
        return await this.folService.getFol(this.props.folTitle);
    }

    private async getFolFirstPage() {
        return await this.folService.getFolFirstPage(this.props.folTitle);
    }

    private getPdfRenderer() {
        let view = <>
            <Modal transparent={true}>
                {
                    this.state.fol !== "" && this.state.folFirstPage !== 0 ?
                        <>
                            <TouchableOpacity style={{ height: 120 }} activeOpacity={1} onPress={this.closePdfDisplay} />
                            <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", height: "100%" }}>
                                <Pdf
                                    page={this.state.folFirstPage}
                                    source={{ uri: this.state.fol }}
                                    style={Styles.pdf}
                                />
                            </View>
                        </>
                        : <>
                            <Modal transparent={true}>
                                <TouchableOpacity style={{ height: "100%" }} activeOpacity={1} onPress={this.closePdfDisplay}>
                                    <View style={{ alignSelf: "center", justifyContent: "center", alignItems: "center", marginTop: 120, height: "80%", width: "90%", backgroundColor: Colors.WHITE, borderRadius: 8, shadowColor: "#000", shadowOffset: { width: 0, height: 0, }, shadowOpacity: 0.50, shadowRadius: 4.22, elevation: 5 }}>
                                        <Text style={{ fontSize: 14, fontWeight: "bold", margin: 20, alignSelf: "center", textAlign: "center" }}>{this.state.message}</Text>
                                    </View>
                                </TouchableOpacity>
                            </Modal>
                        </>
                }
            </Modal>
        </>

        return view;
    }


    render() {
        let component = this.getPdfRenderer();
        return component;
    }
}