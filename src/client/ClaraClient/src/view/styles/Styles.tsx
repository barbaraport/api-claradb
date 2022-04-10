import { StyleSheet } from "react-native";
import { Colors } from "../../enumerations/Colors";

export const Styles = StyleSheet.create({
	menuItem: {
		flexDirection: "row",
		marginTop: 5,
		marginBottom: 5,
		paddingRight: 5,
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
		fontSize: 20,
	},
	shadow: {
		shadowColor: Colors.BLACK,
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,
		elevation: 2,
	},
	phoneToolbar: {
		width: "100%",
		height: 25,
		backgroundColor: Colors.BLUE,
	},
	screen: {
		width: "100%",
		height: "100%",
	},
	content: {
		padding: 10,
	},
	buttonContainer: {
		elevation: 8,
		backgroundColor: Colors.PRIMARY_BLUE,
		borderRadius: 20,
		paddingVertical: 10,
		paddingHorizontal: 15,
		alignSelf: "center",
		marginTop: 10,
	},
	dropDown: {
		backgroundColor: Colors.PRIMARY_BLUE,
		borderBottomRightRadius: 10,
		borderBottomLeftRadius: 10,
	},
	dropDownButton: {
		backgroundColor: Colors.PRIMARY_BLUE,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	collapsible:{
		backgroundColor: Colors.PRIMARY_BLUE,
		color: Colors.WHITE,
		padding:10,
		borderBottomLeftRadius:4,
		borderBottomRightRadius:4,

	},
	collapsibleHeader:{
		alignItems:'center',
		flexDirection:'row',
		justifyContent:'space-between',
		borderTopLeftRadius:10,
		borderTopRightRadius:10,
		paddingHorizontal:10,
		paddingVertical:2,
		backgroundColor: Colors.PRIMARY_BLUE,
		color: Colors.WHITE,
	},
	filterFolsTitle:{
		textAlign:'center',
		marginBottom:"10%"
	},
	collapsibleSearchAndDropButton:{
		flex:4,
		flexDirection:'row',
	},
	textInput:{
		backgroundColor:Colors.WHITE,
		borderRadius:50,
		paddingLeft:5,
		width:'80%'
	},
	textInputCollapsible:{
		flexDirection:'row',
		justifyContent:'space-between'
	},
	search:{
		color:Colors.PRIMARY_BLUE,
		backgroundColor:Colors.WHITE,
		paddingHorizontal:7,
		paddingVertical:4,
		borderRadius:50,

	},
	rowStyle: {
		color: Colors.WHITE,
		backgroundColor: Colors.PRIMARY_BLUE,
	},
	buttonText: {
		fontSize: 15,
		color: "#fff",
		fontWeight: "bold",
		alignSelf: "center",
		textTransform: "uppercase",
	},
	folconnInput: {
		borderRadius: 16,
		paddingTop: 0,
		paddingBottom: 0,
		paddingLeft: 15,
		paddingRight: 0,
		width: 200,
		height: 50,
		fontSize: 20,
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
		backgroundColor: Colors.WHITE,
	},
	loginForm: {
		display: "flex",
		flexDirection: "column",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 42,
		fontWeight: "bold",
		marginBottom: 25,
	},
	background: {
		width: "100%",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	titleWhite: {
		fontSize: 40,
		fontWeight: "bold",
		marginBottom: 20,
		marginTop: 50,
		color: Colors.WHITE,
	},
	label: {
		fontSize: 20,
		marginBottom: 40,
		color: Colors.WHITE,
	},
});
