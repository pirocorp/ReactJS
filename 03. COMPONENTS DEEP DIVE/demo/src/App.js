import './App.css';

import Heading from './components/Heading';
import BookList from './components/BookList';
import Counter from './components/Counter';
import Input from './components/Input';
import Footer from './components/Footer';

function App() {
    return (
        <div className="site-wrapper">
            {/* Book Library is Child for Heading */}
            <Heading>
                <h1>Our Book Library</h1>
                <h2>Favorite books</h2>
            </Heading>

            <Counter />
            
            <BookList />

            <hr/>

            <Input></Input>

            <Footer />
        </div>
  );
}

export default App;
