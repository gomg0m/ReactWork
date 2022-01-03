import React from "react";
import styled from 'styled-components';
import {Icon} from 'semantic-ui-react';

const ButtonStyle = styled.div`
    padding: 30px;
    background-color: #fff;
    border-radius: 10px;
    transition: all 0.3s;
    position: relative;
    border: 2px solid ${props => props.color};
    color: ${props => props.color};
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
    span {
        position: absolute;
        bottom: 5%;
        left: 35%;
        
    }
`

class MenuButton extends React.Component {
    render() {
        return (
        <ButtonStyle 
            onMouseOver={()=>this.props.showPage(this.props.index)}
            color={this.props.color}>
            <Icon 
            name={this.props.icon}
            style={{fontSize: "50px", transform: "translateY(10%)"}}
            />
            <span style={{fontSize: "20px", transform: "translateX(-10%)"}}>{this.props.text}</span>
        </ButtonStyle>
        );
    }
}

export default MenuButton;