import logo from './utils/images/logo.svg'
import './App.css';
import Todo from './components/Todo'
import Cuerpo from './components/Cuerpo'
import Footer from './components/Footer'
import Title from './components/Title'
import GlobalStyle from './globalStyles';


function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Title/>
      <Todo/>
      <Cuerpo/>
      <Footer/>
    </div>
  );
}

export default App;
