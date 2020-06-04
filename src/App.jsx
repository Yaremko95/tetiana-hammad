import React, {Component} from 'react';
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import books from "./data/fantasy.json"
import Booklist from "./components/Booklist"


class App extends Component {

    render() {
        
        //console.log(randomBook)
        return (
            <>
                <WarningSign text="This is a WorningSign component"/>
                <MyBadge text={"This is MyBadge component"} variant={"secondary"}/>
                <Booklist />
                
            </>
        );
    }
}

export default App;