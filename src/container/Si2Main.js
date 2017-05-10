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
                        <h2 className="taught-by-leaders__title">디자인 강의 교육리더들과 함께하세요.</h2>
                        <h3 className="taught-by-leaders__subtitle">실무영역에서 적용되는 꼭 필요한 강좌를 들어보세요.</h3>
                        <div className="taught-by-leaders__cards-holder">
                            <Cardlist img="/static/img/cardlist/2.png" name="포토샵" date="2017.05.06" des="블라블라블라" cou={5}></Cardlist>
                            <Cardlist img="/static/img/cardlist/3.png" name="일러스트" date="2017.05.06" des="블라블라블라" cou={5}></Cardlist>
                            <Cardlist img="/static/img/cardlist/4.jpg" name="인디자인" date="2017.05.06" des="블라블라블라" cou={5}></Cardlist>
                       
                        </div>
                    </div>
                </div>
            </div>
            </div>


        );
    }
}
export default Si2Main;