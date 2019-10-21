import React from 'react';
import Main from './Main.js';
import SideBar from './SideBar.js';
import 'semantic-ui-css/semantic.min.css';

import {
  Segment,
  Sidebar
} from 'semantic-ui-react';

class App extends React.Component {
  state = {
    visible: false
  }

  handleSlide = (e,value) => {
    this.setState({visible: value})
  }

  render(){
    return (
      <Sidebar.Pushable
        as={Segment}
          className="OuterContainer">

        <SideBar visible={this.state.visible} />

        <Sidebar.Pusher className="MainOuterContainer">
          <Segment basic className="MainInnerContainer">

            <Main handleSlide={this.handleSlide} />

          </Segment>
        </Sidebar.Pusher>

      </Sidebar.Pushable>
    )
  }
}

export default App;
