import React from 'react';
import { NavLink } from 'react-router-dom';

class Footer extends React.Component{
    render(){
        return(
            <div><NavLink to="/ai">풋터</NavLink></div>
        );
    }
}

export default Footer;