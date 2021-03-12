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
            posts: [],
            selectedPost: null
        }
    }

    componentDidMount() {
        postService.getAll()
            .then(posts => {
                this.setState({ posts })
            });
    }

    onMenuItemClick(id) {
        this.setState({selectedPost: id});
    }

    getPosts(){
        if(!this.state.selectedPost){
            return this.state.posts;
        } else {
            return this.state.posts.filter(x => x.id === this.state.selectedPost);
        }
    }

    render() {
        return (
            <div className={style.app}>            
                <Header></Header>  
                <div className={style.container}>
                    <Menu
                        onMenuItemClick={this.onMenuItemClick.bind(this)}
                    />
                    <Main 
                        posts={ this.getPosts() }                        
                    />
                </div>    
                <Footer/> 
            </div>        
        );
    }
}

export default App;
