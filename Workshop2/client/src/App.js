import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Categories from './components/Categories';
import PetDetails from './components/PetDetails';
import CreatePet from './components/CreatePet';
import PetEdit from './components/PetEdit';


import UncontrolledDemo from './components/UncontrolledDemo';
import ControlledDemo from './components/ControlledDemo/ControlledDemo';
import DemoFunc from './components/DemoFunc';
import DemoFunc2 from './components/DemoFunc2';

function App() {
    return (
        <div id="container">
            <Header />
            
            <Switch>
                <Route path="/" exact component={ Categories } />
                <Route path="/categories/:category" exact component={ Categories } />
                <Route path="/pets/details/:petId" exact component={ PetDetails }/>
                <Route path="/pets/details/:petId/edit" exact component={ PetEdit } />
                <Route path="/pets/create" exact component={ CreatePet }></Route>

                <Route path="/uncontrolled" exact component={ UncontrolledDemo }/>
                <Route path="/controlled" exact component={ ControlledDemo }/>
                <Route path="/demo-func" exact component={ DemoFunc } />
                <Route path="/demo-func2" exact component={ DemoFunc2 } />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
