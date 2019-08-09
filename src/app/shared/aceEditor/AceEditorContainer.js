import React, { Component } from "react";
import AceEditorComponent from "./AceEditorComponent.jsx";
import brace from "brace";
import AceEditor from "react-ace";
import "brace/theme/monokai";
import "brace/theme/github";
import "brace/theme/sqlserver";
import "brace/theme/tomorrow_night_bright"; 
import "brace/theme/pastel_on_dark"; 
import "brace/theme/tomorrow_night_eighties";
import "brace/ext/modelist";
import "brace/ext/themelist";
import "brace/mode/jsx";
import "brace/mode/java";

class AceEditorContainer extends Component {
	constructor() {
		super();
		this.state = {
			currentValueInAceEditor: ""
		};
	}

	onChange = newValue => {
		this.setState({ currentValueInAceEditor: newValue });
	};

	returnMode = () => {
		const listOfModes = brace.acequire("ace/ext/modelist");
		const modeToReturn = {
			"React": [listOfModes.modesByName[this.props.mode[0].fileExtension].name, this.props.value[0].fileContent],
			"Java": [listOfModes.modesByName[this.props.mode[1].fileExtension].name, this.props.value[1].fileContent]
		}

		return modeToReturn[this.props.name];
	};

	render() {
		const themeList = brace.acequire("ace/ext/themelist");
		const mode = this.returnMode();
		const theme = themeList.themesByName[this.props.theme].name;
		const props = this.props.value.filter(documentName => 
			documentName.fileLanguage === this.props.name).length !== 0 ? (
				<AceEditor
					mode={mode[0]}
					theme={theme}
					onChange={this.onChange}
					value={mode[1]}
					name={this.props.key}
					width={"100%"}
					focus={true}
					editorProps={{ $blockScrolling: true }}
				/>
			) : 
			<div/>;

		return <AceEditorComponent {...props} />;
	}
}

export default AceEditorContainer;
