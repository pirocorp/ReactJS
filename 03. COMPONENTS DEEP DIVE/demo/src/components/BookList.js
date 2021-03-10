import { Component } from 'react';
import bookService from '../services/bookService';

import Book from './Book';

// Smart Component (Container Component) The logic is stays here not in its children
class BookList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            books: []
        }
    }  

    loadBooks() {
        bookService.getAll()
            .then(books => {
                this.setState(() => ({books}))
            });
    }
     
    componentDidMount() {
        // Simulating network latency
        setInterval(() => this.loadBooks(), 1000);
    }

    bookClicked(title) {
        console.log(`The book ${title} has been added to basket.`);
    }

    render() {
        if(this.state.books.length == 0) {
            return <span>Loading books...</span>
        }

        const bookElements = this.state.books.map(b => (
            <li key={b.id}>
                <Book                    
                    title={ b.title } 
                    description={ b.description } 
                    // clickHandler={this.bookClicked.bind(this, b.title)}
                    clickHandler={() => this.bookClicked(b.title)}
                />
            </li>)
        );

        return (
            <div>
                <h2>Our Book Collection</h2>

                <ul className="book-list">
                    { bookElements }
                </ul>
            </div>
        );
    }
}

export default BookList;