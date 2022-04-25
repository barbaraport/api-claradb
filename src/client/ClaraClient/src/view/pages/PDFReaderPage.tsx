import React, { Component } from "react";
import Pdf from "react-native-pdf";
import { FOLService } from "../../services/FOLService";
import { Styles } from "../assets/styles/Styles";

interface PDFReaderPageProps { 
     folTitle: string;
}

interface PDFReaderPageState { }

export class PDFReaderPage extends Component<PDFReaderPageProps, PDFReaderPageState> {

     private folService = new FOLService();

     private async showFolInPDF() {

          let folFirstPage = await this.folService.getFolFirstPage(this.props.folTitle);
  
          let pdfReaderComponent = (
              <Pdf
                  source={{ uri: "https://www.escaux.com/rsrc/EscauxCustomerDocs/DRD_T38Support_AdminGuide/T38_TEST_PAGES.pdf" }}
                  page={folFirstPage}
                  style={Styles.pdf}
              />
          );
  
          return pdfReaderComponent;
      }

      render () {
           
          let component = this.showFolInPDF();
          return component;
      }
}