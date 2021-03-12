import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';
import Footer from './components/Footer';

import style from './App.module.css';

function App() {
    return (
        <div className={style.app}>            
            <Header></Header>  
            <div className={style.container}>
                <Menu></Menu>
                <Main></Main>
            </div>    
            <Footer></Footer> 
        </div>        
    );
}

export default App;
