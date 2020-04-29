import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Trending from './Trending';
import Home from './Home';
import Navbar from './Navbar';
import Default from './Default';
import Search from './Search';

class App extends React.Component{
    
    render(){
        return( 
                <Router>
                <Navbar/>
                <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/trending" component={Trending}/>
                <Route exact path="/search" component={Search}/>
                <Route component={Default}/>
                </Switch>
                </Router>
        )
    }
}

export default App