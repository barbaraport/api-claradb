import { StyleSheet } from "react-native";
import { Colors } from "../../../enumerations/Colors";
import { Sizes } from "../../../enumerations/Sizes";

export const Styles = StyleSheet.create({
     pdf: {
          flex: 1,
          width: "100%",
          height: "100%"
     },
     textInputCollapsible: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: "center",
          width: "100%"
     },
     textInput: {
          backgroundColor: Colors.WHITE,
          padding: 1,
          height: 27.5,
          borderRadius: 50,
          paddingLeft: 10,
          width: '80%',
          flex: 1
     },
     search: {
          color: Colors.PRIMARY_BLUE,
          backgroundColor: Colors.WHITE,
          paddingVertical: 5,
          borderRadius: 50,
          alignItems: "center",
          shadowColor: Colors.PRIMARY_BLUE,
          elevation: 15
     },
     collapsibleHeader: {
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          paddingHorizontal: 10,
          paddingVertical: 2,
          backgroundColor: Colors.PRIMARY_BLUE,
          color: Colors.WHITE,
     },
     collapsible: {
          backgroundColor: Colors.PRIMARY_BLUE,
          color: Colors.WHITE,
          padding: 10,
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,

     },
     menuOptionsModal: {
          width: "25%",
          height: 100
     },
     icons: {
          width: "25%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center"
     },
     fixed: {
          width: "50%",
          display: "flex",
          alignItems: "center"
     },
     headerAlignment: {
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: 'space-between',
          alignItems: "center",
          alignContent: "center",
          marginTop: 10
     },
     imageBackground: {
          width: "100%",
          height: 100,
          position: "absolute"
     },
     viewIcon: {
          display: "flex",
          flexDirection: 'row',
          justifyContent: 'space-between',
     },
     headerTitle: {
          fontWeight: "bold",
          fontSize: Sizes.TITLE,
          color: Colors.WHITE,
     },
     menu: {
          display: "flex",
          flexDirection: "row",
          alignContent: "space-between",
          height: 100
     },
     menuItem: {
          display: "flex",
          flexDirection: "row",
          marginTop: 10,
          marginBottom: 10,
          paddingRight: 5
     },
     menuContainer: {
          position: "absolute",
          marginTop: Sizes.BIGICON * 1.25,
          backgroundColor: Colors.WHITE,
          borderRadius: 10,
          paddingVertical: 10,
          paddingHorizontal: 10,
          marginLeft: 5
     },
     textBlack: {
          paddingLeft: 5,
          fontSize: 20,
          color: Colors.BLACK
     },
     textWhite: {
          paddingLeft: 5,
          fontSize: 20,
          color: Colors.WHITE
     },
     shadow: {
          shadowColor: Colors.BLACK,
          shadowOffset: {
               width: 0,
               height: 0,
          },
          shadowOpacity: 0.50,
          shadowRadius: 1.41,
          elevation: 5
     },
     screen: {
          margin: 0,
          width: "100%",
          height: "100%"
     },
     content: {
          position: "absolute",
          width: "100%",
          height: "100%",
          marginTop: 55,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
     },
     homeBackground: {
          width: "100%",
          height: "100%",
          position: "absolute",
          opacity: 0.8,
          backgroundColor: '#B7E1FF'
     },
     folPageScrollViewContent: {
          padding: 10
     },
     buttonContainer: {
          elevation: 8,
          backgroundColor: Colors.PRIMARY_BLUE,
          borderRadius: 20,
          paddingVertical: 10,
          paddingHorizontal: 15,
          alignSelf: "center",
          marginTop: 10,
          width: 125
     },
     buttonContainerLarge: {
          elevation: 8,
          backgroundColor: Colors.PRIMARY_BLUE,
          borderRadius: 20,
          paddingVertical: 10,
          paddingHorizontal: 15,
          alignSelf: "center",
          marginTop: 10,
          width: 200
     },
     buttonText: {
          fontSize: 15,
          color: Colors.WHITE,
          fontWeight: "bold",
          alignSelf: "center",
          textTransform: "uppercase"
     },
     buttonTextLarge: {
          fontSize: 24,
          color: Colors.WHITE,
          fontWeight: "bold",
          alignSelf: "center",
          textTransform: "uppercase"
     },
     folconnInput: {
          borderRadius: 16,
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 15,
          paddingRight: 0,
          width: 200,
          height: 50,
          fontSize: 20
     },
     formModal: {
          borderRadius: 15,
          display: "flex",
          alignSelf: "center",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 40,
          paddingBottom: 40,
          paddingLeft: 40,
          paddingRight: 40,
          backgroundColor: Colors.WHITE
     },
     loginForm: {
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          alignItems: "center"
     },
     title: {
          fontSize: Sizes.TITLE,
          fontWeight: "bold",
          marginBottom: 25,
          textAlign: "center"
     },
     background: {
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
     },
     titleWhite: {
          fontSize: 40,
          fontWeight: "bold",
          marginBottom: 20,
          marginTop: 50,
          color: Colors.WHITE
     },
     label: {
          fontSize: 20,
          marginBottom: 40,
          color: Colors.WHITE
     }
});