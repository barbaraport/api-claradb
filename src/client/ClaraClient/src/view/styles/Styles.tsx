import { StyleSheet } from "react-native";
import { Colors } from "../../enumerations/Colors";

export const Styles = StyleSheet.create({
     headerAlignment: {
          margin:10,
          flex:1,
          flexDirection: "row",
          width:355,
          justifyContent:'space-between',
     },
     iconMargin:{
          marginRight:15
     },
     headerIconsAlignment:{
          flexDirection: "row",
     },
     imageBackground: {
          marginTop: 0,
          width: 400,
          height: 95,
     },
     viewIcon: {
          display: "flex",
          flexDirection: 'row',
          justifyContent: 'space-between',
     },
     headerTitle: {
          fontWeight: "bold",
          fontSize: 28,
          color: Colors.WHITE,
          paddingLeft:'15%'
     },
     menu:{
          position:'absolute'
     },
     menuItem: {
          flexDirection: "row",
          marginTop: 5,
          marginBottom: 5,
          paddingRight: 5
     },
     menuContainer: {
          backgroundColor: Colors.WHITE,
          borderRadius: 10,
          alignSelf: "flex-start",
          paddingVertical: 10,
          paddingHorizontal: 10,
          marginLeft: 5,
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
     phoneToolbar: {
          width: "100%",
          height: 25,
          backgroundColor: Colors.BLUE
     },
     screen: {
          // width: "100%",
          // height: "100%"
     },
     content: {
          padding: 10
     },
     buttonContainer: {
          elevation: 8,
          backgroundColor: "#1839be",
          borderRadius: 20,
          paddingVertical: 10,
          paddingHorizontal: 15,
          alignSelf: "center",
          marginTop: 10
     },
     buttonText: {
          fontSize: 15,
          color: "#fff",
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
          fontSize: 42,
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