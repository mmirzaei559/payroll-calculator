import React from 'react';
import GlobalStyles from './globals/GlobalStyles';
import Form from "./components/Form/Form";

const App = () => {

    return (
        <div className="App">
            <GlobalStyles/>
            <h1>Payroll Calculator</h1>
            <Form />
        </div>
    );
}

export default App;

