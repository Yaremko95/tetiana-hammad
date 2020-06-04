import React, {Component} from 'react';
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import books from "./data/fantasy.json"
import SingleBook from "./components/SingleBook";

class App extends Component {

    render() {
        const randomBook = books[Math.floor(Math.random() * books.length)]
        console.log(randomBook)
        return (
            <>
                <WarningSign text="This is a WorningSign component"/>
                <MyBadge text={"This is MyBadge component"} variant={"secondary"}/>
                <SingleBook bookObject = {randomBook}/>
            </>
        );
    }
}

export default App;