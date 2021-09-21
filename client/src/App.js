import Register from './screens/Register';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './screens/Home';

function App() {
  return (
    <BrowserRouter>

      <Route path="/" component={Home} exact></Route>

      <Route path="/register" component={Register}></Route>

    </BrowserRouter>
  );
}

export default App;
