import React, { Component } from 'react';
import ItemList from './ItemList';
import './App.css';

class App extends Component{
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="page-header">
                        <h1>ACME Inventory</h1>
                    </div>
                </div>
            </div>
                <div className="row">
                    <div className="col-sm-12">
                        <ItemList />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <button onClick={refreshPage} >
                            test
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

function refreshPage() {
    window.location.reload(false);
}

export default App;
