import React, { Component } from 'react';
import styled from 'styled-components';
import {flexbox} from '../reusable/styles'
import imgA from '../img/digtaltwin.jpeg';

const IntroContainer = styled.div `
margin: 0 auto;
width : 620px;
height: 440px;
box-shadow: 3px 3px 8px rgba(0,0,0,0.3);
.me {
    width: 100%;
    height: 300px;
}

`;

class Intro extends Component {
    render() {
        return (
            <IntroContainer>
            <flexbox>
                <div className="flex-4">
                    <img src={ imgA}  alt="profile"/>
                </div>
                <div className="flex-6">

                </div>
            </flexbox>
            </IntroContainer>
        )
    }
}

export default Intro;