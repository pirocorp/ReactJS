import './App.css';

import Heading from './components/Heading';
import BookList from './components/BookList';
import Counter from './components/Counter';
import Input from './components/Input';

let booksData = [ 
    { title: 'Harry Potter', description: 'Wizards and stuff' },
    { title: 'IT', description: 'It comes back' },
    { title: 'The Bible', description: 'Most important book' },
    { title: 'Chronicles of Narnia', description: 'Talking tigers and stuff' },
    { title: 'Programming with JS', description: 'Guid to JS' },
    { title: 'Empty Description Book'}
];

function App() {
    return (
        <div className="site-wrapper">
            {/* Book Library is Child for Heading */}
            <Heading>
                <h1>Our Book Library</h1>
                <h2>Favorite books</h2>
            </Heading>

            <Counter />
            
            <BookList books={ booksData } />

            <hr/>

            <Input></Input>
        </div>
  );
}

export default App;
