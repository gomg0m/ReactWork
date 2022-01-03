import React, { Component } from 'react'
import Intro from '../../Components/Intro/Intro.js';
import Reactjs from '../../Components/Reactjs/Reactjs.js';
import DBTest from '../../Components/DB/DBTest.js';

class Page extends Component {
    displayPage = (no) => {
        switch (no) {
            case 0:
                return <Intro/>;
            case 1:
                return <Reactjs/>;
            case 2:
                return <DBTest/>;
    
            default:
                return <Intro />;
        }
    }

    render() {
        return (
            <div>
              {this.displayPage(this.props.page)}  
            </div>
        )
    }
}

export default Page;