import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Categories from './components/Categories';
import PetDetails from './components/PetDetails';

function App() {
    return (
        <div id="container">
            <Header />
            
            <Switch>
                <Route path="/" exact component={ Categories } />
                <Route path="/categories/:category" exact component={ Categories } />
                <Route path="/pets/details/:petId" exact component={ PetDetails }/>
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
