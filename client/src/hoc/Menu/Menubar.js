import React from 'react';
import styled from 'styled-components';
import MenuButton from './MenuButton';

const Menu = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    bottom: 30px;
    width: 560px;
    background-color: #efefef;
    height: 120px;
    left:50%;
    transform: translateX(-50%);
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
`;


export default function Menubar(props) {
    
    let menus = [
        {
            icon:'user',
            color:'black',
            text:'Intro'
        },
        {
            icon:'react',
            color:'#5CD3F3',
            text:'ReactJS'
        },
        {
            icon:'node',
            color:'#87BF00',
            text:'NodeJS'
        },
        {
            icon:'coffee',
            color:'#DE6800',
            text:'DB'
        }
        
    ]

    const renderMenus = (arr)=>{
        return arr.map((a, index) => {
            return <MenuButton showPage={props.showPage} index={index} key={index} icon={a.icon} color={a.color} text={a.text}/>
        })
    }
    
        return <Menu> {renderMenus(menus)} </Menu>;    
}

