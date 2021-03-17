import { Component } from 'react';
import { Route, Link, NavLink, Redirect, Switch } from 'react-router-dom';

import postService from './services/postsService';

import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';

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
                <Header /> 

                <div className={style.container}>
                    <Menu
                        onMenuItemClick={this.onMenuItemClick.bind(this)}
                    />

                    <Switch>
                        {/* Route is a HOC */}
                        <Route path="/" exact>
                            <Main posts={this.getPosts()} />
                        </Route>
                        <Route path="/about/:name?" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route render={() => <h1>404 Not Found</h1>} />
                    </Switch>
                </div>  
                  
                <Footer/> 
            </div>        
        );
    }
}

export default App;
