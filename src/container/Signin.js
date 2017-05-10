import React from 'react';
import {Authentication} from '../components';


class Signin extends React.Component{
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleLogin(id, pw) {
        return this.props.loginRequest(id, pw).then(
            () => {
                if(this.props.status === "SUCCESS") {
                    //세션데이터 가져오기
                    let loginData = {
                        isLogged : true,
                        username : id
                    };
                    document.cookie = 'key=' + btoa(JSON.stringify(loginData));
                    this.props.history.push('/');
                    return true;
                }
                else{
                    return false;
                }
            }
        );
    }

    render(){
        return(
            <div>
                <Authentication mode={true}
                onLogin={this.handleLogin} />
            </div>
        );
    }
}

export default Signin;