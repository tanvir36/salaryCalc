import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/navbar';
import Body from './components/body/body';
import Details from './components/newPerson/newPerson';
function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Body/>
      <Details/>
    </div>
  );
}

export default App;
