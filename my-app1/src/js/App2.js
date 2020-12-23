import logo2 from '../static/img/logo2.svg';

import { Button } from 'antd';
import { RightOutlined,MoreOutlined,PlusCircleFilled,ShoppingOutlined,FolderOutlined,CalendarOutlined,MessageOutlined,BellOutlined , DownOutlined , LayoutOutlined , SearchOutlined } from '@ant-design/icons';


import '../css/App2.css';

function App() {
  return (
    <div className="App" style={{background : '#fafcff'}}>
      {/* <header className="App-header">
        <img src={logo2} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br/>
        <table>
          <th>f</th>
          <tr>aa</tr>
          <tr>bbb</tr>
        </table>
        
      </header> */}
      {/* navbar */}
      <div id='navbar'>
        {/* <Button type="primary">Button</Button> */}
        <img class='littleimage' id='logo' src="https://goss.veer.com/creative/vcg/veer/800water/veer-375153397.jpg" alt="Girl in a jacket" ></img>
        <div id='webnameflexbox'>
          <b id='elementorb'>Elementor</b>
          <b id='elementorspan'>qa@elementor.io</b>
        </div>
        <span class='downoutlined' id='firstdownoutlined'>
          <DownOutlined />
        </span>
        <SearchOutlined id='firstSearchOutlined'/>
        <input id='searchinput' placeholder='Search for people,document,goods...'></input>
        <span  class='downoutlined' id='bell'>
          <BellOutlined/>
        </span>
        <img class='littleimage circlelogo' id='logo2' src="https://goss4.veer.com/creative/vcg/veer/612/veer-151181759.jpg" alt="Girl in a jacket" ></img>
        <img class='littleimage circlelogo' id='logo3' src="https://static.veer.com/veer/static/resources/Titles/2020-12-10/327e5a78b4944924824f24b9a5ec92a5.gif" alt="Girl in a jacket" ></img>
        <span id='seconddownoutlined'>
          <DownOutlined/>
        </span>
        <div id='usermenu'></div>
      </div>

      <div id='flexboxmain'>
      {/* leftbar */}
      <div id='leftbar'>
        <span class='leftbaricon' id='leftbarselected'>
          <LayoutOutlined />
          <span class='leftbartext'>Dashboard</span>
        </span>
        <span class='leftbaricon'>
          <MessageOutlined />
          <span class='leftbartext'>Team chat</span>
        </span>
        <span class='leftbaricon'>
          <CalendarOutlined />
          <span class='leftbartext'>Calendar</span>
        </span>
        <span class='leftbaricon'>
          <FolderOutlined />
          <span class='leftbartext'>Documents</span>
        </span>
        <span class='leftbaricon'>
          <ShoppingOutlined />
          <span class='leftbartext'>Store</span>
        </span>
        <span class='leftbaricon' id='intergrations'>
          <span class='leftbartext' >INTEGRATIONS</span>
        </span>
        <span class='leftbaricon'>
          <MessageOutlined />
          <span class='leftbartext'>Jira</span>
        </span>
        <span class='leftbaricon'>
          <CalendarOutlined />
          <span class='leftbartext'>Slack</span>
        </span>
        <span class='leftbaricon'>
          <FolderOutlined />
          <span class='leftbartext'>Intercom</span>
        </span>
        <span class='leftbaricon'>
          <ShoppingOutlined />
          <span class='leftbartext'>Add new plugin</span>
        </span>
        <span class='leftbaricon' id='settings'>
          <FolderOutlined />
          <span class='leftbartext'>Settings</span>
        </span>
        <span class='leftbaricon' id='logout'>
          <ShoppingOutlined />
          <span class='leftbartext'>Log out</span>
        </span>
      </div>


      <div id='content'>
        <span>sssss</span>
      </div>

      {/* rightbar */}
      <div id='rightbar'>
        <div class='rightflexbox' id='rightflexbox1'>
          <PlusCircleFilled id='rightflexbox1-1'/>
          <span id='rightflexbox1-2'>Your cards</span>
          <MoreOutlined id='rightflexbox1-3'/>
        </div>
        
        <div class='rightflexbox' id='rightflexbox2'>
          <div id='rightflexbox2-1'>
            <PlusCircleFilled class='content2-1'/>
            <span class='content2-1'>Debit</span>
          </div>
          <div id='rightflexbox2-2'>
            <span class='text2-2'>....</span>
            <span class='text2-2'>....</span>
            <span class='text2-2'>....</span>
            <span class='text2-2'>1934</span>
          </div>
          <div id='rightflexbox2-3'>
            <span id='text2-3'>07/23</span>
            <PlusCircleFilled id='PlusCircleFilled2-3'/>
          </div>
        </div>

        <div class='rightflexbox' id='rightflexbox3'>
          <span id='text3-1'>Help</span>
          <span id='text3-2'>Teams</span>
        </div>

        <div class='rightflexbox' id='rightflexbox4'>
          <div id='rightflexbox4-1'>
            <span id='content4-1-1'>Popular items</span>
            <span id='content4-1-2'>All feed</span>
          </div>
          <div id='rightflexbox4-2'>
            <div class='rightflexbox4-2-left'>
              <ShoppingOutlined/>
            </div>
            <div class='content4-2'>
              <span id='content4-2-1'>Best offers</span>
              <span id='content4-2-2'>Check our new best offers</span>
            </div>
            <div class='rightflexbox4-2-right'>
              <RightOutlined/>
            </div>
          </div>
        </div>
      </div>
      
      </div>
    </div>
  );
}

export default App;
