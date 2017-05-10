import React from 'react';
import {Header, Hero} from '../components';

class AiMain extends React.Component{

    render(){
        return(
            <div>
                <Header/>
                <Hero coname="AI코스">
                    <p className="tech-intro">AI코스는 10년간 축척된 교육데이터를 활용해 <br />여러분 개개인의 활용성에 맞게 강의를 추천드리는 서비스입니다.</p>

                    <p className="tech-intro-content">AI의 인공지능은 효율 높은 교육서비스를 제공합니다.</p>
                </Hero>
            </div>
        );
    }
}

export default AiMain;