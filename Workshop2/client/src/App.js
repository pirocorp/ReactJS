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
import AdvancedTechniques from './components/AdvancedTechniques/AdvancedTechniques';
import AdvancedTechniques2 from './components/AdvancedTechniques2/AdvancedTechniques';
import AdvancedTechniques3 from './components/AdvancedTechniques3/AdvancedTechniques';

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
                <Route path="/advanced" exact component={ AdvancedTechniques } />
                <Route path="/advanced2" exact component={ AdvancedTechniques2 } />
                <Route path="/advanced3" exact component={ AdvancedTechniques3 } />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
