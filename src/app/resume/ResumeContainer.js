import React, {Component} from "react";
import ResumeComponent from "./ResumeComponent.jsx";
import GridContainer from "./../shared/grid/GridContainer.js";
import CardContainer from "./../shared/cards/CardContainer.js";
import AceEditorContainer from "./../shared/aceEditor/AceEditorContainer.js";
import * as resumeList from "./../../constants/propObjectContainer.js";

class ResumeContainer extends Component {
    componentDidMount(){
    }
    render(){
        const aceCards = Object.entries(resumeList.RESUME.TECHNICAL_EXPERIENCES).map((content, index) =>
            {
                const keyVal = content[1];
                return (
                    <CardContainer
                        key={index}
                        header={content[1]}
                        extra={<AceEditorContainer 
                            theme="tomorrow_night_eighties" 
                            isAceEditorHidden={true} 
                            mode={Object.entries(resumeList.ACE_EDITOR_DOCS)
                                .map(documentContent => documentContent[1])
                            }
                            name={keyVal}
                            value={Object.entries(resumeList.ACE_EDITOR_DOCS)
                                .map(documentContent => documentContent[1])
                            }
                        />}
                        raised={true}
                        generateColor={true}
                    />
                )
            }
        )
        
        const props = {
            header: <GridContainer {...resumeList.RESUME.BASIC_INFO} />,
            education: <GridContainer {...resumeList.RESUME.EDUCATION} />,
            experience: <GridContainer {...aceCards} />,
            objective: <GridContainer {...resumeList.RESUME.OBJECTIVE} />,
            qualification: <GridContainer {...resumeList.RESUME.SUMMARY_OF_QUALIFICATION} />,
            organizations: <GridContainer {...resumeList.RESUME.ON_CAMPUS_ORGANIZATIONS} />,
            //workExperience: <GridContainer {...resumeList.RESUME.WORK_EXPERIENCE} displayPropertyName={false} />
            workExperience: <AceEditorContainer />
        };     
    
        return <ResumeComponent {...props} />
    }
}

export default ResumeContainer;