import MenuComponent from './components/MenuComponent'
import LoginComponent from './components/logincomponent'
import CompanyListComponent from './components/companylistcomponent'
import WatchListComponent from './components/watchlistcomponent'
import PerformanceComponent from './components/performancecomponent'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  let login=true;
  return (
    <Router>
      <MenuComponent login={login} /> 
      <Switch>              
      <Route path="/login">
        <LoginComponent/>
      </Route>
      <Route path="/CompaniesList">
        <CompanyListComponent userId={1} login={true}/>
      </Route>     
      <Route path="/watchListComponent" >
        <WatchListComponent userid={1}/>
        </Route>      
      <Route path="/PerformanceComponent"> 
        <PerformanceComponent/>
      </Route>
      {/* <PerformanceComponent/> */}
      </Switch>     
    </Router>
  );
}

export default App;
