import React from 'react';
import './App.css';
import Container from './Components/Container';
import Heading from './Components/Heading';
import HeadingWithContent from './Components/HeadingWithContent';
import { HeadingFC } from './Components/HeadingFC';
import TextWithNumber from './Components/TextWithNumber';
import List from './Components/List';
import MyHeader from './Components/MyHeader';

function App() {
    return (
        <div>
            <Heading title="Hello There"></Heading>
            <HeadingWithContent>
                <em>Hi!!!</em>
            </HeadingWithContent>
            <Container>
                Foo
            </Container>
            <HeadingFC title='Old way'></HeadingFC>
            <TextWithNumber>
                {(num) => <div>The number of the day is: {num}</div>}
            </TextWithNumber>
            <List items={["Zdravko", "Peter", "Martin"]} render={(i: string) => <span>{i}</span>}></List>
            <MyHeader title="Class Component"></MyHeader>
        </div>
    );
}

export default App;
