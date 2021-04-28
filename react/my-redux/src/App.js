import logo from './logo.svg';
import './App.css';
import store from './store';
import action from './action';

function App() {
  return (
    <div className="App">
      test
      <button onClick={()=>{
        store.dispatch(add())
      }}>click+1</button>
      
    </div>
  );
}

export default App;
