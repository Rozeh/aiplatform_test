import React from 'react';

class Hero extends React.Component{
    render(){
        return(
            <div>
            <section className="hero-technology">
                <div className="container">
                    <div className="title-holder">
                        <div className="tech-logo-holder">
                            <img className="tech-logo" src="/static/img/logo_white.png" alt="Rx" />
                                <h3 className="tech-title">{this.props.coname}</h3>
                        </div>
                        <div className="slogan-holder">
                            <h3 className="slogan">이상준님 안녕하세요</h3>
                        </div>

                    </div>
                    {this.props.children}


                </div>
            </section>
            </div>
        );
    }
}

Hero.defalultProps = {
    coname: ''
}

export default Hero;
