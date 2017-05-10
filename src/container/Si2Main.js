import React from 'react';
import {Header, Hero, Cardlist} from '../components';

class Si2Main extends React.Component{
    render(){

        return(

            <div>
                <Header/>
                <Hero coname="에크마6"></Hero>
                <div>
                <div className="taught-by-leaders" >
                    <div className="taught-by-leaders__inner">
                        <h2 className="taught-by-leaders__title">AI Platform의 교육리더들과 함께하세요.</h2>
                        <h3 className="taught-by-leaders__subtitle">실무영역에서 적용되는 꼭 필요한 강좌를 들어보세요.</h3>
                        <div className="taught-by-leaders__cards-holder">
                            <Cardlist/>
                            <Cardlist/>
                            <Cardlist/>


                        </div>
                    </div>
                </div>
            </div>
            </div>


        );
    }
}
export default Si2Main;