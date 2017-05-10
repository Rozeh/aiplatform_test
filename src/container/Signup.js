import React from 'react';
import {Authentication} from '../components';

class Signup extends React.Component{
    render(){
        return(
            <div>
                <Authentication mode={false} />
            </div>
        );
    }
}

export default Signup;
