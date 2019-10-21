import React from 'react';

import {
  Icon,
  Menu,
  Sidebar
} from 'semantic-ui-react';

const SideBar = (props) => {

  return(
    <Sidebar
      as={Menu}
        animation={'scale down'}
          visible={props.visible}
            width='thin'
              vertical
                icon='labeled'
                  inverted
                    className="sidebar">

      <Menu.Item as='a'>
        <Icon name='home' />
          Option 1
      </Menu.Item>

      <Menu.Item as='a'>
        <Icon name='gamepad' />
          Option 2
      </Menu.Item>

      <Menu.Item as='a'>
        <Icon name='camera' />
          Option 3
      </Menu.Item>
  </Sidebar>
  )
}

export default SideBar;
