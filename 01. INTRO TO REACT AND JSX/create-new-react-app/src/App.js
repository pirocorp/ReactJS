import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Lorem from './components/Lorem';
import HelloMessage from './components/HelloMessage'
import ComponentBlender from './components/ComponentBlender';

function App() {
    
    return (
        <div>        
            <Header>Hello From App Component</Header>
                <main>
                    <Lorem></Lorem>
                    <HelloMessage name="Maria" />
                    <ComponentBlender></ComponentBlender>
                </main>
            <Footer />
        </div>
    );
}

export default App;
