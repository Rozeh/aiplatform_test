import React from 'react';
import {Header, Start} from '../components';
import Headroom from 'react-headroom';


class Home extends React.Component {
    render(){

        return(
            <div>
                <Headroom>
                    <Header/>
                </Headroom>
                <Start/>
            </div>
        );
    }
}

export default Home;