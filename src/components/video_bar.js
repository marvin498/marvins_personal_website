import React, {Component} from 'react';
import TestComp from './test_component';

class VideoBar extends Component{
    render(){
        return (
        <ol>
          By:  <TestComp/> 
        </ol>);
    }
}
export default VideoBar;