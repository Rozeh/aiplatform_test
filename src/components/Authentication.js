import React from 'react';
import './Authentication.css';

class Authentication extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    render(){
        const inputBoxes = (
            <div>
            <div className="input-group signup-email">
                <div className="input-group-addon">이메일주소</div>
                <input name="username"
                       type="text"
                       placeholder="이메일 주소"
                       onChange={this.handleChange}
                       value={this.state.username}
                />
                <span aria-hidden="true" id="status-email" className="status-icon">
                                        </span>
            </div>
            <div className="input-group signup-password">
                <div className="input-group-addon">비빌번호</div>
                <input type="password"
                       placeholder="비밀번호"
                       name="password"
                       onChange={this.handleChange}
                       value={this.state.password}
                />
                <span aria-hidden="true" id="status-password" className="status-icon">
                </span>
            </div>
        </div>
        );
        const loginView = (
            <div className="basic">
                <div className="container formplexy">
                    <div className="row">
                        <div className="col-lg-4 col-lg-push-4 col-md-6 col-md-push-3 col-sm-8 col-sm-push-2 col-xs-12 logo">
                            <img src="/static/img/logo_light.png" alt="logo" className="img-responsive" />
                        </div>
                    </div>

                    <div class="row">
                        <div className="form-base col-lg-4 col-lg-push-4 col-md-6 col-md-push-3 col-sm-8 col-sm-push-2 col-xs-12">
                            <header>
                                <h1>AI로그인</h1>
                            </header>
                            <section>
                                <form id="login-form">
                                    {inputBoxes}
                                    <div className="row section-action">
                                        <div className="col-xs-8">
                                        </div>
                                        <div className="col-xs-4">
                                            <button className="btn primary pull-right custom-color-back">로그인</button>
                                        </div>
                                    </div>
                                </form>
                            </section>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                        <div className="row">
                            <div className="account-switch col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                                <p>계정이 없으시면 가입하세요.<a href="signup.html" className="custom-color"> 회원가입</a></p>
                            </div>
                        </div>
                    </div>
                </div>

        );
        const registerView = (
            <div className="basic">
                <div className="container formplexy">
                    <div className="row">
                        <div className="col-lg-4 col-lg-push-4 col-md-6 col-md-push-3 col-sm-8 col-sm-push-2 col-xs-12 logo">
                            <img src="/static/img/logo_light.png" alt="logo" className="img-responsive" />
                        </div>
                    </div>
                    <div class="row">
                        <div className="form-base col-lg-4 col-lg-push-4 col-md-6 col-md-push-3 col-sm-8 col-sm-push-2 col-xs-12">
                            <header>
                                <h1>회원가입</h1>
                            </header>
                            <section>
                                <form id="signup-form">
                                    {inputBoxes}
                                    <div className="clearfix"></div>

                                    <div className="row section-action">
                                        <div className="col-xs-4 pull-right">
                                            <button className="btn primary pull-right custom-color-back">작성완료</button>
                                        </div>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        );
        return(
            <div>{this.props.mode ? loginView : registerView }</div>
        );
    }
}

Authentication.propTypes = {
    mode: React.PropTypes.bool,
    onLogin: React.PropTypes.func,
    onRegister: React.PropTypes.func
};

Authentication.defaultProps = {
    mode: true,
    onLogin: (id, pw) => { console.error("login function not defined"); },
    onRegister: (id, pw) => { console.error("register function not defined"); }
};


export default Authentication;


