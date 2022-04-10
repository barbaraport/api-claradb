import React, { Component } from "react";
import { Styles } from "../styles/Styles";
import SelectDropdown from "react-native-select-dropdown";
import { MaterialIcons } from "@expo/vector-icons";
import { Sizes } from "../../enumerations/Sizes";
import { Colors } from "../../enumerations/Colors";

interface dropDownProps {
	data: string[];
	onSelect: Function;
}

export class DropDown extends Component<dropDownProps, any> {
	constructor(props: dropDownProps) {
		super(props);
	}

	private buildComponent() {
		let component = (
			<SelectDropdown
				rowStyle={Styles.rowStyle}
				defaultButtonText="Selecionar Status"
				dropdownStyle={Styles.dropDown}
				buttonStyle={Styles.dropDownButton}
				buttonTextStyle={Styles.buttonText}
				rowTextStyle={Styles.rowStyle}
				data={this.props.data}
				renderDropdownIcon={() => (
					<MaterialIcons
						name="expand-more"
						size={Sizes.ICON}
						color={Colors.BLACK}
					/>
				)}
				dropdownIconPosition={"right"}
				onSelect={(selectedItem, index) => {
					this.props.onSelect(selectedItem);
				}}
				buttonTextAfterSelection={(selectedItem, index) => {
					return selectedItem;
				}}
				rowTextForSelection={(item, index) => {
					return item;
				}}
			/>
		);

		return component;
	}

	render() {
		const component = this.buildComponent();

		return component;
	}
}
