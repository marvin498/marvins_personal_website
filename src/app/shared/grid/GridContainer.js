import React, {Component} from "react";
import GridComponent from "./../grid/GridComponent.jsx";

class GridContainer extends Component {
    render(){
        return <GridComponent {...this.props} />
    }
}

export default GridContainer;