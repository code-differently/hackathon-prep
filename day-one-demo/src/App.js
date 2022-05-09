import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import doSomeMath, {addTwo} from "./components/Math";

function App() {
  console.log(addTwo(1,1));

  return (
    <div className="App">
      <Header title="First Value" author="Tariq"/>
      <Footer firstName="Tariq" lastName="Hook"></Footer>
    </div>
  );
}

export default App;
