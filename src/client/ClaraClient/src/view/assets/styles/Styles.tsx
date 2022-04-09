import { StyleSheet } from "react-native";
import { Colors } from "../../../enumerations/Colors";
import { Sizes } from "../../../enumerations/Sizes";

export const Styles = StyleSheet.create({
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
          width:"100%",
          justifyContent:'space-between',
          alignItems: "center",
          alignContent: "center",
          marginTop: 10
     },
     imageBackground: {
          marginTop: 0,
          width: "100%",
          height: 95,
          zIndex: 0
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
     menu:{
          display: "flex",
          flexDirection: "row",
          alignContent: "space-between"
     },
     menuItem: {
          flexDirection: "row",
          marginTop: 5,
          marginBottom: 5,
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
     text: {
          paddingLeft: 5,
          fontSize: 20
     },
     shadow: {
          shadowColor: Colors.BLACK,
          shadowOffset: {
               width: 0,
               height: 1,
          },
          shadowOpacity: 0.20,
          shadowRadius: 1.41,
          elevation: 2
     },
     screen: { },
     content: {
          padding: 10
     },
     buttonContainer: {
          elevation: 8,
          backgroundColor: Colors.PRIMARY_BLUE,
          borderRadius: 20,
          paddingVertical: 10,
          paddingHorizontal: 15,
          alignSelf: "center",
          marginTop: 10
     },
     buttonText: {
          fontSize: 15,
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
          marginBottom: 25
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