import Home from './screens/Home';
import signup from './screens/Signup';
import signin from './screens/Signin';
import { BrowserRouter, Route } from 'react-router-dom';
import ChildInfo from './screens/ChildInfo';
import MyInfo from './screens/MyInfo';
import CoParentInfo from './screens/CoParentInfo';
import Dashboard from './screens/Dashboard';
import AccessChildInfo from './screens/AccessChildInfo';
import calender from './screens/Calender';
import verify from './screens/Verify';

function App() {
  return (
    <BrowserRouter>

      <Route path="/" component={Home} exact />
      <Route path="/Signup" component={signup} />
      <Route path="/Signin" component={signin} />
      <Route path="/Verify" component={verify} />
      <Route path="/CoParentInfo" component={CoParentInfo} />
      <Route path="/ChildInfo" component={ChildInfo} />
      <Route path="/MyInfo" component={MyInfo} />
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/dashboard/childinfo" component={AccessChildInfo}/>
      <Route path="/dashboard/calender" component={calender}/>

    </BrowserRouter>
  );
}

export default App;
