import React from 'react';
import {Provider} from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from '../utils/History';
import About from './About';
import Categories from './Categories';
import Contact from './Contact';
import Trending from './Trending';
import Home from './Home';
import Navbar from './Navbar';
import Default from './Default';
import Settings from './Settings';
import Search from './Search';
import {store} from './store';

class App extends React.Component{
    
    render(){
        return( 
                <Provider store={store}>
                <Router history={createHistory}>
                <Navbar handleClick={this.handleClick}/>
                <Switch>
                <Route exact path="/"  component={Home}/>
                <Route exact path="/trending" component={Trending}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/categories" component={Categories}/>
                <Route exact path="/search" component={Search}/>
                <Route exact path="/settings" component={Settings}/>
                <Route component={Default}/>
                </Switch>
                </Router>
                </Provider>
        )
    }
}

export default App