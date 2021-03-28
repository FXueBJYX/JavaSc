import logo from './logo.svg';
import './App.css';
import {Link,Route} from 'react-router-dom'
import Home from './views/Home'
import Details from './views/Details'


function App() {
  return (
    <div className="App">

      test
      <Link to="/">首页</Link>,
      <Link to="/details">详情页</Link>,

      {/* 只有一个"/"时  首页都存在 exact时严格匹配模式 */}
      <Route path="/" exact component={Home}></Route>
      {/* <Route path="/home" component={Home}></Route> */}
      <Route path="/details" component={Details}></Route>
      

      
    </div>
  );
}

export default App;
