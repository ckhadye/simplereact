import logo from './logo.svg';
import {Media, Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';

function App() {
  return (
    <div className="App">

    <Navbar dark color="primary" expand="md">
      <div className="container"> 
      <NavbarBrand color="light" href="/">Ristorante Con Fusion</NavbarBrand>
      </div>
    </Navbar>
    
    <Media tag="ul">
      <Menu />
    </Media>
    
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header> */}
    </div>
  );
}

export default App;
