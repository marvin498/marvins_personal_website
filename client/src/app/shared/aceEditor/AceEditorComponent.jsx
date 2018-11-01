import React from "react"
import {Grid} from "semantic-ui-react"

const AceEditorComponent = (content) => (
    <Grid.Row id="ace_editor">{content}</Grid.Row>
)

export default AceEditorComponent;