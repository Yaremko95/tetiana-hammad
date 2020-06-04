import React, {Component} from 'react';
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";

class App extends Component {
    render() {
        return (
            <>
                <WarningSign text="This is a WorningSign component"/>
                <MyBadge text={"This is MyBadge component"} variant={"secondary"}/>
            </>
        );
    }
}

export default App;