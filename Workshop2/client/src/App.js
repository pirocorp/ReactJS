import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Categories from './components/Categories';
import PetDetails from './components/PetDetails';
import CreatePet from './components/CreatePet';

import UncontrolledDemo from './components/UncontrolledDemo';
import ControlledDemo from './components/ControlledDemo/ControlledDemo';
import DemoFunc from './components/DemoFunc/DemoFunc';

function App() {
    return (
        <div id="container">
            <Header />
            
            <Switch>
                <Route path="/" exact component={ Categories } />
                <Route path="/categories/:category" exact component={ Categories } />
                <Route path="/pets/details/:petId" exact component={ PetDetails }/>
                <Route path="/pets/create" exact component={ CreatePet }></Route>

                <Route path="/uncontrolled" exact component={ UncontrolledDemo }/>
                <Route path="/controlled" exact component={ ControlledDemo }/>
                <Route path="/demo-func" exact component={ DemoFunc } />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
