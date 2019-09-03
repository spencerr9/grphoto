import React from 'react';
import { Drawer, Button } from 'antd';
import {Icon} from 'antd';

import {Link} from 'react-router-dom';

import '../../Reset.css';
import './MobileDrawer.css';


export default class MobileDrawer extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button onClick={this.showDrawer}><Icon type="menu" /></Button>
        {/* <Button type="primary" onClick={this.showDrawer}>
          Open
        </Button> */}
        <Drawer
          title="LOGO"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
            <div className='links'>
                <Button type='primary'><Link to='/'>Home</Link></Button>
                <Button><Link to='/about'>About</Link></Button>
                <Button><Link to='/about'>Portraits</Link></Button>
                <Button><Link to='/about'>Commercial</Link></Button>
                <Button><Link to='/about'>Weddings</Link></Button>
                <Button><Link to='/about'>Contact</Link></Button>
                <Button><Link to='/about'>(801) 756-8824</Link></Button>
            </div>
          {/* <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p> */}
        </Drawer>
      </div>
    );
  }
}

// ReactDOM.render(<App />, mountNode);