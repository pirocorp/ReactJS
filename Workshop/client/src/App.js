import { Component } from 'react';

import postService from './services/postsService';

import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';
import Footer from './components/Footer';

import style from './App.module.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        postService.getAll()
            .then(posts => {
                this.setState({ posts })
            });
    }

    render() {
        return (
            <div className={style.app}>            
                <Header></Header>  
                <div className={style.container}>
                    <Menu></Menu>
                    <Main posts={ this.state.posts }></Main>
                </div>    
                <Footer></Footer> 
            </div>        
        );
    }
}

export default App;
