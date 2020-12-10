import logo2 from '../static/img/logo2.svg';
import '../css/App2.css';

function App() {
  return (
    <div className="App" style={{background : 'rgb(25, 66, 192)'}}>
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
      <div id='navbar'>
        <img id='logo' src="https://goss.veer.com/creative/vcg/veer/800water/veer-375153397.jpg" alt="Girl in a jacket" ></img>
        <div id='webnameflexbox'>
          <b id='elementorb'>Elementor</b>
          <span id='elementorspan'>qa@elementor.io</span>
        </div>
        <div id='websitemenu'></div>
        <link id='searchicon'></link>
        <input id='searchinput' placeholder='Search for people,document,goods...'></input>
        <link id='notificationicon'></link>
        <link id='usericon1'></link>
        <link id='usericon2'></link>
        <div id='usermenu'></div>
      </div>
      <div id='leftbar'></div>
      <div id='content'></div>
      <div id='rightbar'></div>
      
    </div>
  );
}

export default App;
