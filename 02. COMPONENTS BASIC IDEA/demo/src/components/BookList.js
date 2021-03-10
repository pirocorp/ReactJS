import { Component } from 'react';

import Book from './Book';

// Smart Component (Container Component) The logic is stays here not in its children
class BookList extends Component {
    constructor(props) {
        super(props)
    }

    bookClicked(title) {
        console.log(`The book ${title} has been added to basket.`);
    }

    render() {
        console.log(this.props);

        return (
            <div>
                <h2>Our Book Collection</h2>

                <ul className="book-list">
                    { this.props.books.map(b => {
                        return (
                            <li>
                                <Book 
                                title={ b.title } 
                                description={ b.description } 
                                // clickHandler={this.bookClicked.bind(this, b.title)}
                                clickHandler={() => this.bookClicked(b.title)}/>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default BookList;